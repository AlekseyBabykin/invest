import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const BusinessDevelopment = () => {
  const { name } = useParams();
  return (
    <Container>
      <div>BusinessDevelopment</div>
      <div>{name}</div>
    </Container>
  );
};

export default BusinessDevelopment;
