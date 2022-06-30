import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link className="logo" to="/">
              <img className="logo__img" src="images/logo.png" alt="AliLiho" />
            </Link>
            <span className="logo__span"> Покупай больше, живи лучше! </span>
          </div>
          <div className="header__search">
            <input className="search" type="text" placeholder="Я ищу..." />
            <a className="search__btn" href="#">
              <img className="serch__img" src="images/search.png" />
            </a>
          </div>
          <div className="header__basket">
            <Link className="basket__link" to="/basket">
              <img className="basket__logo" src="images/baskett.png" />
            </Link>
          </div>
          <div className="header__basket">
            <Link className="basket__link" to="/registration_form">
              <img className="basket__logo" src="images/baskett.png" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
