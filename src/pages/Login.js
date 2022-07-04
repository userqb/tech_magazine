import React from "react";
import { Link } from "react-router-dom";
import banner from "../images/banner.png";
import login from "../images/login.jpg";

export const Login = () => {
  return (
    <div className="registration">
      <Link to="/" className="registration__link">
        <img className="registration__img" src={login} />
      </Link>
      <h5>Добро пожаловать в AliLiho</h5>
      <div>
        <button className="registration__btn">Регистрация</button>
        <button className="login__btn">Войти</button>
      </div>
      <div className="banner">
        <img className="banner__img" src={banner} alt="banner" />
      </div>
    </div>
  );
};
