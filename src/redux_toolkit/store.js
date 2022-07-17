import { configureStore } from "@reduxjs/toolkit";
import basket from "./slices/basket_slice";
import main from "./slices/main_slice";
import auth from "./slices/auth_slice";
import filter from "./slices/filter_slice";
import test_slice from "./slices/test_slice";
import review from "./slices/review_slice";
import account from "./slices/account_slice";

export const store = configureStore({
  reducer: {
    basket,
    main,
    auth,
    filter,
    test_slice,
    review,
    account,
  },
});
