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
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import { Link } from "react-router-dom";

import lolTitle from "../../assets/img/lol-title.png";
import challengerLogo from "../../assets/img/challenger-logo.png";

function LandingPage() {
  const [playerData, setPlayerData] = useState([]);

  return (
    <>
      <div className="main">
        <div
          className="section section-dark text-center"
          style={{ overflow: "hidden", padding: 0 }}
        >
          <div
            style={{
               backgroundImage:
                "url(" + require("assets/img/lol-cover.jpg") + ")",
              width: "100%",
              filter: "blur(8px)",
              height: "100%",
              position: "absolute",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              zIndex: -2,
            }}
          />
          <div
            className="moving-clouds"
            style={{
              backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
              zIndex: -1,
            }}
          />
          <Container>
            <img
              src={lolTitle}
              style={{ width: "300px", opacity: 0.7, marginTop: 70 }}
              className="logo"
            />
            <hr />
            <h3 className="text-center white" style={{ fontWeight: 600 }}>
              Main Team Members
            </h3>
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              {Array(5)
                .fill()
                .map(() => (<Col md='4'><div className="background"></div>

                <div className="outer-div">
                  <div className="inner-div">
                    <div className="front">
                      <div className="front__bkg-photo"></div>
                      <div className="front__face-photo"></div>
                      <div className="front__text">
                        <h3 className="front__text-header">Bobby Korec</h3>
                        <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>Seattle</p>
                        
                        <span className="front__text-hover">Hover to Find Me</span>
                      </div>
                    </div>
                    <div className="back">
                      <div className="social-media-wrapper">
                        <a href="#" className="social-icon"><i className="fab fa-codepen" aria-hidden="true"></i></a> 
                        <a href="#" className="social-icon"><i className="fab fa-github-square" aria-hidden="true"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-linkedin-square" aria-hidden="true"></i></a>
                         <a href="#" className="social-icon"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                      </div>
                    </div>
                
                  </div>
                </div></Col>
                  
                ))}
            </Row>
            <hr />
            <h3 className="text-center white" style={{ fontWeight: 600 }}>
              Alternative Strike Team
            </h3>
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              {Array(5)
                .fill()
                .map(() => (
                  <Col md="2">
                    <Card className="card-profile card-plain">
                      <div
                        className="img-responsive card"
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "0px 10px 100px 10px #51bcda",
                        }}
                      >
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={require("assets/img/lol-champ-2.jpg")}
                          />
                        </a>
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
            <hr />
            <h3 className="text-center white" style={{ fontWeight: 600 }}>
              Coaching Team
            </h3>
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              {Array(3)
                .fill()
                .map(() => (
                  <Col md="2">
                    <Card className="card-profile card-plain">
                      <div
                        className="img-responsive card"
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "0px 10px 100px 10px #51bcda",
                        }}
                      >
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            src={require("assets/img/lol-champ-2.jpg")}
                          />
                        </a>
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
          <Link to="/index">
            <Button color="info" className="btn-round">
              ← Go back
            </Button>
          </Link>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
