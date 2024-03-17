import { configureStore } from "@reduxjs/toolkit";
import { reducerPath, reducer, middleware } from "../services/index.js";

export const store = configureStore({
  reducer: { [reducerPath]: reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
