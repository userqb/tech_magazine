import { createSlice } from "@reduxjs/toolkit";
import { getStateToBasket } from "./../../utils/getStateToBasket";

const initialState = getStateToBasket();

const TestSlice = createSlice({
  name: "test_slice",
  initialState,
  reducers: {
    setProductId(state, action) {
      state.productId = action.payload.id;
    },
    setArray(state, action) {
      state.array.push(action.payload);
    },
    setOrderProduct(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setProductId, setArray, setOrderProduct } = TestSlice.actions;

export default TestSlice.reducer;
