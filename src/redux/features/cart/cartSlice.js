import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: null,
  totalPrice: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAdd: (state, action) => {
      state.quantity = action.payload.quantity;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});
export const { cartAdd } = cartSlice.actions;
export default cartSlice.reducer;
