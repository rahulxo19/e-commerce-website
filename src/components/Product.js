import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import CartContext from "../Store/Cart-Context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      title: props.product.title,
      imageUrl: props.product.imageUrl,
      price: Number(props.product.price),
    });
  };

  return (
    <Card className="card-flex card-group" style={{ width: 300 }}>
      <Card.Img variant="top" src={props.product.imageUrl} alt="cant connect" />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text className="d-flex justify-content-between">
          <span>Price: ${props.product.price}</span>
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
