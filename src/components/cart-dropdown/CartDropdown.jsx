import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/CartItem";
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen)

  // handler function to to toggle cart dropdown on click by setting the value by its opposite 
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  // handler function to redirect to chackout page ONLY if the user added at least one item to cart, IF NOT alert user
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    if (cartItems.length === 0) {
      alert('add item to cart')
    } else {
      navigate("/checkout");
    }
    toggleIsCartOpen();
  };
  
  return (
      <div className="absolute w-[100%] sm:w-[340px] h-[50%] flex flex-col justify-between p-[10px] bg-lightgrey top-[72px] right-0 z-50 sm:rounded-lg">
        <div className="h-[82%] flex flex-col overflow-scroll">
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <span className="text-center font-medium text-lg">
              Your cart is empty
            </span>
          )}
        </div>
        <button
          className="bg-black text-white rounded-xl p-3"
          onClick={goToCheckoutHandler}
        >
          Checkout
        </button>
      </div>
  );
};

export default CartDropdown;
