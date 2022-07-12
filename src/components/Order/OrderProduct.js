import React from "react";

export const OrderProduct = ({ id, name, image, price }) => {
  return (
    <div className="product">
      <div>
        <img className="product__img" src={image} />
      </div>
      <h4 className="product__name">{name}</h4>
      <div className="order_product__ptice">
        <h3 className="product__price">{price}руб.</h3>
        <h4>2 шт.</h4>
      </div>
    </div>
  );
};
