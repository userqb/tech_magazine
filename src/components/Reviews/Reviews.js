import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../Product";
import { MyButton } from "../../UI/MyButton";
import { ReviewToProduct } from "./ReviewToProduct";

export const Reviews = () => {
  const array = useSelector((state) => state.test_slice.array);
  const [review, setReview] = React.useState([]);
  const [value, setValue] = React.useState({ body: "" });
  const [count, setCount] = React.useState(0);

  const dispatch = useDispatch();

  const addReviewClick = () => {
    const newReview = {
      ...value,
      id: Date.now(),
    };
    return (
      value.body === ""
        ? alert("Заполните форму отзыва!")
        : setReview([...review, newReview]),
      setValue({ body: "" }),
      setCount(count + 1)
    );
  };

  // const deleteSelected = (item) => {
  //   setReview(review.filter((i) => i.id !== item.id));
  // };

  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-inner">
          <div className="reviews__products">
            {array.map((i) => {
              return <Product {...i} />;
            })}
          </div>
          <div>
            <h2 className="reviews">Отзывы</h2>
          </div>
          <h2>Добавить отзыв {count}</h2>
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
