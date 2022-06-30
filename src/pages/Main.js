import React from "react";
import { Category } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { MainSlider } from "./components/MainSlider";
import { Login } from "./Login";
import { MainProducts } from "./components/MainProducts";

export const Main = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="container__inner">
          <Navbar />
          <div className="container__middle">
            <div className="">
              <Category />
              <MainSlider />
              <div className="container__banner">
                <img
                  className="contauner__banner-img"
                  src="images/hh.png"
                  alt="banner"
                />
              </div>
            </div>
            <Login />
          </div>
        </div>
        <div className="content__banner"></div>
        <div>
          <MainProducts />
        </div>
      </div>
    </div>
  );
};
