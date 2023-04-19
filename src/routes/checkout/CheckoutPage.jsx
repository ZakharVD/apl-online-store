import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="w-[95%] lg:w-[780px] m-auto my-[7px]">
      <div className="w-[100%] flex flex-row justify-between border-b font-medium">
        <div className="m-[2px] text-sm new:text-lg"><span>Product</span></div>
        <div className="m-[2px] text-sm new:text-lg"><span>Description</span></div>
        <div className="m-[2px] text-sm new:text-lg"><span>Quantity</span></div>
        <div className="m-[2px] text-sm new:text-lg"><span>Price</span></div>
        <div className="m-[2px] text-sm new:text-lg"><span>Remove</span></div>
      </div>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
        <div className="w-[100%] flex justify-end my-[8px]">
          <span className="font-semibold text-lg sm:text-xl lg:text-2xl border-t-2">Cart total: ${cartTotal}</span> 
        </div>
    </div>
  );
};

export default CheckoutPage;
