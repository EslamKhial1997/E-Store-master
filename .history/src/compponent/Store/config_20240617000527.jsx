import { configureStore } from "@reduxjs/toolkit";
import { StoreSlice } from "./store";


export const ConfigStore = configureStore({
  reducer: { 
    StoreSlice ,
    StoreSliceAuth:StoreA },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
