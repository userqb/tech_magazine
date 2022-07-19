import React from "react";
import { useSelector } from "react-redux";
import { MyButton } from "../../UI/MyButton";
import { Product } from "../Product";
import { OrderProduct } from "./OrderProduct";

export const Order = () => {
  const { items, totalPtice } = useSelector(({ order }) => order);

  return (
    <div className="order">
      <div className="container">
        <div className="order-inner">
          <h2>Заказанные товары</h2>
          <div className="container__products">
            {items.map((item) => {
              return <OrderProduct key={item.id} {...item} />;
            })}
          </div>
          <div>
            <h2>Кол-во: {items.length}</h2>
            <h2>Итоговая цена:{totalPtice} </h2>
            <MyButton
              className="btn"
              onClick={() => console.log("сделать заказ")}
            >
              Сделать заказ
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};
