import { CDN_URL } from "../utils/constants"
const RestroCard = (props)=>{
    const {d} = props
    
    
    return (
        <div className="res-card" >
          
             <img
                src={`${CDN_URL}${d.image}/400/250`}
                alt={d.name}
            />
            <h1>{d.name}</h1>
            <h2>{d.cuisine}</h2>
            <h3>{d.rating}</h3>
            <h3>{d.deliveryTime}</h3>
            <h3>{d.location}</h3>
            <h3>{d.price}</h3>
         
        </div>
    )
}

export default RestroCard