import React from "react";
import { ProductReviews } from "./components/ProductReviews";

export const Reviews = () => {
  // const [value, setValue] = React.useState("");
  // const [post, setPost] = React.useState({});

  return (
    <div>
      <div>
        <ProductReviews />
      </div>
      <div>
        <h2>Отзывы</h2>
      </div>
      <div>
        <div>Добавить отзыв</div>
        <input value={value} placeholder="Ваш отзыв..." />
        <button onClick={addPost}>Добавить</button>
      </div>
    </div>
  );
};

// onChange={(e)=>{setValue(e.target.value)}}
