import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoriesPreview from "../../components/categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { selectProductsInfo } from "../../store/products/products.selector";

// map over product and return repeated elements !!!
const WomenShop = () => {
  const productsInfo = useSelector(selectProductsInfo)
  const womenProducts = productsInfo.women;
  return (
      <Routes>
        <Route index element={<CategoriesPreview products={womenProducts} />} />
        <Route path=":category" element={<Category productsToDisplay={womenProducts} />} />
      </Routes>
  );
};

export default WomenShop;