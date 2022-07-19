import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setFilterCategory, setSearchValue, setFilterMenu } =
  FilterSlice.actions;

export default FilterSlice.reducer;
