import React from "react";
import logo from "../images/logo.png";
import VK from "../images/Vk.png";
import Instagram from "../images/Inst.png";
import Facebook from "../images/Facebook.png";
import GooglePlay from "../images/Google Play.png";
import AppStore from "../images/App Store.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <a className="logo" href="#">
            <img className="logo__img" src={logo} alt="AliLiho" />
          </a>
        </div>
        <div className="footer__networks">
          <div className="footer__network">
            <a href="#">
              <img className="network__img" src={VK} alt="vk" />
            </a>
            <a href="#">
              <img className="network__img" src={Instagram} alt="instagram" />
            </a>
            <a href="#">
              <img className="network__img" src={Facebook} alt="facebook" />
            </a>
          </div>
          <div className="footer__magazine">
            <a href="#">
              <img className="network__img" src={GooglePlay} alt="googleplay" />
            </a>
            <a href="#">
              <img className="network__img" src={AppStore} alt="appstore" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__info">
        <a className="footer__link" href="#">
          (c) AliLihoMagazine
        </a>
        <a className="footer__link" href="#">
          Политика правооблодателя
        </a>
        <a className="footer__link" href="#">
          Информация
        </a>
      </div>
    </footer>
  );
};
