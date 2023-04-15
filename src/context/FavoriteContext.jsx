import { createContext, useState } from "react";

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

export const FavoriteContext = createContext({
    favoriteItems: [],
    setFavoriteItems: () => {},
    addFavoriteItems: () => {},
    removeFromFavorite: () => {}
})

export const FavoriteProvider = ({children}) => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const addItemsToFavorite = (itemToAdd) => {
        setFavoriteItems(addToFavoriteHelper(favoriteItems, itemToAdd))
    }

    const removeItemFromFavorite = (itemToRemove) => {
        setFavoriteItems(removeItemHelper(favoriteItems, itemToRemove))
    }

    const value = {favoriteItems, addItemsToFavorite, removeItemFromFavorite}
    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}