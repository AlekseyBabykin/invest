import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Technology = () => {
  const { name } = useParams();
  return (
    <Container>
      <div>Technology</div>
      <div>{name}</div>
    </Container>
  );
};

export default Technology;
