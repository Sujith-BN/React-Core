import { useEffect, useState } from "react";
import RestroCategoryCard from "./RestroCategoryCard";



const RestroCategory = () =>{

    const [clicked , setClicked] = useState(false)

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategoryData()
    },[])
    const getCategoryData = async()=>{
        const data = await fetch("https://www.eatsure.com/v1/api/get_all_products/brand_id/20/store_id/10229/source_id/13")
        const json = await data.json()
        const collections = json.data?.collections
        setCategories(collections)
    }

   return(
            <div className="w-6/12 mx-auto">
                 {
                    categories.map((category) => (
                        <div className="my-4  bg-gray-1000 shadow-2xl/20 shadow-gray-100 rounded-xl p-4 text-xl font-medium  " key={category.collection_id}>
                            <div className="flex justify-between items-center cursor-pointer" onClick={() =>
                                setClicked(clicked === category.collection_id ? null : category.collection_id)
                            }>
                                <h2>{category.collection_name}  ({category.products.length})</h2>
                                <h1>v</h1>
                            </div>

                            <div>
                                {
                                    clicked === category.collection_id &&
                                    category.products.map((prod) => (
                                        <RestroCategoryCard key={prod.product_id} data={prod}/>
                                    )
                                )
     
                                }

                            </div>
                           
                     </div>                      
                    ))
                }
             
            </div>
        )
}

export default RestroCategory;