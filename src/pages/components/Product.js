import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ name, price, image }) => {
  return (
    <div className="product">
      <Link to="/">
        <img className="product__img" src={image} />
      </Link>
      <h4 className="product__name">{name}</h4>
      <h3 className="product__price">{price}р</h3>
    </div>
  );
};
