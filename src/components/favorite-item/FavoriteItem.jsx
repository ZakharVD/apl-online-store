// External imports
import { useDispatch, useSelector } from "react-redux";
// Redux imports
import { addItemToCart } from "../../store/cart/cart.reducer";
import { removeItemFromFavorite } from "../../store/favorite/favorite.reducer";
// Other imports
import { ReactComponent as TrashCan} from "../../assets/trash-can.svg"

const FavoriteItem = ({ product }) => {
  const { name, imageUrl, price } = product;
  
  //initialize dispathc
  const dispatch = useDispatch();

  // handler function to remove item from favorites list
  const clearItemHandler = () => dispatch(removeItemFromFavorite(product));

  // handler function to move favorite item to cart and remove from favorites
  const addToCartHandler = () => {
    dispatch(addItemToCart(product));
    dispatch(removeItemFromFavorite(product));
  }
  
  return (
    <div className="bg-lightgrey w-[150px] md:w-[220px] h-[250px] md:h-[330px] flex flex-col items-center m-[5px] rounded relative">
      <TrashCan onClick={clearItemHandler} className="w-[27px] md:w-[32px] h-[27px] md:h-[32px] absolute top-[10px] right-[10px] fill-black bg-white rounded-[50%] p-[4px] opacity-80 cursor-pointer"/>
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
          <span className="text-[0.8rem] md:text-[1rem] w-[20%] text-center font-medium">
            ${price}
          </span>
        </div>
        <button
          onClick={addToCartHandler}
          className="bg-black text-white rounded-lg p-[4px] w-[95%] mx-auto opacity-0.7 my-[5px] text-sm md:text-[1.1rem] font-medium"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FavoriteItem;
