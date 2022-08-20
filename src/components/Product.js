import React from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../UI/MyButton";

export const Product = ({
  id,
  name,
  price,
  image,
  addProductToBasket,
  description,
}) => {
  return (
    <div className="product">
      <Link key={id} to={`/product/${id}`}>
        <img className="product__img" src={image} />
      </Link>
      <h4 className="product__name">{name}</h4>
      <h3 className="product__price">{price}руб.</h3>
      <MyButton
        className="btn"
        onClick={() =>
          addProductToBasket({ id, name, price, image, description })
        }
      >
        Добавить
      </MyButton>
    </div>
  );
};
