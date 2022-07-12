import React from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../UI/MyButton";

export const Product = ({
  id,
  name,
  price,
  image,
  addProductToBasket,
  onClickProduct,
}) => {
  return (
    <div className="product">
      <Link to="/">
        <img
          onClick={() => onClickProduct({ id, name, price, image })}
          className="product__img"
          src={image}
        />
      </Link>
      <h4 className="product__name">{name}</h4>
      <h3 className="product__price">{price}руб.</h3>
      <MyButton
        className="btn"
        onClick={() => addProductToBasket({ id, name, price, image })}
      >
        Добавить
      </MyButton>
    </div>
  );
};
