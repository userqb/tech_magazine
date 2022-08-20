import React from "react";
import { Link } from "react-router-dom";
import BasketEmpty from "../../images/basket_img.png";

export const EmptyBasket = () => {
  return (
    <div className="basket">
      <div className="basket__inner">
        <div className="basket__empty">
          <img className="basket__empty__img" src={BasketEmpty} />
          <h2>Ваша корзина пуста</h2>
          <h4>
            <Link style={{ color: "blue" }} to="/login">
              Зарегестрируйтесь
            </Link>{" "}
            или добавьте хотябы один товар, чтобы сделать заказ!
          </h4>
        </div>
      </div>
    </div>
  );
};
