import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/ProductCard";

const Category = ({ productsToDisplay }) => {
  const { category } = useParams();
  console.log("component rendered");

  let finalProducts;
  productsToDisplay.map((prod) => {
    if (prod.title === category) {
      finalProducts = prod;
    }
    return finalProducts;
  });
  const [searchField, setSearchField] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(finalProducts.items);

  const onChangeHandler = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const newFilteredProducts = finalProducts.items.filter((pd) =>
      pd.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredProducts(newFilteredProducts);
  }, [finalProducts, searchField]);

  return (
    <>
      <div className="w-[80%] max-w-[700px] m-auto mb-[15px]">
        <input
          type="search"
          onChange={onChangeHandler}
          placeholder="Search products"
          className="w-[100%] h-[35px] p-[7px] bg-lightgrey rounded-md"
        />
      </div>
      <div className="flex flex-row justify-center flex-wrap max-w-[700px] m-auto">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard key={finalProducts.id} product={product} />
          ))
        ) : (
          <span className="text-lg font-medium">No match</span>
        )}
      </div>
    </>
  );
};

export default Category;
