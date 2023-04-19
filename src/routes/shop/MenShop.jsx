import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoriesPreview from "../../components/categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { selectProductsInfo } from "../../store/products/products.selector";

// map over product and return repeated elements !!!
const MenShop = () => {
  const productsInfo = useSelector(selectProductsInfo);
  const menProducts = productsInfo.men;
  return (
      <Routes>
        <Route index element={<CategoriesPreview products={menProducts} />} />
        <Route path=":category" element={<Category productsToDisplay={menProducts} />} />
      </Routes>
  );
};

export default MenShop;
