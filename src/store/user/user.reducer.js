import { USER_ACTION_TYPES } from "./user.types";

//defining initial state
export const USER_INITIAL_STATE = {
  currentUser: null,
};

// reducer function that updates the global state with payload based on the case type 
export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};