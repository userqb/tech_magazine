import { getTotalPrice } from "./getTotalPrice";

export const getStateToBasket = () => {
  const data = localStorage.getItem("basket_slice");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = getTotalPrice(items);

  return {
    items: items,
    totalPrice,
  };
};
