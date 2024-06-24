import { configureStore } from "@reduxjs/toolkit";
import { StoreSlice ,StoreSliceAuth } from "./store";

export const ConfigStore = configureStore({
  reducer: { StoreSlice ,StoreSliceAuth },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
