import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearBasket } from "../../redux_toolkit/slices/basket_slice";
import { EmptyBasket } from "./EmptyBasket";
import { BasketProduct } from "./BasketProduct";
import { MyButton } from "../../UI/MyButton";
import { Preloader } from "../Preloader";

export const Basket = () => {
  const { items, totalPrice } = useSelector(({ basket }) => basket);

  const dispatch = useDispatch();

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  if (!totalCount) {
    return <EmptyBasket />;
  }

  const ClickClearBasket = () => {
    if (window.confirm("Вы действительно хотите очистить корзину")) {
      dispatch(clearBasket());
    }
  };

  return (
    <div className="basket">
      <div className="container">
        <div className="basket-inner">
          <div>
            <div className="basket_products">
              {items.map((item) => {
                return <BasketProduct key={item.id} {...item} />;
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
            <div className="basket__prices__btns">
              <div>
                <MyButton onClick={ClickClearBasket} className="btn_red">
                  Очистить корзину
                </MyButton>
              </div>
              <div className="basket__btn">
                <MyButton className="btn">Купить</MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
