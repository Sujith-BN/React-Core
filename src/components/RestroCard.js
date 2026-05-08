import { SWIGGY_IMG_URL } from "../utils/constants"
const RestroCard = (props)=>{
    const {d} = props
    
    
    return (
        <div className="res-card" >
          
             <img
                src={d.banner_image_es} 
            />
            <h1>{d.brand_name}</h1>
            <h2>{d.description}</h2>
            <h3>use {d.discount_info.coupon_code} <span><h5 style={{color:"white"}}>{d.discount_info.coupon_short_description}</h5></span></h3>
            <h3>Minimum order amout : {d.discount_info.minimum_order_amount}</h3>
            <h3>Maximum discount limit value : {d.discount_info.max_discount_limit_value}</h3>
            <h3 style={{color:"white"}}>{d.discount_info.coupon_description}</h3>
            <h3></h3>
         
        </div>
    )
}

export default RestroCard