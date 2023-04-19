import { FAVORITE_ACTIONS_TYPES } from "./favorite.types";

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

// ACTUAL ACTION FUNCTIONS

export const addItemsToFavorite = (favoriteItems, itemToAdd) => {
    const newFavoriteItems = addToFavoriteHelper(favoriteItems, itemToAdd);
    return ({
        type: FAVORITE_ACTIONS_TYPES.SET_FAVORITE_ITEMS,
        payload: newFavoriteItems,
    })
}

export const removeItemFromFavorite = (favoriteItems, itemToRemove) => {
    const newFavoriteItems = removeItemHelper(favoriteItems, itemToRemove);
    return ({
        type: FAVORITE_ACTIONS_TYPES.SET_FAVORITE_ITEMS,
        payload: newFavoriteItems,
    })
}