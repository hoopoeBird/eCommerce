import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: 'cartSlice',
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.find((product) => product.id === action.payload.id);
      findProduct? findProduct.quantity += 1: state.push({ ...action.payload, quantity: 1 });
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    clearProducts: () => [],
    increment: (state, action) => {
      state.map((product) => {
        if(product.quantity > 1) {
          if(action.payload.id == product.id) {
            return product.quantity -= 1;
          }
        }
      });
    },
    decrement: (state, action) => {
      state.map((product) => {
        if(action.payload.id == product.id) {
          return product.quantity += 1;
        }
      });
    }
  }
})

export const { addProduct, deleteProduct, clearProducts, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;