import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Image } from "react-bootstrap";
import logo from "../photo/logo.jpg";
import "../styles/NavBar.css";
import { allTopiks } from "../const/AllTopiks";

import { Container, Button, Form, Navbar, Row, Col } from "react-bootstrap";

import NavDropdownButton from "./NavDropdownButton";
import { HOME_PAGE } from "../utils/consts";

const NavBar = () => {
  const navigate = useNavigate();

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
          <Col
            xs={5}
            className="d-flex"
            onClick={() => navigate(HOME_PAGE)}
            style={{ cursor: "pointer" }}
          >
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
        <Row className="dflex gap-2">
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Financial"
              allTopiks={allTopiks[1].Financial}
              link={allTopiks[1].link}
            />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Marketing & Sales"
              allTopiks={allTopiks[0].Marketing}
              link={allTopiks[0].link}
            />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Management"
              allTopiks={allTopiks[2].Management}
              link={allTopiks[2].link}
            />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Technology"
              allTopiks={allTopiks[3].Technology}
              link={allTopiks[3].link}
            />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Product"
              allTopiks={allTopiks[4].Product}
              link={allTopiks[4].link}
            />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Human Resourse"
              allTopiks={allTopiks[5].HumanResourse}
              link={allTopiks[5].link}
            />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Entrepreneurship"
              allTopiks={allTopiks[6].Entrepreneurship}
              link={allTopiks[6].link}
            />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Legal and Law"
              allTopiks={allTopiks[7].LegalandLaw}
              link={allTopiks[7].link}
            />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Business Development"
              allTopiks={allTopiks[8].BusinessDevelopment}
              link={allTopiks[8].link}
            />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
