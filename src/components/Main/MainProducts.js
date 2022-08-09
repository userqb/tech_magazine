import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductBasket } from "../../redux_toolkit/slices/basket_slice";
import { Preloader } from "../Preloader";
import { Product } from "../Product";
import { fetchProducts } from "./../../redux_toolkit/slices/main_slice";

export const MainProducts = () => {
  const { items, status, searchValue } = useSelector(({ main }) => main);
  const { categoryId } = useSelector(({ filter }) => filter);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts({ categoryId, searchValue }));
  }, [categoryId, searchValue]);

  const addProductToBasket = (obj) => {
    dispatch(setProductBasket(obj));
  };

  return (
    <div>
      {status === "error" ? (
        <h2>
          Ошибка загрузки товаров! Пожалуйства, перезагрузите страницу или
          загляните к нам попозже.
        </h2>
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
                    pathProduct={obj.id}
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
