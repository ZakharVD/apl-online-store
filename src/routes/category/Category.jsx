import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/ProductCard";

const Category = ({ productsToDisplay }) => {
  const { category } = useParams();

  // let finalProducts;
  // productsToDisplay.map((prod) => {
  //   if (prod.title === category) {
  //     finalProducts = prod;
  //   }
  //   return finalProducts;
  // });
  // console.log(finalProducts.items);

  let finalProducts;
  productsToDisplay.map((prod) => {
    if (prod.title === category) {
      finalProducts = prod; 
    }
    return finalProducts;
  });
  console.log("final prod-----", finalProducts);

  // const [pd, setPd] = useState(finalProducts);

  // useEffect(() => {
  //   setPd(test());
  // }, [category, productsToDisplay]);

  // const products = productsToDisplay[category]; 
  // console.log('final', products)
  // // const [products, setProducts] = useState(productsToDisplay[category]);

  // // useEffect(() => {
  // //   setProducts(productsToDisplay[category]);
  // // }, [category, productsToDisplay]);

  // console.log(products)

  return (
    <div className="flex flex-row justify-center flex-wrap max-w-[700px] m-auto">
      {finalProducts &&
        finalProducts.items.map((product) => (
          <ProductCard key={finalProducts.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
