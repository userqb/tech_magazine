import React from "react";
import { Product } from "./components/ProductReviews";

export const Reviews = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [addClick, setAddClick] = React.useState([]);

  const addReview = (e) => {
    if (inputValue === "") {
      alert("Напишите текст");
    } else {
      setAddClick([...addClick]);
    }
  };

  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-inner">
          <div className="reviews__products">
            <Product className="reviews__product" />
          </div>
          <div>
            <h2 className="reviews">Отзывы</h2>
          </div>
          <h2>Добавить отзыв</h2>
          <div className="reviews__add">
            <div>
              <input
                value={inputValue}
                className="search"
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ваш отзыв..."
              />
            </div>
            <button className="btn" onClick={addReview}>
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
