import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const Management = () => {
  const { name } = useParams();

  return (
    <Container>
      <div>Management</div>
      <div>{name}</div>
    </Container>
  );
};

export default Management;
