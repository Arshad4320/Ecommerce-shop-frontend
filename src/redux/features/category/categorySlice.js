import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryAdd: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { categoryAdd } = categorySlice.actions;
export default categorySlice.reducer;
