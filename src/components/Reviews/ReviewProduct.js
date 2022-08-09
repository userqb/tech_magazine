import React from "react";
import { MyButton } from "./../../UI/MyButton";

export const ReviewProduct = ({
  addBasket,
  id,
  image,
  name,
  price,
  description,
}) => {
  const onAddBasket = () => {
    const obj = {
      id,
      name,
      image,
      price,
    };
    addBasket(obj);
  };

  return (
    <div className="reviews__products">
      <div className="basket-product">
        <div>
          <img className="product__img" src={image} />
        </div>
        <div className="basket-product__list">
          <div className="basket-product__name">{name}</div>
          <h2 className="basket-product__price">Цена: {price}руб.</h2>
          <h4 className="basket-product__procent">{description}</h4>
        </div>
        <MyButton onClick={onAddBasket} className="btn">
          Добавить в корзину
        </MyButton>
      </div>
    </div>
  );
};
