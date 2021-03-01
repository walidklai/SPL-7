/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import Iframe from "react-iframe";

import vid from "../../assets/img/volcano.mp4";
import CustomCard from "./CustomCard";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

// core components

function SectionDark() {
  return (
    <>
      <div
        className="section section-dark"
        style={{ overflow: "hidden", padding: 0 }}
      >
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
            opacity: 0.4,
          }}
        />
        <video
          className="zoom"
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50% -50%)",
            opacity: 0.5,
          }}
        >
          <source src={vid} type="video/mp4" />
        </video>
        <CustomCard />
        <Zoom>
          <h2 className="presentation-subtitle text-center">
            <strong style={{ fontWeight: 600 }}>LATEST STREAMS</strong>
          </h2>
        </Zoom>

        <hr />
        <br />
        <Container>
          {Array(4)
            .fill()
            .map(() => (
              <div
                className="card"
                style={{ backgroundColor: "transparent", margin: 10 }}
              >
                <Fade left>
                  {" "}
                  <Col>
                    <Iframe
                      url="https://www.youtube.com/embed/sNewigLaYNw"
                      width="100%"
                      height="450px"
                      id="myId"
                      className="radius"
                      display="initial"
                      position="relative"
                    />
                  </Col>
                </Fade>
              </div>
            ))}
        </Container>
        <hr />
      </div>
    </>
  );
}

export default SectionDark;
