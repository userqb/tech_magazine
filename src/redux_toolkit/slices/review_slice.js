import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  review: [],
  value: { body: "" },
};

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
    setReview(state, action) {
      console.log(action.payload);
      const newReview = {
        ...state.value,
        id: Date.now(),
      };
      state.review = [...action.payload.value, newReview];
    },
  },
});

export const { setValue, setReview } = ReviewSlice.actions;

export default ReviewSlice.reducer;
