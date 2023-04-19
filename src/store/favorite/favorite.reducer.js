import { FAVORITE_ACTIONS_TYPES } from "./favorite.types";

export const FAVORITE_INITIAL_STATE = {
  favoriteItems: [],
};

export const favoriteReducer = (
  state = FAVORITE_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case FAVORITE_ACTIONS_TYPES.SET_FAVORITE_ITEMS:
      return {
        ...state,
        favoriteItems: payload,
      };
    default:
      return state;
  }
};
