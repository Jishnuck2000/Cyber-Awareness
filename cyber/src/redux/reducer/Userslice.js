import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Jishnu",
};
export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {},
  },
});
export const { increment } = loginSlice.actions;
export default loginSlice.reducer;
