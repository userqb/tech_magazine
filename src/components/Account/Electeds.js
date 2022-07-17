import React from "react";
import { useSelector } from "react-redux";
import { AccountProduct } from "./AccountProduct";

export const Electeds = () => {
  const { items } = useSelector(({ account }) => account);

  return (
    <div className="account__electeds">
      {items.map((item) => {
        return <AccountProduct key={item.id} {...item} />;
      })}
    </div>
  );
};
