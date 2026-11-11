// reducer

import { BUY_CAMERA, BUY_PHONE, BUY_TV } from "./actions";

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
        total: state.total - action.payload,
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

export { phoneReducer, tvsReducer, camerasReducer };
