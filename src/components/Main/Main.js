import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterCategory } from "../../redux_toolkit/slices/filter_slice";
import banner from "../../images/hh.png";
import { Category } from "../Category/Category";
import { Slider } from "./Slider";
import { Login } from "../Login/Login";
import { MainProducts } from "./MainProducts";
import { Menu } from "./Menu";

export const Main = () => {
  const { categoryId } = useSelector(({ filter }) => filter);

  const dispatch = useDispatch();

  const onClickCategory = React.useCallback((id) => {
    dispatch(FilterCategory(id));
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="container__inner">
          <Category />
          <div className="container__middle">
            <div className="">
              <Menu onClickCategory={onClickCategory} categoryId={categoryId} />
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
        </div>
        <div className="content__banner">
          <div className="content__banner-inner">
            <div className="banner_anim__img">картинка</div>
            <div className="banner_anim__img">картинка</div>
            <div className="banner_anim__img">картинка</div>
          </div>
          <div className="banner_anim__text">Покупай больше, живи лучше!</div>
        </div>
        <div>
          <MainProducts />
        </div>
      </div>
    </div>
  );
};
