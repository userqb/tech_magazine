import { createSlice } from "@reduxjs/toolkit";
import { getStateToBasket } from "../../utils/getStateToBasket";
import { getTotalPrice } from "../../utils/getTotalPrice";

const initialState = getStateToBasket();

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setProductBasket(state, action) {
      const questItem = state.items.find((obj) => obj.id === action.payload.id);
      if (questItem) {
        questItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = getTotalPrice(state.items);
    },
    minusItem(state, action) {
      const minusItem = state.items.find((obj) => obj.id === action.payload.id);
      if (minusItem) {
        minusItem.count--;
      }
      state.totalPrice = getTotalPrice(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id != action.payload);
      state.totalPrice = getTotalPrice(state.items);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    clearBasket(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    setOrderProduct(state, action) {},
  },
});

export const {
  setProductBasket,
  clearItem,
  removeItem,
  minusItem,
  clearBasket,
  setOrderProduct,
} = BasketSlice.actions;

export default BasketSlice.reducer;
