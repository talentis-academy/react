// store.ts
import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./phoneSlice";
import tvReducer from "./tvSlice";
import cameraReducer from "./cameraSlice";
import { commentsApi } from "../apis";

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
    tv: tvReducer,
    camera: cameraReducer,
    commentsApi: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commentsApi.middleware),
  devTools: true, // optionnel (par défaut true en dev)
});
