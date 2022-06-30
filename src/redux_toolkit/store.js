import { configureStore } from "@reduxjs/toolkit";
import basket from "./slices/basket_slice";
import main from "./slices/main_slice";
import auth from "./slices/auth_slice";

export const store = configureStore({
  reducer: {
    basket,
    main,
    auth,
  },
});
