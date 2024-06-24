import { configureStore } from "@reduxjs/toolkit";
import { StoreSlice } from "./store";

export const ConfigStore = configureStore({
  reducer: { StoreSlice ,StoreSliceAuth },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
