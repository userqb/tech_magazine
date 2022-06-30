import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <a className="logo" href="#">
            <img className="logo__img" src="images/logo.png" alt="AliLiho" />
          </a>
        </div>
        <div>
          <div className="footer__networks">
            <div className="networks__">VK</div>
            <div className="networks__">INSTAGRAM</div>
            <div className="networks__">FACEBOOK</div>
          </div>
          <div className="footer__magazine">
            <div className="magazine__">APPSTORE</div>
            <div className="magazine__">GOOGLEPLAY</div>
          </div>
        </div>
      </div>
      <div className="footer__info">
        <a className="footer__link" href="#">
          Информация
        </a>
        <a className="footer__link" href="#">
          Информация
        </a>
        <a className="footer__link" href="#">
          Информация
        </a>
      </div>
    </footer>
  );
};
