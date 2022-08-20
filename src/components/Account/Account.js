import React from "react";
import { Active } from "./Active";

export const Account = () => {
  return (
    <div className="account">
      <div className="container">
        <h2>Мои заказы:</h2>
        <div className="account-inner">
          <div className="container__products">
            <Active />
          </div>
        </div>
      </div>
    </div>
  );
};
