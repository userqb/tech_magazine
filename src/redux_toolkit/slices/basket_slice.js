import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // setProductBasket(state, action) {
    //   const addItem = state.items.find((obj) => {
    //     obj.id === action.payload.id;
    //   });
    //   if (addItem) {
    //     addItem.count++;
    //   } else {
    //     state.items.push({
    //       ...state.items,
    //       count: 1,
    //     });
    //   }
    // },
    // minusItem(state, action) {
    //   const minusItem = state.items.find((obj) => {
    //     obj.id === action.payload.id;
    //   });
    //   if (minusItem) {
    //     minusItem.count--;
    //   }
    // },
    // removeItem(state, action) {
    //   state.items = state.items.filter((obj) => obj.id != action.payload);
    // },
    // clearItem(state) {
    //   state.items = [];
    //   state.totalPrice = 0;
    // },
  },
});

export const { setProductBasket } = BasketSlice.actions;

export default BasketSlice.reducer;
