import { LOGO_URL } from "../utils/constants"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Hooks/useOnlineStatus"



const Header = ()=>{
    const [loginBtn , setLoginBtn] = useState("Login")
    const status = useOnlineStatus()

 
    useEffect(()=>{
        console.log("Use effect called from header")
    },[loginBtn])


    return (
        <div className="flex justify-between items-center p-4 text-white">
            <div className="">
                <Link to="/"><img className="w-20 h-20 rounded-xl" src={LOGO_URL}
                /></Link>
            </div>
            <div className="nav-items">
                <ul className="flex gap-7 text-lg font-sm mr-4 "> 
                    <li className="hover:text-yellow-400 cursor-pointer transition duration-300"><Link to="/">Home</Link></li>
                    <li className="hover:text-yellow-400 cursor-pointer transition duration-300"><Link to="/about">About</Link></li>
                    <li className="hover:text-yellow-400 cursor-pointer transition duration-300"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-yellow-400 cursor-pointer transition duration-300"><Link to="/grocery">Grocery</Link></li>      
                    <li style={{color:status?"green":"red"}}>{status ? "Online" : "Offline"}</li>
        
                    <button  onClick={()=>{
                        loginBtn === "Login"
                            ?setLoginBtn("Logout")
                            :setLoginBtn("Login")
                    }}>{loginBtn}</button>
                </ul>
                

            </div>
        </div>
    )
}

export default Header