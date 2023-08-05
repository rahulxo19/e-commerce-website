import React from "react";

const Product = (props) => {
  console.log(props);
  return (
    <>
      <li>
        <div>
          <h3>{props.product.title}</h3>
          <span>{props.product.price}</span>
        </div>
        <img src={props.product.imageUrl} alt="cant connect" />
      </li>
    </>
  );
};

export default Product;
