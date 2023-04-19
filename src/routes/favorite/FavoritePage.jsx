// External imports
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Redux imports
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectFavoriteItems } from "../../store/favorite/favorite.selector";
// Other imports
import FavoriteItem from "../../components/favorite-item/FavoriteItem";

const FavoritePage = () => {
  // Getting state values from Redux
  const favoriteItems = useSelector(selectFavoriteItems);
  const currentUser = useSelector(selectCurrentUser);
  
  // initialize redirect
  const redirect = useNavigate();

  // using useEffect hook to disallow user to navigate to favorite page if not signed in
  useEffect(() => {
    if (!currentUser) {
      redirect("/");
    }
  }, [currentUser, redirect]);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mt-[10px] border-b-2 pb-[7px]">
        Favorites
      </h2>
      {favoriteItems.length ? (
        <div className="w-[95%] lg:w-[780px] m-auto my-[7px] flex flex-row justify-center flex-wrap">
          {favoriteItems.map((favItem) => (
            <FavoriteItem key={favItem.title} product={favItem} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col text-center mt-[40px] mx-[7px]">
          <span className="text-[1.2rem]">
            Looks like you don't have any saved items...
          </span>
          <Link to="/" className="font-medium underline text-[1.2rem]">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
