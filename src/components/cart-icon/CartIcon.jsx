import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.reducer';

const CartIcon = () => {
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => {dispatch(setIsCartOpen(!isCartOpen))}


    return (
        <div onClick={toggleIsCartOpen} className='relative flex justify-center items-center cursor-pointer'>
            <ShoppingIcon className='w-[30px] h-[30px]'/>
            <span className='absolute mt-[6px]'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;