import React from "react";
import { MyButton } from "./../../UI/MyButton";

export const ReviewProduct = ({ image, name, price }) => {
  return (
    <div className="basket-product">
      <div>
        <img className="product__img" src={image} />
      </div>
      <div className="basket-product__list">
        <div className="basket-product__name">{name}</div>
        <h2 className="basket-product__price">Цена: {price}руб.</h2>
        <h4 className="basket-product__procent">56%</h4>
      </div>
      <MyButton className="btn">Добавить в корзину</MyButton>
    </div>
  );
};
