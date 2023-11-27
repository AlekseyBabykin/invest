import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Enterpreneurship = () => {
  const { name } = useParams();
  return (
    <Container>
      <div>Enterpreneurship</div>
      <div>{name}</div>
    </Container>
  );
};

export default Enterpreneurship;
