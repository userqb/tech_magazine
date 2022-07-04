import React from "react";
import { Product } from "./components/Product";
import { MyButton } from "./../UI/MyButton";
import { ReviewToProduct } from "./components/ReviewToProduct";
import { useDispatch } from "react-redux";

export const Reviews = () => {
  const [review, setReview] = React.useState([]);
  const [value, setValue] = React.useState({ body: "" });

  const dispatch = useDispatch();

  const addReviewClick = () => {
    return (
      value.body === ""
        ? alert("Заполните форму отзыва!")
        : setReview([...review, value]),
      setValue({ body: "" })
    );
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
            <input
              className="search"
              onChange={(e) => setValue({ ...value, body: e.target.value })}
              value={value.body}
              type="text"
              placeholder="Напишите ваш отзыв..."
            />
            <MyButton onClick={addReviewClick} className="btn">
              Добавить
            </MyButton>
          </div>
        </div>
        {review.map((item) => (
          <ReviewToProduct key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
