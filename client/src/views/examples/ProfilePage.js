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
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <Fade>
        {" "}
        <ProfilePageHeader />
      </Fade>
      <Link to="/index">
        {" "}
        <div className="" style={{backgroundColor:'transparent'}}>
          <Container className="fancy-border">
            <div className="owner">
              <div className="avatar">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/lol-logo.webp")}
                  style={{ backgroundColor: "#0b1011",zIndex:-1 }}
                />
              </div>
              <div className="name">
                <h4 className="title">
                  SIMPLICITY <br />
                </h4>
                <h6 className="description">League Of Legends Team</h6>
              </div>
            </div>
            <Zoom>
              <Row style={{ display: "flex", justifyContent: "space-around"}}>
                {Array(5)
                  .fill()
                  .map(() => (
                    <Col md="4">
                      <div className="background"></div>

                      <div className="outer-div">
                        <div className="inner-div">
                          <div className="front">
                            <div className="front__bkg-photo"></div>
                            <div className="front__face-photo"></div>
                            <div className="front__text">
                              <h3 className="front__text-header">SPL member</h3>
                              <p className="front__text-para">
                                <i className="fas fa-map-marker-alt front-icons"></i>
                                LOL Player
                              </p>

                              <span
                                className="front__text-hover"
                                style={{
                                  backgroundColor: "#51bcda",
                                  border: "none",
                                }}
                              >
                                Hover for more info
                              </span>
                            </div>
                          </div>
                          <div
                            className="back"
                            style={{ backgroundColor: "#0b1011" }}
                          >
                            <div className="social-media-wrapper">
                              <a href="#" className="social-icon">
                                R
                              </a>
                              <a href="#" className="social-icon">
                                O
                              </a>
                              <a href="#" className="social-icon">
                                L
                              </a>
                              <a href="#" className="social-icon">
                                E
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                <br />
              </Row>
            </Zoom>

            <br />
            <div className="nav-tabs-navigation">
              <Link to="/index">
                <Button
                  color="info"
                  block
                  className="btn-round"
                  style={{ marginTop: "5%" }}
                >
                  {" "}
                  ← Go back
                </Button>
              </Link>
              <br />
            </div>
          </Container>
        </div>
      </Link>

      <DemoFooter />
    </>
  );
}

export default ProfilePage;
