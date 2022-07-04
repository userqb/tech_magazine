import React from "react";
import BasketEmpty from "../../images/basket_img.jpg";

export const EmptyBasket = () => {
  return (
    <div className="basket">
      <div className="basket__inner">
        <div className="basket__empty">
          <img className="basket__empty__img" src={BasketEmpty} />
          <h2>Ваша корзина пуста</h2>
          <h4>
            Зарегестрируйтесь или добавьте хотябы один товар, чтобы сделать
            заказ!
          </h4>
        </div>
      </div>
    </div>
  );
};
