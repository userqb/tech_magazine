import React from "react";
import { OrderProduct } from "./components/OrderProduct";

export const Order = () => {
  return (
    <div>
      <OrderProduct />
      <div>
        <h2>Кол-во цена: </h2>
        <h2>Итоговая цена: </h2>\
      </div>
    </div>
  );
};
