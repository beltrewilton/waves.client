import React from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from 'react-player/youtube'


export const VideoViz =  (props) => {
    const position = useSelector((state) => state.appx.position);
    const playing = useSelector((state) => state.appx.playing);
    const playerRef = useRef()

    useEffect(() => {
        console.log('VisioViz', position)
        playerRef.current.seekTo(position)
    }, [position])

    useEffect(() => {
        console.log('VisioViz playing: ', playing)
        console.log('VisioViz position: ', position)
        playerRef.current.seekTo(position)
    }, [playing])


    return (
        <ReactPlayer
            className='react-player'
            ref={playerRef}
            url={props.link}
            playing={playing}
            onProgress={e => console.log('onProgress')}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={() => console.log('onPlay')}
            onPause={() => console.log('OnPause')}
            muted={true}
        />
    )
}
