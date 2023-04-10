import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

// map over product and return repeated elements !!!
const MenShop = () => {
  const { productsInfo } = useContext(ProductContext);
  const menProducts = productsInfo.men;
  return (
      <Routes>
        <Route index element={<CategoriesPreview products={menProducts} />} />
        <Route path=":category" element={<Category productsToDisplay={menProducts} />} />
      </Routes>
  );
};

export default MenShop;
