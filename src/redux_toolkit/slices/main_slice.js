import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  searchValue: "",
  status: "loading",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ categoryId, searchValue }) => {
    console.log({ categoryId, searchValue });
    const response = await axios.get(
      `https://629ef7298b939d3dc28b2d3b.mockapi.io/products?${
        categoryId !== null ? `category=${categoryId}` : ""
      }${searchValue !== "" ? `saerch=${searchValue}` : ""}`
    );
    return response.data;
  }
);

const MainSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    setSearchValue(state, action) {
      state.items.filter((items) => {
        return items.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "completed";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setProducts, setSearchValue } = MainSlice.actions;

export default MainSlice.reducer;
