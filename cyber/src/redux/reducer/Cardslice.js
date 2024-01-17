import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};
const token = localStorage.getItem("Token");

export const cartView = createAsyncThunk("content/cartview", async () => {
  const res = await axios.get("http://localhost:1111/api/cart/viewcart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.data;
  return data;
});

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cartView.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(cartView.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
      console.log(action.payload);
    });
    builder.addCase(cartView.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export const { extraReducers } = contentSlice.actions;
export default contentSlice.reducer;
