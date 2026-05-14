import React ,{lazy,Suspense, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import {Body} from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact" 
import Error from "./components/Error"
import RestroMenu from "./components/RestroMenu"
import "./index.css";
import RestroCategory from "./components/RestroCategory"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"


//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading
//lazy comes from react 

const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () =>{

    const [user, setUser] = useState(null)
    //fake api call


    useEffect(()=>{

        const user ={
            userName : "Pengs",
        }
        setUser(user.userName)

    },[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: user, setUser }}>
            <div className="bg-gray-900  min-h-screen text-white">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
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
                path :"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                </Suspense>
            }
            ,
            {  
                path:"/:brandId/:storeId/:sourceId",
                element:<RestroMenu/>

            }
             ,
            {  
                path:"/category",
                element:<RestroCategory/>
            }  ,
            {  
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    }
   
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/> )
