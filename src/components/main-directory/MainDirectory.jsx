import MainCategoryItem from "../main-category-item/MainCategoryItem";

const MainDirectory = ({ categories }) => {
  return (
      <div className="flex flex-col justify-between w-[100%] xl:w-[75%] xl:m-auto h-[70vh] max-h-[600px] m-auto">
        {categories.map((category) => (
          <MainCategoryItem
            key={category.id}
            category={category}
            route={category.route}
          />
        ))}
      </div>
  );
};

export default MainDirectory;
