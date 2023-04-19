import { CART_ACTION_TYPES } from "./cart.types";

// HELPER FUNCTIONS

//helper function for addItemsToCart
const addToCartHelper = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((prod) => prod.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
}

//helper function to removeItemFromCart
const removeFromCartHelper = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((prod) => prod.id === productToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
}

//helper function to clear item from cart
const clearFromCartHelper = (cartItems, productToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
}

// ACTUAL ACTION FUNCTIONS

// function to toggle cart
export const setIsCartOpen = (boolean) => ({
    type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
    payload: boolean,
});

//function to add product to cart
export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addToCartHelper(cartItems, productToAdd);
    return ({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: newCartItems,
    })
}

// remove items from cart
export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeFromCartHelper(cartItems, productToRemove);
    return ({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: newCartItems,
    })
}

// clear item from cart
export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearFromCartHelper(cartItems, productToClear);
    return ({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: newCartItems,
    })
}