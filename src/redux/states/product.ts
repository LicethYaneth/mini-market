"use client";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/models";
import {
  getLocalStorage,
  setLocalStorage,
} from "@/utilities/localstorage.utility";
const initialState: Product[] = [];

export const productSlice = createSlice({
  name: "product",
  initialState: getLocalStorage("product")
    ? JSON.parse(getLocalStorage("product") as string)
    : initialState,
  reducers: {
    addProduct: (state, action) => {
      setLocalStorage("product", state);
      return action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;
