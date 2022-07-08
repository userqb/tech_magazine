import { getTotalPrice } from "./getTotalPrice";

export const getStateToBasket = () => {
  const data = localStorage.getItem("basket");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = getTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};
