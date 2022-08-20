import React from "react";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../images/banner.png";
import login from "../../images/login.jpg";
import { useSelector } from "react-redux";

export const Login = () => {
  const navigate = useNavigate();

  const clickLogin = () => {
    navigate("/login");
  };

  return (
    <div className="registration">
      <Link to="/" className="registration__link">
        <img className="registration__img" src={login} />
      </Link>
      <h5>Добро пожаловать в AliLiho</h5>
      <div>
        <button onClick={clickLogin} className="registration__btn">
          Регистрация
        </button>
        <button onClick={clickLogin} className="login__btn">
          Войти
        </button>
      </div>
      <div className="banner">
        <img className="banner__img" src={banner} alt="banner" />
      </div>
    </div>
  );
};
