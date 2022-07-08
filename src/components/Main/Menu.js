import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <ul className="container__menu">
      <li className="container__item">
        <Link to="/" className="container__link">
          Бренды
        </Link>
      </li>
      <li className="container__item">
        <Link to="/" className="container__link">
          От 90 руб
        </Link>
      </li>
      <li className="container__item">
        <Link to="/" className="container__link">
          Распродажи
        </Link>
      </li>
      <li className="container__item">
        <Link to="/" className="container__link">
          Скидки
        </Link>
      </li>
    </ul>
  );
};
