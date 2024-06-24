import { configureStore } from "@reduxjs/toolkit";
import { StoreSlice } from "./store";
import { StoreSliceAuth } from "./authController";
import { StoreSliceUser } from "./loggedUserController";

export const ConfigStore = configureStore({
  reducer: {
    StoreSlice,
    StoreSliceAuth,
    StoreSliceUser,
    StoreSliceUserLogged
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
