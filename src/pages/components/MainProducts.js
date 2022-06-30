import React from "react";
import { Product } from "./Product";
import { fetchProducts } from "./../../redux_toolkit/slices/main_slice";
import { useDispatch, useSelector } from "react-redux";

export const MainProducts = () => {
  const items = useSelector((state) => state.main.items);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(items);
  return (
    <div>
      <div className="container__products">
        {items.map((obj) => {
          return <Product key={obj.id} {...obj} />;
        })}
      </div>
    </div>
  );
};
