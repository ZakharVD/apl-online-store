import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { clearItemFromCart } = useContext(CartContext);
  
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className="w-[100%] flex h-[80px]">
      <div className="w-[30%]">
        <img className="h-[100%] w-auto cover bg-center" src={imageUrl} alt="" />
      </div>
      <div className="w-[60%] flex flex-col items-start justify-center p-[5px]">
        <span className="font-bold">{name}</span>
        <span>{quantity} x ${price}</span>
      </div>
      <div className="w-[10%] flex justify-center items-center">
        <span onClick={clearItemHandler} className="text-lg">&#10005;</span>
      </div>
    </div>
  );
};

export default CartItem;
