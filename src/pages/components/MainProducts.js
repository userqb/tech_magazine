import React from "react";
import { Product } from "./Product";
import { fetchProducts } from "./../../redux_toolkit/slices/main_slice";
import { useDispatch, useSelector } from "react-redux";
import { setProductBasket } from "../../redux_toolkit/slices/basket_slice";
import { setProductId } from "../../redux_toolkit/slices/test_slice";

export const MainProducts = () => {
  const items = useSelector((state) => state.main.items);

  const dispatch = useDispatch();

  const onClickProduct = (id) => [dispatch(setProductId(id))];

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addProductToBasket = (obj) => {
    dispatch(setProductBasket(obj));
  };

  return (
    <div>
      <div className="container__products">
        {items.map((obj) => {
          return (
            <Product
              className="product"
              key={obj.id}
              {...obj}
              addProductToBasket={addProductToBasket}
            />
          );
        })}
      </div>
    </div>
  );
};
