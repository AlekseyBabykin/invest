import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const LegaAndLaw = () => {
  const { name } = useParams();
  return (
    <Container>
      <div>LegaAndLaw</div>
      <div>{name}</div>
    </Container>
  );
};

export default LegaAndLaw;
