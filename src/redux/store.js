import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./features/user/userSlice";
import productSlice from "./features/product/productSlice";
import categorySlice from "./features/category/categorySlice";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    category: categorySlice,
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
