import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FavoriteContext } from "../../context/FavoriteContext";
import { ReactComponent as FavoriteIcon } from "../../assets/favorite.svg";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { clearItemFromCart } = useContext(CartContext);
  const { addItemsToFavorite } = useContext(FavoriteContext);
  const moveCartItemToFavoriteHandler = () => addItemsToFavorite(cartItem)
  
  // handler function to remove item from cart 
  const clearItemHandler = () => clearItemFromCart(cartItem);
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
