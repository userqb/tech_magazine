import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="category">
      <h2 onClick={() => console.log("category")}>Категории</h2>
      <ul className="container__category">
        <li className="category__item">
          <Link to="/computers" className="category__link" href="#">
            Компьютеры и оргтехника
          </Link>
        </li>
        <li className="category__item">
          <Link to="/phones" className="category__link" href="#">
            Телефоны и аксессуары
          </Link>
        </li>
        <li className="category__item">
          <Link to="/offis_products" className="category__link" href="#">
            Товары для офиса
          </Link>
        </li>
        <li className="category__item">
          <Link to="/tech_products" className="category__link" href="#">
            Бфтовая техника
          </Link>
        </li>
        <li className="category__item">
          <Link to="/childrens_products" className="category__link" href="#">
            Детские товары
          </Link>
        </li>
      </ul>
    </nav>
  );
};
