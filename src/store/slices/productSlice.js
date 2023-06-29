import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productSlice/fetchProducts', async (api) => {
  let data = await fetch(api);
  return await data.json();
});

const productSlice = createSlice({
  initialState: [],
  name: 'productSlice',
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export default productSlice.reducer;