import React from "react";
import { Link } from "react-router-dom";

export const Product = ({
  id,
  name,
  price,
  image,
  addProductToBasket,
  ...props
}) => {
  const addProduct = () => {
    const obj = { id, name, price, image };
    addProductToBasket(obj);
  };

  return (
    <div {...props}>
      <Link to="/">
        <img className="product__img" src={image} />
      </Link>
      <h4 className="product__name">{name}</h4>
      <h3 className="product__price">{price}руб.</h3>
      <button onClick={addProduct}>add</button>
    </div>
  );
};
