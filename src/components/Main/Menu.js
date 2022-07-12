import React from "react";
import { Link } from "react-router-dom";

export const Menu = ({ onClickMenuItem }) => {
  const menuArray = ["Бренды", "Распродажи", "Скидки"];

  return (
    <ul className="container__menu">
      {menuArray.map((item, i) => {
        return (
          <li
            onClick={() => onClickMenuItem(i + 1)}
            key={`${item}_${i + 1}`}
            className="container__item"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
