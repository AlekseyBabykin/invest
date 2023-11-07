import React from "react";
import Marquee from "react-fast-marquee";
import { Image } from "react-bootstrap";
import logo from "../photo/logo.jpg";

import {
  Container,
  Button,
  Form,
  Navbar,
  NavDropdown,
  Nav,
  Row,
  Col,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { MARKETING_ROUTE } from "../utils/consts";
import NavDropdownButton from "./NavDropdownButton";

const NavBar = () => {
  const allTopiks = [
    "Finance",
    "Marketing",
    "Management",
    "Technology",
    "Product",
    "Human Resourse",
    "Entrepreneurship",
    "Legal and Law",
  ];
  return (
    <Navbar bg="dark" variant="dark">
      <Container
        // fluid
        className="d-flex flex-column"
        style={{ color: "whitesmoke", alignItems: "stretch" }}
      >
        <Row>
          <Col xs={3}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: 100 }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>
          <Col xs={5} className="d-flex flex-row gap-2">
            <Image height={30} width={30} src={logo} />{" "}
            <h3 style={{ fontFamily: "Russo One" }}>BrightRocket ventures</h3>
          </Col>
          <Col xs={3}>Sign in</Col>
        </Row>
        <Row>
          <Col>
            <Marquee>
              SP500:3.140 | NSDAQ: 5.630 | DAG JONES: 2.930 | USD: 3.14 | EUR:
              3.24 | YUAN: "" | COLD🧈: "" | COOPER🤜🏾: ""
            </Marquee>
          </Col>
        </Row>
        <Row
          style={{
            marginLeft: 0,
            paddingLeft: 0,
            marginRight: 0,
            paddingRight: 0,
          }}
        >
          <Col id="nameNavbar">
            <NavDropdownButton name="Finance" />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton name="Marketing" />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton name="Management" />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton name="Technology" />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton name="Product" />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton name="Human Resourse" />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton name="Entrepreneurship" />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton name="Legal and Law" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
