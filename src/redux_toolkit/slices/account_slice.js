import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setProductElecteds(state, action) {
      const newItem = state.items.find((item) => item.id === action.payload.id);
      newItem
        ? newItem.count++
        : state.items.push({ ...action.payload, count: 1 });
    },
  },
});

export const { setProductElecteds } = AccountSlice.actions;

export default AccountSlice.reducer;
