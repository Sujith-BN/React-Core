
import { SWIGGY_IMG_URL } from "../utils/constants";


const RestroCard = (props) => {
  const { d } = props;

  return (
    <div className="relative bg-gray-900 text-white w-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer border border-gray-800">

      <img
        className="w-full h-52 object-cover"
        src={d.banner_image_es}
        alt="restaurant"
      />

      <div className="p-4">

        <h1 className="text-2xl font-bold mb-2">
          {d.brand_name}
        </h1>

        <h2 className="text-gray-300 text-sm mb-4 line-clamp-2">
          {d.description}
        </h2>

        <div className="bg-orange-500 text-white p-3 rounded-xl mb-3">
          <h3 className="font-semibold">
            Use {d.discount_info.coupon_code}
          </h3>

          <p className="text-sm">
            {d.discount_info.coupon_short_description}
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-300">

          <h3>
            Minimum Order: ₹
            {d.discount_info.minimum_order_amount}
          </h3>

          <h3>
            Max Discount: ₹
            {d.discount_info.max_discount_limit_value}
          </h3>

          <p className="text-gray-400 text-xs mt-3">
            {d.discount_info.coupon_description}
          </p>
        

        </div>
      

      </div>
    </div>
  );
};
export default RestroCard;


export const PromoCard = (RestroCard) => {

  return (props)=>{
    return (
      <div className="relative">
        <label className="
          absolute
          top-3
          left-3
          bg-yellow-400
          text-black
          px-4
          py-1
          rounded-full
          text-sm
          font-bold
          shadow-lg
          z-10
        ">
          Promoted
        </label>
        <RestroCard {...props}/>
      </div>
    )
  }
}