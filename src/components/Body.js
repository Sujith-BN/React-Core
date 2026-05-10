import Card from "./RestroCard"
//normal js variable
import restaurantList from "../utils/mockdata"
import { useState ,useEffect } from "react"
import Shimmer from "./Shimmer"
import { EAT_SURE_HOTELS } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Hooks/useOnlineStatus"
import RestroCard, { PromoCard } from "./RestroCard"

export const Body = ()=>{

    //local state variable
    const [resList,setResList] = useState([])
    const [searchText,setSearchText] = useState("") 
    const [filteredRes ,setFilteredRes] = useState([])

    const NewPromoCard = PromoCard(RestroCard)
    
    
    useEffect(()=>{
        console.log("use effect called from body")
        fetchData()       
    },[]) 

    const fetchData = async()=>{
        const data = await fetch(EAT_SURE_HOTELS)
        const json = await data.json()
        const resData = json?.data?.data
        setResList(resData)
        setFilteredRes(resData)
        console.log(resData)

    }

    const onlineStatus = useOnlineStatus()

    if(onlineStatus === false){
        return (
             <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">

                <div className="bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl p-8 text-center border border-gray-800">

                    <div className="flex justify-center mb-5">
                    <div className="bg-red-500/20 p-5 rounded-full">
                        <i className="ti ti-wifi-off text-5xl text-red-400"></i>
                    </div>
                    </div>

                    <h1 className="text-3xl font-bold mb-3">
                    You're Offline
                    </h1>

                    <p className="text-gray-300 mb-6">
                    Looks like you lost your connection.
                    Check your network and try again.
                    </p>

                    <button
                    className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
                    onClick={() => window.location.reload()}
                    >
                    Try Again
                    </button>

                    <div className="border-t border-gray-700 my-6"></div>

                    <div className="space-y-4 text-left">

                    <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-xl">
                        <i className="ti ti-router text-xl text-orange-400"></i>
                        <span className="text-gray-300 text-sm">
                        Check if your Wi-Fi or mobile data is turned on
                        </span>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-xl">
                        <i className="ti ti-refresh text-xl text-orange-400"></i>
                        <span className="text-gray-300 text-sm">
                        Try turning airplane mode on and off
                        </span>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-xl">
                        <i className="ti ti-signal-3g text-xl text-orange-400"></i>
                        <span className="text-gray-300 text-sm">
                        Move closer to your router for a better signal
                        </span>
                    </div>

                    </div>

                </div>

                </div>
        )
    }

    //conditoinal rendering
    return resList.length === 0 ? <Shimmer/> : (
        <div className="body">
           <div className="max-w-md mx-auto my-6">
                <div className="relative">

                    <div className="absolute inset-y-0  flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    </div>

                    <input
                    type="text"
                    placeholder="Enter the restaurant name"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    className="block w-full p-3 ps-10 border border-gray-500 bg-gray-900 text-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <button
                    type="button"
                    className="absolute right-2 bottom-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg transition duration-300"
                    onClick={() => {
                        const filteredRes = resList.filter((res) =>
                        res.brand_name
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                        );

                        setFilteredRes(filteredRes);
                    }}
                    >
                    Search
                    </button>

                </div>
            </div>

            {/* <div className="filter">
                <button className="filter-btn" onClick={()=>{
                }}>Top Rated Restaurants</button>
            </div> */}
            <div className="flex flex-wrap gap-6 justify-center">
                {
                filteredRes.map((restrau,index)=>{
                    const sequenceNumber = restrau.sequence

                    return <Link key={index}
                    to={`/${restrau.brand_id}/${restrau.store_id}/${restrau.client_source_id}`}
                    
                    > {
                            sequenceNumber % 2 === 0
                            ? <NewPromoCard d={restrau} />
                            : <Card d={restrau} />
                        }
                        </Link>
                })
                }                     
            </div>
        </div>
)
}