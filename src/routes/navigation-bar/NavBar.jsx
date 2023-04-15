import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";
import { CartContext } from "../../context/CartContext";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { ReactComponent as AccountIcon } from "../../assets/my-account.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/favorite.svg";

const NavBar = () => {
  // creating state to keep track whether the account icon is toggled
  const [isOpen, setIsOpen] = useState(false);
  // destructure current user info to change 'sign in' to 'sign out' based on the value
  const { currentUser } = useContext(UserContext);
  // destructuring the isCartOpen to determine whenter to show the dropdown with cart items
  const { isCartOpen } = useContext(CartContext);
  // function toggle account icon
  const toggleAcc = () => {
    setIsOpen((prev) => !prev);
  };
  // handler function to sign out user when the button is clicked
  const onSignOutHandler = () => {
    signOutUser();
    toggleAcc();
  };
  // handler function to navigate user to favorite page ONLY if signed in, IF NOT alert user AND redirect to sign in page
  const navigate = useNavigate();
  const favoriteHandler = () => {
    if (!currentUser) {
      alert("You must be signed in to view favourites");
      navigate("sign-in");
    } else {
      navigate("/favorite");
    }
  };

  return (
    <>
      <nav className="bg-mainbg">
        <div className="flex flex-row justify-between items-center mx-auto p-4">
          <Link to="/" className="font-logo text-[1.5rem] text-black">
            APL
          </Link>
          <div className="flex flex-row justify-between items-center w-[115px]">
            <FavoriteIcon
              onClick={favoriteHandler}
              title="Favorites"
              className="w-[23px] h-[23px] mt-[6px] fill-black cursor-pointer"
            />
            <div className="relative">
              <AccountIcon
                onClick={toggleAcc}
                className="w-[30px] h-[30px] mt-[12px] fill-black cursor-pointer"
                title="Account"
              ></AccountIcon>
              {isOpen && (
                <div className="absolute top-10 right-0 flex flex-col items-start w-[95px] bg-white rounded-lg">
                  {currentUser ? (
                    <span
                      className="py-2 pl-3 pr-4 cursor-pointer"
                      onClick={onSignOutHandler}
                    >
                      Sign Out
                    </span>
                  ) : (
                    <Link
                      className="py-2 pl-3 pr-4"
                      to="sign-in"
                      onClick={toggleAcc}
                    >
                      Sign In
                    </Link>
                  )}
                </div>
              )}
            </div>
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
