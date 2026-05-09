import MenuCard from "./MenuCard"
import Shimmer from "./Shimmer"
import { EAT_SURE_MENU } from "../utils/constants"
import { useParams } from "react-router-dom"
import useRestroMenu from "../Hooks/useRestroMenu"
import useOnlineStatus from "../Hooks/useOnlineStatus"


const RestroMenu = ()=>{

    const { brandId, storeId , sourceId } = useParams()
    const menuData = useRestroMenu(brandId, storeId , sourceId)
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
    
    return menuData.length==0 ?<Shimmer/>: (
        <div className="flex flex-wrap gap-6 justify-center">
            
            {
            menuData.map((prod,index)=>{
                return <MenuCard key={index} data={prod}/>
            })
            }       
        </div>
    )
}

export default RestroMenu