import React from "react";

import { Container, Image, Row, Col } from "react-bootstrap";
import logo from "../photo/logo.jpg";
import "../styles/HomePage.css";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <Container className="mt-2">
      <Row>
        <Col xs={4}>
          <Image height={300} width={300} src={logo} />
        </Col>
        <Col xs={8}>
          <div className="wrapper">
            <h2
              style={{
                fontFamily: "Oswald, sans-serif",
                textDecoration: "underline",
                marginBottom: 30,
              }}
            >
              Mission Statement
            </h2>
            <div className="typing-demo">
              <p>“Making the world of Entrepreneurship </p>
              <p>accessible to people with big ideas</p>
              <p>without Background” </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
