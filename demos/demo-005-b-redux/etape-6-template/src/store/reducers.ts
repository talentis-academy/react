import { BUY_PHONE, BUY_TV, BUY_CAMERA } from "./actions";

const phoneInitialState = {
  total: 10,
};

const phoneReducer = (state = phoneInitialState, action) => {
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
const tvInitialState = {
  total: 8,
};

const tvReducer = (state = tvInitialState, action) => {
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

const cameraInitialState = {
  total: 5,
};

const cameraReducer = (state = cameraInitialState, action) => {
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

export { phoneReducer, tvReducer, cameraReducer };
