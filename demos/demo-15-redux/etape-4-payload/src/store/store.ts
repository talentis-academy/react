import { combineReducers, createStore } from "redux";
import { camerasReducer, phoneReducer, tvsReducer } from "./reducers";

const rootReducer = combineReducers({
  phone: phoneReducer,
  tv: tvsReducer,
  camera: camerasReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

export { store };
