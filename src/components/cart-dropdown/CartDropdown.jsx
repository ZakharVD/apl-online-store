import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// import { UserContext } from "../../context/UserContext";
// import { AlertContext } from "../../context/AlertContext";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/CartItem";
// import Alert from "../alert/Alert";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  // const { currentUser } = useContext(UserContext);
  // const { configAlert, setMessage } = useContext(AlertContext);
  // toggle cart window
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  //ALERT CONFIG
  // determine path
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    if (cartItems.length === 0) {
      alert('add item to cart')
    // } else if (!currentUser) {
    //   navigate("sign-in");
    } else {
      navigate("/checkout");
    }
    toggleIsCartOpen();
  };
  return (
      <div className="absolute w-[100%] sm:w-[340px] h-[50%] flex flex-col justify-between p-[10px] bg-white top-[72px] right-0 z-50 sm:rounded-lg">
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
