import { useEffect, useState } from "react"

const useRestroMenu = (brandId, storeId , sourceId) => {

    const [menuData , setMenuData ] = useState([])
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


    return menuData;
}

export default useRestroMenu