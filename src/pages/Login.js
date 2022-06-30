import React from "react";

export const Login = () => {
  return (
    <div className="registration">
      <a className="registration__link">
        <img
          className="registration__img"
          src="images/login.jpg"
          alt="registration"
        />
      </a>
      <h5>Добро пожаловать в AliLiho</h5>
      <div>
        <button className="registration__btn">Регистрация</button>
        <button className="login__btn">Войти</button>
      </div>
      <div className="banner">
        <img className="banner__img" src="images/banner.png" alt="banner" />
      </div>
    </div>
  );
};
