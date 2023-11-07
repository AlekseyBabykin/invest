import React from "react";
import Rocket from "../components/Rocket";
import { Container, Image, Row, Col } from "react-bootstrap";
import logo from "../photo/logo.jpg";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Col xs={4}>
          <Image height={300} width={300} src={logo} />
        </Col>
        <Col xs={8}>
          <div class="wrapper">
            <h2
              style={{
                fontFamily: "Oswald, sans-serif",
                textDecoration: "underline",
                marginBottom: 30,
              }}
            >
              Mission Statement
            </h2>
            <div class="typing-demo">
              <p>“Making the world of Entrepreneurship accessible</p>
              <p>to people with big ideas without Background”</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
