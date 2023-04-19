import { useDispatch, useSelector } from "react-redux";
import { clearItemFromCart, removeItemFromCart, addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    // handler function to completerly remove item from cart
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    // handler function to increase the items count
    const incrementHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    // handler function to decrease the items count
    const decrementHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    
    return (
        <div className="w-[100%] flex items-center my-[7px] bg-lightgrey">
            <div className="w-[20%] new:w-[23%]">
                <img src={imageUrl} alt='' className="w-[100%] h-[100%]"/>
            </div>
            <span className="w-[27%] new:w-[23%] md:w-[20%] text-xs new:text-[0.9rem] lg:text-[1rem] text-center font-medium">{name}</span>
            <span className="flex w-[21%] new:2-[23%] justify-center ">
                <div className="mx-[3px] new:text-lg lg:text-xl bg-white rounded-[50%] px-[8px] cursor-pointer" onClick={decrementHandler}>&#10094;</div>
                <span className="mx-[3px] new:text-lg lg:text-xl">{quantity}</span>
                <div className="mx-[3px] new:text-lg lg:text-xl bg-white rounded-[50%] px-[8px] cursor-pointer" onClick={incrementHandler}>&#10095;</div>
            </span>
            <span className="w-[15%] new:w-[19%] md:w-[22%] text-center font-medium">${price}</span>
            <div className="w-[17%] new:w-[16%] md:w-[13%] text-right pr-[20px] sm:pr-[30px] lg:text-xl cursor-pointer" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;