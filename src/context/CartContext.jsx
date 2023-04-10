import { createContext, useState, useEffect } from "react";

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



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
    
})

export const CartProvider = ({children}) => {
const [isCartOpen, setIsCartOpen] = useState(false);
const [cartItems, setCartItems] = useState([]);
const [cartCount, setCartCount] = useState(0);
const [cartTotal, setCartTotal] = useState(0)

//function to add product to cart
const addItemToCart = (productToAdd) => {
    setCartItems(addToCartHelper(cartItems, productToAdd));
}

// remove items from cart
const removeItemFromCart = (productToRemove) => {
    setCartItems(removeFromCartHelper(cartItems, productToRemove));
}

// clear item from cart
const clearItemFromCart = (productToClear) => {
    setCartItems(clearFromCartHelper(cartItems, productToClear))
}


// update the cartCount whenever the cartItems change
useEffect(() => {
    const newCartCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
    setCartCount(newCartCount);
}, [cartItems])

// calculate the cart total
useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0);
    setCartTotal(newCartTotal);
}, [cartItems])

const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}