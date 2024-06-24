import { configureStore } from "@reduxjs/toolkit";
import { StoreSlice } from "./store";

export const ConfigStore = configureStore({
  reducer: { StoreSlice ,Stor },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
