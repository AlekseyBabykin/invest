import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Product = () => {
  const { name } = useParams();
  return (
    <Container>
      <div>Product</div>
      <div>{name}</div>
    </Container>
  );
};

export default Product;
