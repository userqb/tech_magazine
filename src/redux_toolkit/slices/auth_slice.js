import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IsAuth: false,
};

const AuthSlice = createSlice({
  name: "auth_slice",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.IsAuth = action.payload;
    },
  },
});

export const { setAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
