import { useState} from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header =()=>{
    const [btnName,setBtnName] = useState("Login")
    //this is a custom hooks // bascially we are calling useOnlineStatus()
    // and getting the response and the end component is a js function nothing
    // else
    const useOnlineStatu = useOnlineStatus();

    // to access to the data from redux store
    //subscribing to the store using a selector
    const cartItems = useSelector((store) =>store.cart.items)

    return (
        <div className="flex h-16 justify-around w-full items-center shadow-lg bg-pink-50">
            <div>
                <img className='h-14 rounded-lg' src={LOGO_URL} alt="deleted" />
            </div>
            <div>
                <ul className="flex gap-4">
                    <li >online Status :{useOnlineStatu ? "🟢" :"🔴"}</li>
                    <li className="hover:text-blue-600"> <Link to={"/"}>Home</Link></li>
                    <li className="hover:text-blue-600"><Link to={"/about"}>About us</Link></li>
                    <li className="hover:text-blue-600"><Link to={"/contact"}>Conatct us</Link></li>
                    <li className="hover:text-blue-600"><Link to={"/grocery"}>Grocery</Link></li>
                    <li ><Link className=" flex" to={"/cart"}> 
                        <div className="text-4xl"><IoCartOutline/> </div>
                        {cartItems.length >0 ?<div className="relative right-6 text-xs rounded-[50%] bg-red-700 p-[8px] bottom-4 ">{cartItems.length}</div> : null }
                        </Link>
                    </li>
                    <button onClick={()=>{
                          btnName === "Login" ? setBtnName("Log out") : setBtnName("Login")
                    }} 
                    className="bg-blue-300 pt-1 pb-1 p-3 hover:bg-blue-600  rounded-md">
                      {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;