import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFilter = createAsyncThunk('productSlice/fetchFilter', async (api) => {
  let data = await fetch(api);
  return await data.json();
});

const filterSlice = createSlice({
  initialState: [],
  name: 'filterSlice',
  extraReducers: (builder) => {
    builder.addCase(fetchFilter.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export default filterSlice.reducer;