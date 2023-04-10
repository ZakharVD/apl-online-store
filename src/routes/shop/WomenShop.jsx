import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

// map over product and return repeated elements !!!
const WomenShop = () => {
  const { productsInfo } = useContext(ProductContext);
  const womenProducts = productsInfo.women;
  return (
      <Routes>
        <Route index element={<CategoriesPreview products={womenProducts} />} />
        <Route path=":category" element={<Category productsToDisplay={womenProducts} />} />
      </Routes>
  );
};

export default WomenShop;