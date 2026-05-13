import { addToCart ,removeFromCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const MenuCard = (props) => {
  const { data } = props;
  const dispatch = useDispatch()

  const [count, setCount] = useState(0);
  const handleRemoveFromCart = () => {
      dispatch(removeFromCart())
      if (count > 0) {
        setCount(count - 1)
      }
    }

  const handleAddToCart = ()=>{

    dispatch(addToCart(data.product_name))
    setCount(count + 1);  

  }

  return (
    <div className="relative bg-gray-900 text-white w-75 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border border-gray-800">
      <img
        src={data.product_imageUrl}
        alt={data.product_name}
        className="w-full h-52 object-cover"
      />
      

      <div className="p-4">

        <h2 className="text-xl font-bold mb-2">
          {data.product_name}
        </h2>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {data.small_description}
        </p>

        <div className="flex items-center justify-between">

          <div>
            <span className="text-yellow-400 font-semibold">
              ⭐ {data.rating}
            </span>

            <h1 className="text-lg font-bold mt-1">
              ₹{data.price}
            </h1>
          </div>


        </div>

      </div>
      {
  count === 0 ? (

    <button
      className="absolute top-44 right-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-bold shadow-xl"
      onClick={handleAddToCart}
    >
      Add +
    </button>

  ) : (

    <div className="absolute top-44 right-4 flex items-center gap-4 bg-white text-black px-4 py-2 rounded-xl font-bold shadow-xl">

      <button onClick={handleRemoveFromCart}>
        -
      </button>

      <span>{count}</span>

      <button onClick={handleAddToCart}>
        +
      </button>

    </div>

  )
}
    </div>
  );
};

export default MenuCard;