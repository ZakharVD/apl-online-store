// External imports
import { useSelector, useDispatch } from "react-redux";
// Redux imports
import { clearItemFromCart } from "../../store/cart/cart.action";
import { addItemsToFavorite } from "../../store/favorite/favorite.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectFavoriteItems } from "../../store/favorite/favorite.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
// Other imports
import { ReactComponent as FavoriteIcon } from "../../assets/favorite.svg";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  // getting values from redux
  const cartItems = useSelector(selectCartItems);
  const favoriteItems = useSelector(selectFavoriteItems);
  const currentUser = useSelector(selectCurrentUser);
  // initialize dispatch
  const dispatch = useDispatch();
  
  // handler function to move item from cart to favorite
  const moveCartItemToFavoriteHandler = () => {
    if (!currentUser) {
      alert('you must sign in first to save products')
    } else {
      dispatch(addItemsToFavorite(favoriteItems, cartItem))
    }
  };
  
  // handler function to remove item from cart 
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  
  return (
    <div className="w-[100%] flex h-[80px]">
      <div className="w-[30%]">
        <img className="h-[100%] w-auto cover bg-center" src={imageUrl} alt="" />
      </div>
      <div className="w-[55%] flex flex-col items-start justify-center p-[5px]">
        <span className="font-bold">{name}</span>
        <span>{quantity} x ${price}</span>
      </div>
      <div className="w-[15%] flex justify-center items-center">
        <FavoriteIcon onClick={moveCartItemToFavoriteHandler} className="w-[20px] h-[20px] fill-black cursor-pointer mr-[8px] mt-[3px]"></FavoriteIcon>
        <span onClick={clearItemHandler} className="text-2xl cursor-pointer">&#10005;</span>
      </div>
    </div>
  );
};

export default CartItem;
