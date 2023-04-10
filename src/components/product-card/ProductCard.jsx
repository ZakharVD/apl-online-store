import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { FavoriteContext } from "../../context/FavoriteContext";
import { ReactComponent as FavoriteIcon } from '../../assets/favorite.svg'
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const { addItemsToFavorite } = useContext(FavoriteContext);
  const { currentUser } = useContext(UserContext);
  
  const addToCartHandler = () => addItemToCart(product);
  const addToFavoriteHandler = () => {
    if (!currentUser) {
      alert('You must sign in first to save products')
    } else {
      addItemsToFavorite(product)
    }
  };

  return (
    <div className="bg-lightgrey w-[150px] md:w-[220px] h-[250px] md:h-[330px] flex flex-col items-center m-[5px] rounded relative">
      <FavoriteIcon onClick={addToFavoriteHandler} title="Add to favorite" className='w-[20px] h-[20px] cursor-pointer absolute top-[10px] right-[10px] z-10 hover:fill-red'/>
      <div className="w-[100%] h-[150px] md:h-[215px]">
        <img
          src={imageUrl}
          alt=""
          className="w-[100%] h-[100%] cover bg-center"
        />
      </div>
      <div className="h-[90px] md:h-[105px] min-h-[90px] w-[140px] md:w-[210px] m-[5px] flex flex-col justify-between">
        <div className="flex justify-between items-center my-[5px]">
            <span className="text-[0.8rem] md:text-[1rem] w-[80%] font-medium">{name}</span>
            <span className="text-[0.8rem] md:text-[1rem] w-[20%] text-center font-medium">${price}</span>
        </div>
        <button onClick={addToCartHandler} className="bg-black text-white rounded-lg p-[5px] w-[95%] mx-auto opacity-0.7 my-[5px] text-sm md:text-[1.1rem] font-medium">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
