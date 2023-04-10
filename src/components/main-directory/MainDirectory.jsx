import MainCategoryItem from "../main-category-item/MainCategoryItem";

const MainDirectory = ({ categories }) => {
  return (
    <div className="h-[100vh]">
      <div className="bg-grey h-[30%] md:h-[35%] flex justify-center items-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-black uppercase w-[85%] md:w-[90%] m-auto font-heading">
            Find appeal that defines <span className="highlight">you</span>.
          </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-[100%] xl:w-[75%] xl:m-auto h-[55%] m-auto">
        {categories.map((category) => (
          <MainCategoryItem
            key={category.id}
            category={category}
            route={category.route}
          />
        ))}
      </div>
    </div>
  );
};

export default MainDirectory;
