import React from "react";
import { MyButton } from "../../UI/MyButton";
import { Active } from "./Active";

export const Account = () => {
  return (
    <div className="account">
      <div className="container">
        <h2>Мои заказы:</h2>
        {/* <div className="account__btns">
          <MyButton className="btn_red">Очистить историю заказов</MyButton>
        </div> */}
        <div className="account-inner">
          <div className="container__products">
            <Active />
          </div>
        </div>
      </div>
    </div>
  );
};
