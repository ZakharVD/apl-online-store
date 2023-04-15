import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/ProductCard";

const Category = ({ productsToDisplay }) => {
  const { category } = useParams();
  // console.log("component rendered");

  // mapping over received products and store only the one where title matches the URL Route param (its name is same as title)
  let finalProducts;
  productsToDisplay.map((prod) => {
    if (prod.title === category) {
      finalProducts = prod;
    }
    return finalProducts;
  });

  // creating a state for search bar
  const [searchField, setSearchField] = useState("");
  // creating a state to store the products based on search state (default is all products in this category)
  const [filteredProducts, setFilteredProducts] = useState(finalProducts.items);

  // function to upadate the search state whenever the search bar input changes, and lowercasing it to prevent case-sensative search
  const onChangeHandler = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  // using useEffect hook to re-render the right products ONLY when the catalog or search input value changes
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
          className="w-[100%] h-[35px] p-[7px] bg-lightgrey rounded-sm md:rounded-md"
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
