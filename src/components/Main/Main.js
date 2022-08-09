import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterCategory,
  setFilterMenu,
} from "../../redux_toolkit/slices/filter_slice";
import banner from "../../images/hh.png";
import { Category } from "../Category/Category";
import { Slider } from "./Slider";
import { Login } from "../Login/Login";
import { MainProducts } from "./MainProducts";
import { Menu } from "./Menu";
import { AnimationBanner } from "./AnimationBanner";

export const Main = () => {
  const { categoryId } = useSelector(({ filter }) => filter);
  const { searchValue } = useSelector(({ main }) => main);

  const dispatch = useDispatch();

  const onClickMenu = (index) => {
    dispatch(setFilterMenu(index));
  };

  const onClickCategory = (index) => {
    dispatch(setFilterCategory(index));
  };

  return (
    <div className="content">
      <div className="container">
        <div className="container__inner">
          <div className="container__categories">
            <Category
              activeValue={categoryId}
              onClickCategory={onClickCategory}
            />
          </div>
          {categoryId === null && searchValue === "" ? (
            <div className="container__middle">
              <div>
                <Menu onClickMenu={onClickMenu} />
                <Slider />
                <div className="container__banner">
                  <img
                    className="contauner__banner-img"
                    src={banner}
                    alt="banner"
                  />
                </div>
              </div>
              <Login />
            </div>
          ) : (
            <div>
              <MainProducts />
            </div>
          )}
        </div>
        <AnimationBanner />
        {categoryId !== null && searchValue !== "" ? null : (
          <div>
            <MainProducts />
          </div>
        )}
      </div>
    </div>
  );
};
