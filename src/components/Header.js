import { LOGO_URL } from "../utils/constants"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

const Header = ()=>{
    // never use useState hook outside the component
    //never create any useState hooks inside any if else block or any loops or any functions 
    //they are meant to created inside the component on top level
    const [loginBtn , setLoginBtn] = useState("Login")
    //if no dependency array , useEffect called on every component renders  
    //if we use empty dependecy array, it renders intially and even if the components render,
    // but useEffect wont be called
    //if dependency array is [loginBtn], then useEffect will be called every time when we click loginbBtn  
    useEffect(()=>{
        console.log("Use effect called from header")
    },[loginBtn])
    return (
        <div className="header">
            <div className="logo">
                <Link to="/"><img src={LOGO_URL}
                /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
        
                    <button className="login" onClick={()=>{
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