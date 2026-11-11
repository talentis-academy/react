export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";
export const LOAD_COMMENTS_ERROR = "LOAD_COMMENTS_ERROR";

import axios from "axios";

const loadApiComments = () => {
  return {
    type: LOAD_COMMENTS,
  };
};

const loadCommentsSuccess = (comments) => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments,
  };
};

const loadCommentsError = (error) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: error,
  };
};

// Avec redux-thunk, une action peut être une fonction : elle reçoit dispatch et fait l'appel API
export const apiCall = () => {
  return async (dispatch) => {
    dispatch(loadApiComments());

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments?postId=1"
      );
      dispatch(loadCommentsSuccess(response.data));
    } catch (error) {
      dispatch(loadCommentsError(error.message));
    }
  };
};
