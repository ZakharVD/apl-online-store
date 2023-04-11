import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ProductsProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { AlertProvider } from "./context/AlertContext";
import { FavoriteProvider } from "./context/FavoriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <UserProvider>
          <ProductsProvider>
            <FavoriteProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </FavoriteProvider>
          </ProductsProvider>
        </UserProvider>
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();