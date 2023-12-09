import { configureStore } from "@reduxjs/toolkit";
import middleware from "./middleware";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware)
});
