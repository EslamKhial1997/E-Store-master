import { configureStore } from "@reduxjs/toolkit";
import { StoreSlice } from "./store";
import { StoreSliceAuth } from "./authController";
import { StoreSliceAuth } from "./authController";

export const ConfigStore = configureStore({
  reducer: {
    StoreSlice,
    StoreSliceAuth,
    StoreSliceUser
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
