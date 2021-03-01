/* import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardText,
  CardImgOverlay,
  Col,
} from "reactstrap";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";

const CustomCard = () => {
  return (
    <>
      <div
        className=""
        style={{
          opacity: 0.75,
          zIndex: 1,
          padding: 20,
        }}
      >
        <LightSpeed>
          <Roll>
            {" "}
            <h2 className="presentation-subtitle text-center">
              <strong style={{ fontWeight: 600 }}>SPL TEAMS</strong>
            </h2>
          </Roll>
          <hr />
          <br />
          <div className="responsive-cards custom-flex">
            {" "}
            <Col
              md="3"
              sm="6"
              className="card white"
              style={{ backgroundColor: "transparent" }}
            >
              <Link to="/team" className="bypass">
                <img
                  alt="..."
                  className="img-rounded img-responsive blur"
                  src={require("assets/img/lol-wallpaper.jpg")}
                />
                <div className="img-details">
                  <h6 className="text-center white" style={{ fontWeight: 600 }}>
                    League of Lengends
                  </h6>
                </div>
              </Link>
            </Col>
            <Col
              md="3"
              sm="6"
              className="card white"
              style={{ backgroundColor: "transparent" }}
            >
              <Link to="/team" className="bypass">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/cs-go-wallpaper.png")}
                />
                <div className="img-details">
                  <h6 className="text-center white" style={{ fontWeight: 600 }}>
                    Counter Strike
                  </h6>
                </div>
              </Link>
            </Col>
            <Col
              md="3"
              sm="6"
              className="card white"
              style={{ backgroundColor: "transparent" }}
            >
              <Link to="/team" className="bypass">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/valorant-wallpaper.jpg")}
                />
                <div className="img-details">
                  <h6 className="text-center white" style={{ fontWeight: 600 }}>
                    Valorant
                  </h6>
                </div>
              </Link>
            </Col>
          </div>
        </LightSpeed>
      </div>
    </>
  );
};

export default CustomCard;
 */

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Col } from "reactstrap";

import { Link } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const breakPoints = {
  0: {
    items: 1,
  },
  550: {
    items: 2,
  },
  768: {
    items: 2,
  },
  1200: {
    items: 3,
  },
};

const items = [
  <Col md="12" onDragStart={handleDragStart}>
    <div className="background"></div>

    <div className="outer-div" style={{ marginBottom: "60px" }}>
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
        <div className="back" style={{ backgroundColor: "#0b1011" }}>
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
  </Col>,
  <Col md="12" onDragStart={handleDragStart}>
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
        <div className="back" style={{ backgroundColor: "#0b1011" }}>
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
  </Col>,
  <Col md="12" onDragStart={handleDragStart}>
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
        <div className="back" style={{ backgroundColor: "#0b1011" }}>
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
  </Col>,
  <Col md="12" onDragStart={handleDragStart}>
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
        <div className="back" style={{ backgroundColor: "#0b1011" }}>
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
  </Col>,
  <Col md="12" onDragStart={handleDragStart}>
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
        <div className="back" style={{ backgroundColor: "#0b1011" }}>
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
  </Col>,
];

const next=<h1>a</h1>
const Gallery = () => {
  return (
    <div className="section test" style={{ backgroundColor: "transparent" }}>
      <AliceCarousel className='test'
        responsive={breakPoints}
        controlsStrategy={"responsive"}
        mouseTracking
        items={items}
        infinite={true}
      />
    </div>
  );
};

export default Gallery;
