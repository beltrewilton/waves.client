import React from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';

import { play, seek } from "../../Redux/features/app.feature.js";


export const AudioViz = (props) => {
    const dispatch = useDispatch();
    const containerRef = useRef();
    const waveSurferRef = useRef({
        isPlaying: () => false,
    })
    const [isPlaying, toggleIsPlaying] = useState(false)
    const [audioprofile, audioprofileSet] = useState()

    useEffect(() => {
        if (props.link == "") return;
        async function getdata() {
            const __response = await fetch(`https://127.0.0.1:8000/dltr?url=${props.link}`)
            const __audioprofile = await __response.json()
            audioprofileSet(__audioprofile)
        }
        getdata() // TODO: colocar en Redux para NO cargar y cargar....
    }, [props.link]) // TODO: poner variable cuando se cambie url se actualice

    useEffect(() => {
        if (!audioprofile) return;
        const waveSurfer = WaveSurfer.create({
            container: containerRef.current,
            waveColor: '#c6bed6',
            progressColor: '#787186',
            barWidth: 4,
            barGap: 2,
            barRadius: 10,
            cursorColor: '#787186',
            cursorWidth: 1,
            responsive: true,
            plugins: [TimelinePlugin.create()],
        });
        waveSurfer.load(audioprofile.synth.static_url);
        waveSurfer.on('ready', () => {
            waveSurferRef.current = waveSurfer
        })
        waveSurfer.on('audioprocess', (e) => {
            // console.log('audioprocess', e)

        })
        waveSurfer.on('interaction', (e) => {
            console.log('interaction', e)
            //TODO: evento para mover el video ...
        })
        waveSurfer.on('seeking', (e) => {
            // console.log('seeking', e/822)
            const duration_synth = audioprofile.synth.duration_seconds;
            const duration_native = audioprofile.native.duration_seconds;
            const x = (e/duration_native) * (duration_synth/duration_native)
            dispatch(seek(x))
            dispatch(play(waveSurferRef.current.isPlaying()))
            //TODO: evento para mover el video ...
        })
        waveSurfer.on('loading', e => {
            // console.log('loading', e)
            //TODO: loading que mas??
        })
        waveSurfer.on('timeupdate', e => {
            const duration_synth = audioprofile.synth.duration_seconds
            if (e >= duration_synth) {
                console.log('reached th eend')
                dispatch(play(false))
            }
           
        })
    
        return () => {
            waveSurfer.destroy()
        };
    }, [audioprofile]);

    return (
        <>
            <Button onClick={() => {
                waveSurferRef.current.playPause()
                toggleIsPlaying(waveSurferRef.current.isPlaying())
                dispatch(play(waveSurferRef.current.isPlaying()))
            } }>
                {isPlaying ? 'pause' : 'play'}
            </Button>
            <div style={{minWidth: "200px"}} className='audio' ref={containerRef}></div>
        </>
    );
}
