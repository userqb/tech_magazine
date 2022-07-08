import React from "react";

export const ReviewToProduct = (item, deleteSelected) => {
  const [activeImg, setActiveImg] = React.useState(null);

  return (
    <div className="review_product">
      <div className="review_product-inner">
        <img className="review_product__img" src="#" />
        <h2 className="review_product__name">Название продукта</h2>
        <div className="stars">
          <img
            className={activeImg ? "stars_img" : "active"}
            onClick={() => setActiveImg()}
            src="https://img.icons8.com/emoji/48/000000/thumbs-up.png"
          />
          <img
            className="stars_img"
            src="https://img.icons8.com/emoji/48/000000/thumbs-down-emoji.png"
          />
        </div>
      </div>
      <div className="review">{item.body}</div>
    </div>
  );
};
