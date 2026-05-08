import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import {Body} from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact" 
import Error from "./components/Error"

import RestroMenu from "./components/RestroMenu"


const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
 
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path :"/about",
                element:<About/>
            },
            {
                path:"/home",
                element:<Body/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path :"/contact",
                element:<Contact/>
                    
            }
            ,
            {  
                path:"/:brandId/:storeId/:sourceId",
                element:<RestroMenu/>

            }
        ],
        errorElement:<Error/>
    }
   
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/> )
