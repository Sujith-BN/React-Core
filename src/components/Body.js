import Card from "./RestroCard"
//normal js variable
import restaurantList from "../utils/mockdata"
import { useState ,useEffect } from "react"

import Shimmer from "./Shimmer"
import { SWIGGY_API } from "../utils/constants"

    export const Body = ()=>{

        //local state variable
        const [resList,setResList] = useState([])
        const [searchText,setSearchText] = useState("") 
        const [filteredRes ,setFilteredRes] = useState([])
     

        useEffect(()=>{
            fetchData()       
        },[]) 

        const fetchData = async ()=>{
            const data = await fetch(SWIGGY_API)
            const json = await data.json()
            const resData = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            setResList(resData)
            setFilteredRes(resData)
        }
        //conditoinal rendering
        return resList.length === 0 ? <Shimmer/> : (
            <div className="body">
                <div className="search">
                    <input type="text" className="search-box"
                    placeholder="Enter the restraunt name" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="search-btn" onClick={()=>{
                        const filteredRes =resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRes(filteredRes)
                     }}>Search</button>
                </div>

                <div className="filter">
                    <button className="filter-btn" onClick={()=>{

                        const filtered = resList.filter((res)=>res.info.avgRating>4.5)
                        setResList(filtered)
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="res-container">
                    {/* Restro cards */}
                    {
                    filteredRes.map((restrau)=>{
                        return <Card key={restrau.info.id} d= {restrau}/>
                    })
                    }                     
                </div>
            </div>
    )
}