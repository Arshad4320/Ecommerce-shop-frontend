import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  price: null,
  description: null,
  category: null,
  size: null,
  image: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productAdd: (state, action) => {
      state.name = action.payload.name;
      state.price = action.payload.price;
      state.description = action.payload.description;
      state.category = action.payload.category;
      state.size = action.payload.size;
      state.image = action.payload.image;
    },
  },
});

export const { productAdd } = productSlice.actions;
export default productSlice.reducer;
