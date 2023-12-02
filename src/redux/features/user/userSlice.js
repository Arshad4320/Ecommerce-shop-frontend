import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  password: null,
  address: null,
  _id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdded: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.address = action.payload.address;
    },
  },
});

export const { userAdded } = userSlice.actions;
export default userSlice.reducer;
