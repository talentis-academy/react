import { combineReducers, createStore, applyMiddleware } from "redux";
import { camerasReducer, phoneReducer, tvsReducer } from "./reducers";

const rootReducer = combineReducers({
  phone: phoneReducer,
  tv: tvsReducer,
  camera: camerasReducer,
});

// Simple logging middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action:", action);
  const result = next(action);
  console.log("State after action:", store.getState());
  return result;
};

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export { store };
