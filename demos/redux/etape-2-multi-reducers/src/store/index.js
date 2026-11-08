import { combineReducers, createStore } from "redux";

// Action Types

const BUY_PHONE = "BUY_PHONE";
const BUY_TV = "BUY_TV";
const BUY_CAMERA = "BUY_CAMERA";

const buyPhone = () => {
  return {
    type: BUY_PHONE,
  };
};

const buyTV = () => {
  return {
    type: BUY_TV,
  };
};

const buyCamera = () => {
  return {
    type: BUY_CAMERA,
  };
};

// reducer

// initial state
const initialStatePhone = {
  total: 5,
};

const initialStateTV = {
  total: 3,
};

const initialStateCamera = {
  total: 8,
};

// (previousState, action) => newState
const phoneReducer = (state = initialStatePhone, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        total: state.total - 1,
      };
    default:
      return state;
  }
};

// (previousState, action) => newState
const tvsReducer = (state = initialStateTV, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        total: state.total - 1,
      };
    default:
      return state;
  }
};

// (previousState, action) => newState
const camerasReducer = (state = initialStateCamera, action) => {
  switch (action.type) {
    case BUY_CAMERA:
      return {
        ...state,
        total: state.total - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  phone: phoneReducer,
  tv: tvsReducer,
  camera: camerasReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState();
  const { phone, tv, camera } = state;
  console.log("Updated State:", state);
  // Update the UI elements directly (Test)
  document.getElementById("phones").innerHTML = `${phone.total} available`;
  document.getElementById("tvs").innerHTML = `${tv.total} available`;
  document.getElementById("cameras").innerHTML = `${camera.total} available`;
});

export { store, buyPhone, buyTV, buyCamera, phoneReducer };
