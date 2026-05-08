import { useEffect, useState } from "react"
import MenuCard from "./MenuCard"
import Shimmer from "./Shimmer"
import { EAT_SURE_MENU } from "../utils/constants"
import { useParams } from "react-router-dom"


const RestroMenu = ()=>{

    const [menuData , setMenuData ] = useState([])
    
    const { brandId, storeId , sourceId } = useParams()
 useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async()=>{
        const data = await fetch(`https://www.eatsure.com/v1/api/get_all_products/brand_id/${brandId}/store_id/${storeId}/source_id/${sourceId}`)

        const json = await data.json()
        const products = json?.data?.collections.flatMap((collection)=>{
            return collection.products
        })
        
        setMenuData(products)

    }
    return menuData.length==0 ?<Shimmer/>: (
        <div className="menu">
            
            {
            menuData.map((prod,index)=>{
                return <MenuCard key={index} data={prod}/>
            })
            }       
        </div>
    )
}

export default RestroMenu