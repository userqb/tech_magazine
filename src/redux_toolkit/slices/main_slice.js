import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "loading",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://629ef7298b939d3dc28b2d3b.mockapi.io/products"
    );
    const data = await response.data;
    return data;
  }
);

const MainSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "resolved";
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setProducts } = MainSlice.actions;

export default MainSlice.reducer;