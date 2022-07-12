import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Category = ({ activeValue, onClickCategory }) => {
  const arrayCategory = [
    "Компьютеры и оргтехника",
    "Телефоны и аксессуары",
    "Бытовая техника",
  ];

  return (
    <nav className="category">
      <h2>Категории</h2>
      <ul className="container__category">
        <li className="category__item" onClick={() => onClickCategory(null)}>
          Все категории
        </li>
        {arrayCategory.map((item, i) => {
          return (
            <li
              key={`${item}_${i + 1}`}
              onClick={() => onClickCategory(i + 1)}
              className={
                activeValue === i + 1
                  ? "category__item__active"
                  : "category__item"
              }
            >
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
