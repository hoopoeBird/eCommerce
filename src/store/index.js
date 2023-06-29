import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    filter: filterSlice,
    api: apiSlice
  }
})

export { store };