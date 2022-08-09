import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // searchValue: "",
  categoryId: null,
  menuItem: null,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterCategory(state, action) {
      state.categoryId = action.payload;
    },
    setFilterMenu(state, action) {
      state.menuItem = action.payload;
    },
    // setSearchValue(state, action) {
    //   state.searchValue = action.payload;
    // },
  },
});

export const { setFilterCategory, setFilterMenu } = FilterSlice.actions;

export default FilterSlice.reducer;
