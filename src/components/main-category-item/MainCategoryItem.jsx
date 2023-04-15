import { useNavigate } from "react-router-dom";

const MainCategoryItem = ({ category }) => {
  const { title, route } = category;
  const navigate = useNavigate();
  // handler function to dinamically detemite the route for mens or womens catalog
  const onNavigateHandler = () => navigate(route);

  return (
    <div
      className="bg-lightgrey p-6 cursor-pointer flex justify-center items-center h-[50%] m-[8px] rounded-lg"
      onClick={onNavigateHandler}
    >
        <h2 className="text-4xl lg:text-4xl text-center font-bold uppercase border-2 rounded-lg p-[20px] text-black">{title}</h2>
    </div>
  );
};

export default MainCategoryItem;
