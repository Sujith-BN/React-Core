import Card from "./RestroCard"
//normal js variable
import restaurantList from "../utils/mockdata"
import { useState } from "react"

    export const Body = ()=>{

        //local state variable
        const [resList,setResList] = useState(restaurantList)
      
        return (
            <div className="body">
                <div className="filter">
                    <button className="filter-btn" onClick={()=>{

                        const filtered = resList.filter((res)=>res.rating>4.5)
                        console.log(filtered)
                        setResList(filtered)
                        console.log(restaurantList)
                            
    
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="res-container">
                    {/* Restro cards */}
                    {
                    resList.map((restrau)=>{
                        return <Card key={restrau.id} d= {restrau}/>
                    })
                    }                     
                </div>
            </div>
    )
}