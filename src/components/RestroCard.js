import { SWIGGY_IMG_URL } from "../utils/constants"
const RestroCard = (props)=>{
    const {d} = props
    
    
    return (
        <div className="res-card" >
          
             <img
                src={SWIGGY_IMG_URL + d.info.cloudinaryImageId} alt={d.info.name}
            />
            <h1>{d.info.name}</h1>
            <h2>{d.info.cuisine}</h2>
            <h3>{d.info.avgRating}</h3>
            <h3>{d.info.sla.slaString}</h3>
            <h3>{d.info.locality}</h3>
            <h3>{d.info.costForTwo}</h3>
         
        </div>
    )
}

export default RestroCard