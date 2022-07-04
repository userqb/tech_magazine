import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productId: null,
};

const TestSlice = createSlice({
  name: "test_slice",
  initialState,
  reducers: {
    setProductId(state, action) {
      console.log(action);
      state.productId = action.payload.id;
    },
  },
});

export const { setProductId } = TestSlice.actions;

export default TestSlice.reducer;
