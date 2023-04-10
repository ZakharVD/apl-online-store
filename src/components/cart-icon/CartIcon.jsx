import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => {setIsCartOpen(!isCartOpen)}


    return (
        <div onClick={toggleIsCartOpen} className='relative flex justify-center items-center cursor-pointer'>
            <ShoppingIcon className='w-[30px] h-[30px]'/>
            <span className='absolute mt-[6px]'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;