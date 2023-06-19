"use client";
import { Product } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./states/product";
export interface AppStore {
  product: Product[];
}

export default configureStore<AppStore>({
  reducer: {
    product: productSlice.reducer,
  },
});
