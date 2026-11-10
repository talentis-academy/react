import { combineReducers, createStore } from "redux";
import { camerasReducer, phoneReducer, tvsReducer } from "./reducers";

// combineReducers : chaque reducer gère sa part du state (state.phone, state.tv, state.camera)
const rootReducer = combineReducers({
  phone: phoneReducer,
  tv: tvsReducer,
  camera: camerasReducer,
});

const store = createStore(rootReducer);

// subscribe : cette fonction est appelée après chaque dispatch
store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

export { store };
