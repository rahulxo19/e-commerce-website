import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const data = useParams();
  console.log(data);

  return (
    <section>
      <h1>product page </h1>
    </section>
  );
};

export default ProductDetail;
