import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { camerasReducer, phoneReducer, tvsReducer } from "./reducers";
import commentReducer from "./comments/reducers";
// Import nommé au lieu de default
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  phone: phoneReducer,
  tv: tvsReducer,
  camera: camerasReducer,
  comments: commentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

/* 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
*/

store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

export { store };
