import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../redux_toolkit/slices/main_slice";

export const Header = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);

  const dispatch = useDispatch();

  const setSearch = (str) => {
    dispatch(setSearchValue(str));
  };

  const onChangeInput = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link className="logo" to="/">
              <img className="logo__img" src={logo} alt="AliLiho" />
            </Link>
            <span className="logo__span"> Покупай больше, живи лучше! </span>
          </div>
          <div className="header__search">
            <input
              value={value}
              ref={inputRef}
              onChange={onChangeInput}
              className="search"
              type="text"
              placeholder="Я ищу..."
            />
            <a className="search__btn" href="#">
              <img
                className="serch__img"
                src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
              />
            </a>
          </div>
          <div className="header__basket">
            <Link className="basket__link" to="/basket">
              <img
                className="basket__logo"
                src="https://img.icons8.com/material-outlined/24/000000/add-shopping-cart.png"
              />
            </Link>
          </div>
          <div className="header__basket">
            <Link className="basket__link" to="/account">
              <img
                className="basket__logo"
                src="https://img.icons8.com/material-outlined/24/000000/user-male-circle.png"
              />
            </Link>
          </div>
          <div className="header__basket">
            <Link className="basket__link" to="/order">
              <img
                className="basket__logo"
                src="https://img.icons8.com/material-outlined/24/000000/user-male-circle.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
