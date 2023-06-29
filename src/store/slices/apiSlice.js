import { createSlice } from "@reduxjs/toolkit";

const myAPI = createSlice({
  initialState: "https://fakestoreapi.com/products",
  name: 'myAPI',
  reducers: {
    setAPI: (state, action) => {
      return action.payload;
    }
  }
})

export const { setAPI } = myAPI.actions;
export default myAPI.reducer;