import { createSlice } from "@reduxjs/toolkit";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

// HELPER FUNCTIONS

//helper function for addItemsToCart
const addToCartHelper = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (prod) => prod.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//helper function to removeItemFromCart
const removeFromCartHelper = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (prod) => prod.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

//helper function to clear item from cart
const clearFromCartHelper = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addToCartHelper(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeFromCartHelper(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = clearFromCartHelper(state.cartItems, action.payload);
    },
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
