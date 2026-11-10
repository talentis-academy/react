import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./phoneSlice";

// Attention : seul phone est déclaré ; Home lit aussi state.tv et state.camera (ajoutés à l'étape 7)
export const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
  devTools: true,
});
