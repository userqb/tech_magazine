import React from "react";

export const ReviewToProduct = ({ body }) => {
  return (
    <div className="review_product">
      <div className="review_product-inner">
        <img className="review_product__img" src="#" />
        <h2 className="review_product__name">Название продукта</h2>
        <div className="stars">звезды</div>
      </div>
      <div className="review">{body}</div>
    </div>
  );
};
