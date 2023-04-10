import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import NavBar from "./routes/navigation-bar/NavBar";
import SignIn from "./routes/sign-in-page/SignIn";
import SignUp from "./routes/sign-up/SignUp";
import MenShop from "./routes/shop/MenShop";
import WomenShop from "./routes/shop/WomenShop";
import CheckoutPage from "./routes/checkout/CheckoutPage";
import FavoritePage from "./routes/favorite/FavoritePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="men-shop/*" element={<MenShop/>}/>
        <Route path="women-shop/*" element={<WomenShop/>} />
        <Route path="checkout" element={<CheckoutPage/>}/>
        <Route path="favorite" element={<FavoritePage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
