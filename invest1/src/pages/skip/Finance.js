import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Finance = () => {
  const { name } = useParams();
  return (
    <Container>
      <div>Finance</div>
      <div>{name}</div>
    </Container>
  );
};

export default Finance;
