import { createSlice } from "@reduxjs/toolkit";
import { getStateToBasket } from "../../utils/getStateToBasket";
import { getTotalPrice } from "../../utils/getTotalPrice";

const initialState = getStateToBasket();

const BasketSlice = createSlice({
  name: "basket_slice",
  initialState,
  reducers: {
    setProductBasket(state, action) {
      console.log(action);
      const newItem = state.items.find((obj) => obj.id === action.payload.id);
      newItem
        ? newItem.count++
        : state.items.push({
            ...action.payload,
            count: 1,
          });
      state.totalPrice = getTotalPrice(state.items);
    },
    minusItem(state, action) {
      const minusItem = state.items.find((obj) => obj.id === action.payload.id);
      if (minusItem) minusItem.count--;
      state.totalPrice = getTotalPrice(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id != action.payload);
      state.totalPrice = getTotalPrice(state.items);
    },
    clearBasket(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  setProductBasket,
  clearItem,
  removeItem,
  minusItem,
  clearBasket,
} = BasketSlice.actions;

export default BasketSlice.reducer;
