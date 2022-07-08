import React from "react";

export const OrderProduct = ({ name, image }) => {
  return (
    <div className="order__product">
      <div>{image}</div>
      <div>{name}</div>
    </div>
  );
};
