import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Image } from "react-bootstrap";
import logo from "../photo/logo.jpg";

import { Container, Button, Form, Navbar, Row, Col } from "react-bootstrap";

import NavDropdownButton from "./NavDropdownButton";
import {
  FINANCE_ROUTE,
  HOME_PAGE,
  HUMAN_RESOURCES_ROUTE,
  LEGAL_AND_LAW_ROUTE,
  MANAGEMENT_ROUTE,
  MARKETING_ROUTE,
  PRODUCT_ROUTE,
  TECHNOLOGY_ROUTE,
} from "../utils/consts";

const NavBar = () => {
  const navigate = useNavigate();
  const allTopiks = [
    {
      Marketing: [
        "Market Research",
        "Marketing Plausible",
        "Marketing strategies",
      ],
      link: MARKETING_ROUTE,
    },
    {
      Financial: [
        "Concepts in Economics",
        "Concepts in Capital Markets",
        "Financial statements",
      ],
      link: FINANCE_ROUTE,
    },
    {
      Management: [
        "Business Plans",
        "Time-Management Methods",
        "Decision-Making Methods and Tools",
      ],
      link: MANAGEMENT_ROUTE,
    },
    {
      Technology: [
        "Artificial intelligence",
        "Business Automatoins",
        "Blockchan",
      ],
      link: TECHNOLOGY_ROUTE,
    },
    {
      Product: [
        "Product Development Process",
        "Product Roadmaps",
        "Product A/B Testing",
      ],
      link: PRODUCT_ROUTE,
    },
    {
      HumanResourse: [
        "Terminology in HR Management",
        "Recruitment Process",
        "Onboarding",
      ],
      link: HUMAN_RESOURCES_ROUTE,
    },
    { Entrepreneurship: [" "] },
    {
      LegalandLaw: [
        "Intellectual Property",
        "Patent Registration in Israel",
        "Patent Registtion in USA",
      ],
      link: LEGAL_AND_LAW_ROUTE,
    },
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
          <Col
            xs={5}
            className="d-flex flex-row gap-2"
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
        <Row>
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Financial"
              allTopiks={allTopiks[1].Financial}
              link={allTopiks[1].link}
            />
          </Col>
          <Col id="nameNavbar">
            <NavDropdownButton
              name="Marketing"
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
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
