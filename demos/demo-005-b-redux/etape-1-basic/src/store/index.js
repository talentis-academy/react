import { createStore } from "redux";

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
const initialState = {
  phones: 5,
  tvs: 3,
  cameras: 8,
};

// (previousState, action) => newState
const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };
    case BUY_TV:
      return {
        ...state,
        tvs: state.tvs - 1,
      };
    case BUY_CAMERA:
      return {
        ...state,
        cameras: state.cameras - 1,
      };
    default:
      return state;
  }
};

// store
// createStore : le store garde tout le state ; le reducer dit comment il change
const store = createStore(phoneReducer);

// subscribe : cette fonction est appelée après chaque dispatch
store.subscribe(() => {
  const state = store.getState();
  console.log("Updated State:", state);
  // Update the UI elements directly (Test)
  document.getElementById("phones").innerHTML = `${state.phones} available`;
  document.getElementById("tvs").innerHTML = `${state.tvs} available`;
  document.getElementById("cameras").innerHTML = `${state.cameras} available`;
});

export { store, buyPhone, buyTV, buyCamera, phoneReducer };
