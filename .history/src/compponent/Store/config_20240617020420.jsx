import { configureStore } from "@reduxjs/toolkit";
import { StoreSlice } from "./store";
import { StoreSliceAuth } from "./authController";
import { StoreSliceUserLogged } from "./loggedUserController";
import { StoreSliceUserLogged } from "./loggedUserController";

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
