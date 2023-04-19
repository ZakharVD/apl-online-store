import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
} from "./utils/firebase/firebase";
import Home from "./routes/home/home";
import NavBar from "./routes/navigation-bar/NavBar";
import SignIn from "./routes/sign-in-page/SignIn";
import SignUp from "./routes/sign-up/SignUp";
import MenShop from "./routes/shop/MenShop";
import WomenShop from "./routes/shop/WomenShop";
import CheckoutPage from "./routes/checkout/CheckoutPage";
import FavoritePage from "./routes/favorite/FavoritePage";
import MainDivision from "./main-division/main-division";
import { setCurrentUser } from "./store/user/user.action";
import { setProductsInfo } from "./store/products/products.action";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  // since this is the first component that mounts, it stores observer function to check if user is signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  // Fetching products data from firebase

  // useEffect(() => {
  //     addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  useEffect(() => {
    const getProductsInfo = async () => {
      const productInfo = await getCategoriesAndDocuments();
      console.log("data fetchend successfully");
      dispatch(setProductsInfo(productInfo));
    };
    getProductsInfo();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<MainDivision />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="men-shop/*" element={<MenShop />} />
        <Route path="women-shop/*" element={<WomenShop />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
}

export default App;
