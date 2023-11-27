import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const HumanResources = () => {
  const { name } = useParams();
  return (
    <Container>
      <div>HumanResources</div>
      <div>{name}</div>
    </Container>
  );
};

export default HumanResources;
