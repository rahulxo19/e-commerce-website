import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import CartContext from "../Store/Cart-Context";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);
  const cartElements = cartCtx.items;

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
            {cartElements.map((element, index) => (
              <tr key={index}>
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
