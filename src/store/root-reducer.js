import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { productsReducer } from "./products/products.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { favoriteReducer } from "./favorite/favorite.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
})