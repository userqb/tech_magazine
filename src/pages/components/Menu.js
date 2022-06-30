import React from "react";

export const Category = () => {
  return (
    <ul className="container__menu">
      <li className="container__item">
        <a className="container__link" href="#">
          Бренды
        </a>
      </li>
      <li className="container__item">
        <a className="container__link" href="#">
          От 90 руб
        </a>
      </li>
      <li className="container__item">
        <a className="container__link" href="#">
          Распродажи
        </a>
      </li>
      <li className="container__item">
        <a className="container__link" href="#">
          Скидки
        </a>
      </li>
    </ul>
  );
};
