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
import { Button, Container, Row, Col } from "reactstrap";

import ttPng from "../../assets/img/TT.png";

import ptPng from "../../assets/img/polytech.png";
import UncontrolledTooltip from "reactstrap/lib/UncontrolledTooltip";
import NavItem from "reactstrap/lib/NavItem";
import { NavLink } from "react-router-dom";

// core components

function SectionNucleoIcons() {
  return (
    <>
      <div
        className="section section-dark text-center" style={{overflow:'hidden'}}
      >
        <div
          id="hide"
          className="fixed-clouds2"
          style={{
            backgroundImage: "url(" + require("assets/img/diamant.png") + ")",
            opacity: 0.3,
          }}
        />
        <Container className='col-md-3'>
          <Col lg="12" md="12">
            <h2 className="title">Our Partners</h2>
            <br/>
          </Col>
          <Col lg="12" md="12">
            <div className="icons-container" style={{display:'flex',justifyContent:'space-evenly'}}>
              <div>
                <a href="https://www.topnet.tn/" target="_blank">
                  <div>
                    <img src={ttPng} />
                  </div>
                </a>
              </div>
              <br/>
              <div>
                <a href="http://pi.tn/" target="_blank">
                  <img src={ptPng} />
                </a>
              </div>
              {/* <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" /> */}
            </div>
          </Col>
        </Container>
        
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
