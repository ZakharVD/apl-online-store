import { useNavigate } from "react-router-dom";

const MainCategoryItem = ({ category }) => {
  const { title, route, imageUrl } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <div
      className="bg-black p-6 cursor-pointer flex flex-col justify-center items-center border h-[50%]"
      onClick={onNavigateHandler}
      style={{ backgroundImage: `url(${imageUrl})`, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.85' }}
    >
        <h2 className="text-3xl lg:text-4xl text-center mb-8 font-bold text-white">{title}</h2>
        <p className="text-center border-2 border-white p-3 text-white text-md lg:text-lg">SHOP NOW</p>
    </div>
  );
};

export default MainCategoryItem;
