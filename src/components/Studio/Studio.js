import React from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, InputGroup, Button, Image } from "react-bootstrap";
import placeholder from "../../Assets/placeholder.png";
import Particle from "../Particle";
import WaveAnim from "../WaveAnim/WaveAnim";
import { VideoViz } from "./VideoViz";
import { AudioViz } from "./AudioViz";
import { LinkButton } from "./LinkButton";


export const Studio = () => {
  const ytUrl = useSelector((state) => state.appx.ytUrl);
  
  useEffect(() => {
  
    return () => {

    };
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        {/* <WaveAnim /> */}
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> STUDIO AREA </strong>
              </h1>
              
              <LinkButton />

            </Col>
            <Col md={5} style={{ paddingBottom: 5 }}>
              {ytUrl != "" &&
                <VideoViz link={ytUrl} />
              }
              {ytUrl == "" &&
                <Image src={placeholder} rounded />
              }
              
            </Col>
          </Row>
          <Row style={{ paddingTop: 100 }}>
            <Col>
              <AudioViz link={ytUrl} />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

