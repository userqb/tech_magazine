import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  review: [],
  value: "",
};

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
    setReview(state, action) {
      state.review = action.payload;
    },
  },
});

export const { setValue, setReview } = ReviewSlice.actions;

export default ReviewSlice.reducer;
