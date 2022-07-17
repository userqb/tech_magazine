import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../Product";
import { MyButton } from "../../UI/MyButton";
import { ReviewToProduct } from "./ReviewToProduct";
import { OrderProduct } from "./../Order/OrderProduct";
import { BasketProduct } from "./../Basket/BasketProduct";
import { ReviewProduct } from "./ReviewProduct";
import { setReview, setValue } from "../../redux_toolkit/slices/review_slice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Preloader } from "./../Preloader";

export const Reviews = () => {
  // const { items } = useSelector(({ test_slice }) => test_slice);
  const [review, setReview] = React.useState([]);
  const [value, setValue] = React.useState({ body: "" });
  let [product, setProduct] = React.useState();

  const { id } = useParams();
  const navigate = useNavigate();

  // let newProduct = Object.fromEntries(product);
  // console.log(newProduct);

  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get(
          "https://629ef7298b939d3dc28b2d3b.mockapi.io/products/" + id
        );
        setProduct(data);
      } catch (e) {
        console.log(e);
        navigate("/");
      }
    }
    fetchProducts();
  }, []);

  if (!product) {
    return <Preloader />;
  }

  const addReviewClick = () => {
    const newReview = {
      ...value,
      id: Date.now(),
    };
    dispatch(setReview());
    return (
      value.body === ""
        ? alert("Заполните форму отзыва!")
        : dispatch(setReview([...review, newReview])),
      setValue({ body: "" })
    );
  };

  // const deleteSelected = (item) => {
  //   setReview(review.filter((i) => i.id !== item.id));
  // };

  // const addBasket = ()=>{

  // }

  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-inner">
          <div className="reviews__products">
            <div className="basket-product">
              <div>
                <img className="product__img" src={product.image} />
              </div>
              <div className="basket-product__list">
                <div className="basket-product__name">{product.name}</div>
                <h2 className="basket-product__price">
                  Цена: {product.price}руб.
                </h2>
                <h4 className="basket-product__procent">
                  {product.description}
                </h4>
              </div>
              <MyButton className="btn">Добавить в корзину</MyButton>
            </div>
          </div>
          <div>
            <h2 className="reviews">Отзывы о продукте</h2>
          </div>
          <h2>Добавить отзыв </h2>
          <div className="reviews__add">
            <input
              className="search"
              onChange={(e) =>
                dispatch(setValue({ ...value, body: e.target.value }))
              }
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
