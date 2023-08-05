import React from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {
  return (
    <Card className="card-flex card-group" style={{ width: 300 }}>
      <Card.Img variant="top" src={props.product.imageUrl} alt="cant connect" />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>Price: ${props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
