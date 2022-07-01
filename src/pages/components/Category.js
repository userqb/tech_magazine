import React from "react";
import { Link } from "react-router-dom";

const arrayCategory = [
  "Компьютеры и оргтехника",
  "Телефоны и аксессуары",
  "Бытовая техника",
];

export const Navbar = ({ categoryId, onClickCategory }) => {
  return (
    <nav className="category">
      <h2>Категории</h2>
      <ul className="container__category">
        {arrayCategory.map((item, i) => {
          return (
            <li className="category__item">
              <Link to="/computers" className="category__link">
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// onClick={onClickCategory(i)}
