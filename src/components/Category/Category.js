import React from "react";
import { Link } from "react-router-dom";

const arrayCategory = [
  { id: 0, path: "/computers", category: "Компьютеры и оргтехника" },
  { id: 1, path: "/phones", category: "Телефоны и аксессуары" },
  { id: 2, path: "/appliances", category: "Бытовая техника" },
];

export const Category = () => {
  return (
    <nav className="category">
      <h2>Категории</h2>
      <ul className="container__category">
        {arrayCategory.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => console.log(item.id)}
              className="category__item"
            >
              <Link to={item.path} className="category__link">
                {item.category}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
