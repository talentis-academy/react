import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./phoneSlice";
import { tvReducer, cameraReducer } from "./reducers";

// configureStore remplace createStore + combineReducers : on peut mélanger un slice et les anciens reducers
export const store = configureStore({
  reducer: {
    phone: phoneReducer,
    tv: tvReducer,
    camera: cameraReducer,
  },
  devTools: true,
});
