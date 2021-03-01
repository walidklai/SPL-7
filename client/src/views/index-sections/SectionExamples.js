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

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark white">
        <Container>
          <Row className="example-page">
            <Col>
              <ul>
                <li style={{ fontWeight: "400", marginBottom: "2rem" }}>
                  <strong>Address</strong>
                </li>
                <li>06 Avenue Khaled ibn walid Tunis, Tunisia</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li style={{ fontWeight: "400", marginBottom: "2rem" }}>
                  <strong>Phone</strong>
                </li>
                <li>+216 54 126 698</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li style={{ fontWeight: "400", marginBottom: "2rem" }}>
                  <strong>Email</strong>
                </li>
                <li>splgaming2017@gmail.com</li>
              </ul>
            </Col>
          </Row>

          {/* <Col className="text-center" md="2">
              <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/landing-page.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/landing-page"
                target="_blank"
              >
                Landing Page
              </Button>
            </Col> */}
          {/* <Col className="text-center" md="2">
              <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/profile-page.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/profile-page"
                target="_blank"
              >
                Profile Page
              </Button>
            </Col> */}
                 <hr style={{margin:0}}/>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
