import React from "react";

export const ReviewToProduct = ({
  body,
  deleteSelected,
  image,
  name,
  grade,
}) => {
  return (
    <div className="review_product">
      <div className="review_product-inner">
        <img className="product__img" src={image} />
        <h2 className="basket-product__name">{name}</h2>
      </div>
      <div className="review">{body}</div>
    </div>
  );
};
