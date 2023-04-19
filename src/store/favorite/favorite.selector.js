import { createSelector } from "reselect";

const selectFavoriteReducer = state => state.favorite;

export const selectFavoriteItems = createSelector(
    [selectFavoriteReducer],
    (favorite) => favorite.favoriteItems
);