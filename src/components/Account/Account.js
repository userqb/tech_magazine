import React from "react";
import { MyButton } from "../../UI/MyButton";
import { Product } from "../Product";
import { AccountProduct } from "./AccountProduct";
import { Active } from "./Active";
import { Electeds } from "./Electeds";
import { Archive } from "./Archive";

export const Account = () => {
  return (
    <div className="account">
      <div className="container">
        <h2>Мои заказы:</h2>
        <div className="account__btns">
          <MyButton>Активные</MyButton>
          <MyButton>Архив</MyButton>
          <MyButton>Избранные</MyButton>
          <MyButton className="btn_red">Очистить историю заказов</MyButton>
        </div>
        <div className="account-inner">
          <div className="container__products">
            <Active />
          </div>
          <div>
            <Electeds />
          </div>
          <div>
            <Archive />
          </div>
        </div>
      </div>
    </div>
  );
};
