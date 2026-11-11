import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { camerasReducer, phoneReducer, tvsReducer } from "./reducers";
import commentReducer from "./comments/reducers";
// Import nommé au lieu de default
import { thunk } from "redux-thunk";

// combineReducers : chaque reducer gère sa part du state (state.phone, state.tv, state.camera)
const rootReducer = combineReducers({
  phone: phoneReducer,
  tv: tvsReducer,
  camera: camerasReducer,
  comments: commentReducer,
});

// applyMiddleware(thunk) : permet de dispatcher des fonctions (apiCall), pas seulement des objets
const store = createStore(rootReducer, applyMiddleware(thunk));

/* 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
*/

// subscribe : cette fonction est appelée après chaque dispatch
store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

export { store };
