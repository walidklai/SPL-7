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
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import axios from "axios";

// core components

function SectionDownload() {
  const [formData, setFormData] = useState({
    contactEmail: "",
    message: "",
  });

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      const res = await axios.get(`/api/newsletter?email=${email}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeContact = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/contact", formData, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        className="section section-dark text-center"
        style={{ overflow: "hidden" }}
      >
        <div
          id="hide"
          className="fixed-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/leona3.png") + ")",
            opacity: 0.3,
          }}
        />
        <h3 className="white" style={{ fontWeight: 400 }}>
          Thank you for supporting us!
        </h3>
        <Container fluid className="text-center">
          <br />

          <Row className="justify-content-md-center">
            <Col
              className="text-center"
              lg="8"
              md="12"
              style={{ marginBottom: "2rem" }}
            ></Col>
            <Col className="text-center" md="12">
              <Button
                className="twitter-sharrre btn-round"
                color="danger"
                href="#pablo"
                id="tooltip3373767"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-youtube" /> Youtube
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
                Share!
              </UncontrolledTooltip>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="none"
                href="#pablo"
                id="tooltip840791273"
                onClick={(e) => e.preventDefault()}
                style={{ backgroundColor: "#484215", border: "none" }}
              >
                <i className="fa fa-twitch" /> Twitch
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
                Share!
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="#pablo"
                id="tooltip68961360"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" /> Facebook
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                Share!
              </UncontrolledTooltip>
              <Button
                className="sharrre btn-round ml-2"
                color="dribbble-bg"
                href="https://github.com/creativetimofficial/paper-kit-react?ref=creativetim"
                target="_blank"
                id="tooltip864353654"
              >
                <i className="fa fa-instagram" /> Instagram
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
          <Container></Container>

          <Row style={{ justifyContent: "center", marginTop: 20 }}>
            <Form
              className="section-dark text-center white"
              style={{
                border: "1px solid white",
                borderRadius: "12px",
                backgroundColor: "#00000049",
                width: "80%",
              }}
              onSubmit={(e) => handleSubmitContact(e)}
            >
              <h3>CONTACT US</h3>
              <br />
              <center>
                <Label>Email</Label>
                <Col>
                  <Input
                    type="email"
                    name="contactEmail"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                    onChange={handleChangeContact}
                    style={{ backgroundColor: "transparent" }}
                  />
                </Col>
              </center>
              <center>
                <Label for="exampleText" lg={4} sm={2}>
                  Text Area
                </Label>
                <Col>
                  <Input
                    type="textarea"
                    name="message"
                    id="exampleText"
                    onChange={handleChange}
                    style={{ backgroundColor: "transparent" }}
                  />
                </Col>
              </center>
              <br />
              <Button
                color="info"
                className="btn-round col-md-2"
                style={{ marginBottom: 10 }}
              >
                SEND
              </Button>
              <Row>
                <Col className="mx-auto buzz" lg="8" md="6">
                  <Card className="card-register" color="transparent">
                    <h3 className="title mx-auto">Newsletter</h3>
                    <Form className="register-form">
                      <label>Email</label>
                      <InputGroup className="form-group-no-border">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <Button
                        className="btn-round col-md-3"
                        color="info"
                        type="button"
                        onClick={(e) => handleSubmit(e)}
                      >
                        SEND
                      </Button>
                    </Form>
                  </Card>
                  <p className="text-center white">
                    Don't miss the latest news !
                  </p>
                </Col>
              </Row>
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
