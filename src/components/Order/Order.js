import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../Product";
import { OrderProduct } from "./OrderProduct";

export const Order = () => {
  const { items } = useSelector(({ test_slice }) => test_slice);
  console.log(items);

  return (
    <div className="order">
      <div className="container">
        <div className="order-inner">
          <h2>Заказанные товары</h2>
          {items.map((item) => {
            return <OrderProduct key={item.id} {...item} />;
          })}

          <div>
            <h2>Кол-во: </h2>
            <h2>Итоговая цена: </h2>\
          </div>
        </div>
      </div>
    </div>
  );
};
