import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const Header =()=>{
    const [btnName,setBtnName] = useState("Login")
    return (
        <div className="header">
            <div className='logo-container'>
                <img src={LOGO_URL} alt="deleted" />
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About us</Link></li>
                    <li><Link to={"/contact"}>Conatct us</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>{
                          btnName === "Login" ? setBtnName("Log out") : setBtnName("Login")
                    }} 
                    className="login-btn">
                      {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;