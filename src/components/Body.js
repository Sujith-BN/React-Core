import Card from "./RestroCard"
//normal js variable
import restaurantList from "../utils/mockdata"
import { useState ,useEffect } from "react"

import Shimmer from "./Shimmer"
import { EAT_SURE_HOTELS } from "../utils/constants"
import { Link } from "react-router-dom"

    export const Body = ()=>{

        //local state variable
        const [resList,setResList] = useState([])
        const [searchText,setSearchText] = useState("") 
        const [filteredRes ,setFilteredRes] = useState([])
     
        
        useEffect(()=>{
            console.log("use effect called from body")
            fetchData()       
        },[]) 

        // const fetchData = async ()=>{
        //     const data = await fetch(SWIGGY_API)
        //     const json = await data.json()
        //     const resData = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        //     setResList(resData)
        //     setFilteredRes(resData)
        // }

        const fetchData = async()=>{

            const data = await fetch(EAT_SURE_HOTELS)
            const json = await data.json()
            const resData = json?.data?.data
            setResList(resData)
            setFilteredRes(resData)
            console.log(resData)
 
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
                        const filteredRes =resList.filter((res)=>res.brand_name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRes(filteredRes)
                     }}>Search</button>
                </div>

                <div className="filter">
                    <button className="filter-btn" onClick={()=>{

                        // const filtered = resList.filter((res)=>res.info.avgRating>4.5)
                        // setResList(filtered)
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="res-container">
                    {/* Restro cards */}
                    {
                    filteredRes.map((restrau,index)=>{
                        return <Link key={index}
                        to={`/${restrau.brand_id}/${restrau.store_id}/${restrau.client_source_id}`}
                        
                        ><Card  d= {restrau}/></Link>
                    })
                    }                     
                </div>
            </div>
    )
}