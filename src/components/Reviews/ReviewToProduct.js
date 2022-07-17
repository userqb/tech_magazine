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
        <img className="review_product__img" src={image} />
        <h2 className="review_product__name">{name}</h2>
        <div className="stars">
          <img
            className=""
            src="https://img.icons8.com/emoji/48/000000/thumbs-up.png"
          />
          <img
            className="stars_img"
            src="https://img.icons8.com/emoji/48/000000/thumbs-down-emoji.png"
          />
        </div>
      </div>
      <div className="review">{body}</div>
    </div>
  );
};
