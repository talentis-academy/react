// phone est passé dans phoneSlice : il reste tv et camera (passés en slice à l'étape 7)
import { BUY_TV, BUY_CAMERA } from "./actions";

const tvInitialState = {
  total: 3,
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
  total: 8,
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

export { tvReducer, cameraReducer };
