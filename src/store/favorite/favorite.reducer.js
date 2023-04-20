import { createSlice } from '@reduxjs/toolkit';

// HELPER FUNCTIONS

// helper function to check if the product is already in favorites
const addToFavoriteHelper = (favoriteItems, itemToAdd) => {
  const existingItem = favoriteItems.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
      alert('item is already in favorites')
      return favoriteItems;
  }
  return [...favoriteItems, {...itemToAdd}];
}
// helper function to remove the product from favorites page
const removeItemHelper = (favoriteItems, itemToRemove) => {
  return favoriteItems.filter((favItem) => favItem.id !== itemToRemove.id)
}

export const FAVORITE_INITIAL_STATE = {
  favoriteItems: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: FAVORITE_INITIAL_STATE,
  reducers: {
    addItemsToFavorite(state, action) {
      state.favoriteItems = addToFavoriteHelper(state.favoriteItems, action.payload)
    },
    removeItemFromFavorite(state, action) {
      state.favoriteItems = removeItemHelper(state.favoriteItems, action.payload)
    },
  }
})

export const { addItemsToFavorite, removeItemFromFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;