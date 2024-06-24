import { configureStore } from "@reduxjs/toolkit";
import { StoreSlice } from "./store";
import  StoreSliceAuth  from "./authController";

export const ConfigStore = configureStore({
  reducer: { StoreSlice ,Store },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});