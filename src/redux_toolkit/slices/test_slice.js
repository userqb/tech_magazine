import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPtice: 0,
};

const TestSlice = createSlice({
  name: "test_slice",
  initialState,
  reducers: {
    setOrderProduct(state, action) {
      state.items.push(action.payload);
      state.totalPtice = state.items.reduce((sum, item) => {
        return item.price + sum;
      }, 0);
    },
    setArray(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { setOrderProduct, setArray } = TestSlice.actions;

export default TestSlice.reducer;
