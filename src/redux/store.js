import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./features/user/userSlice";
import productSlice from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
