
import CategoryPreview from "../category-preview/CategoryPreview";

const CategoriesPreview = ({products}) => {
  return (
    <div className="h-[50vh]">
      {products &&
        products.map((product) => (
          <CategoryPreview key={product.title} title={product.title} />
        ))}
    </div>
  );
};

export default CategoriesPreview;
