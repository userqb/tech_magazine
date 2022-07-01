import React from "react";
import { useSelector } from "react-redux";
import { EmptyBasket } from "./components/EmptyBasket";
import { Product } from "./components/Product";

export const Basket = () => {
  const { items, totalPrice } = useSelector(({ basket }) => basket);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if (!totalCount) {
    return <EmptyBasket />;
  }

  return (
    <div className="basket">
      <div className="container">
        <div className="basket-inner">
          <div>
            <div className="basket_products">
              {items.map((item) => {
                return (
                  <Product className="basket-product" key={item.id} {...item} />
                );
              })}
            </div>
          </div>
          <div>
            <div className="basket__prices">
              <h1 className="basket__summ">Сумма заказа</h1>
              <div>
                <div className="basket__price">Стоимость</div>
                <h2>{totalPrice}руб.</h2>
              </div>
              <div>
                <div className="basket__price">Количество</div>
                <h2>{totalCount}шт.</h2>
              </div>
              <div>
                <div className="basket__price">К оплате</div>
                <h2>{totalPrice}руб.</h2>
              </div>
            </div>
            <div className="basket__btn">
              <button className="btn">Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
