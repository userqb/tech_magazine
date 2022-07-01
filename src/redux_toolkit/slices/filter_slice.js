import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FilterCategory(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { FilterCategory, setSearchValue } = FilterSlice.actions;

export default FilterSlice.reducer;
