import React from "react";
import { Table } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const CartItems = (props) => {
  return (
    <>
      {cartElements.length && (
        <Table variant="secondary">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartElements.map((element) => (
              <tr>
                <td>
                  <img
                    src={element.imageUrl}
                    style={{ width: 50 }}
                    alt="cant load"
                  />
                </td>
                <td>{element.title}</td>
                <td>{element.price}</td>
                <td>{element.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default CartItems;
