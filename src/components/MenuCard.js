const MenuCard = (props) => {
  const { data } = props;

  return (
    <div className="bg-gray-900 text-white w-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border border-gray-800">

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

          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl shadow-md transition duration-300 font-semibold">
            Add
          </button>

        </div>

      </div>
    </div>
  );
};

export default MenuCard;