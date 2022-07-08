import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductBasket } from "../../redux_toolkit/slices/basket_slice";
import { setArray } from "../../redux_toolkit/slices/test_slice";
import { Preloader } from "../Preloader";
import { Product } from "../Product";
import { fetchProducts } from "./../../redux_toolkit/slices/main_slice";

export const MainProducts = () => {
  const { items, status } = useSelector(({ main }) => main);

  const dispatch = useDispatch();

  const onClickProduct = (obj) => {
    dispatch(setArray(obj));
  };

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addProductToBasket = (obj) => {
    dispatch(setProductBasket(obj));
  };

  return (
    <div>
      {status === "error" ? (
        <div>
          Ошибка загрузки товаров! Пожалуйства, перезагрузите страницу или
          загляните к нам попозже.
        </div>
      ) : (
        <div>
          {status === "loading" ? (
            <div>
              <Preloader />
            </div>
          ) : (
            <div className="container__products">
              {items.map((obj) => {
                return (
                  <Product
                    className="product"
                    key={obj.id}
                    {...obj}
                    addProductToBasket={addProductToBasket}
                    onClickProduct={onClickProduct}
                    valueBtn="Добавить"
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
