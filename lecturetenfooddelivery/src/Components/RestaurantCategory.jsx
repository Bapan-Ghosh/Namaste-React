import { useState } from "react";
import IteamList from "./IteamList";

const RestaurantCategory = ({data}) =>{
      const [showItems, setShowItems] = useState(true)
      const [toggleSymbol,setToggleSymbol] = useState("🔼")
      console.log("From restcategory")
      console.log(data);

      //higerorder function call 
      
      
      const handleClick = ()=>{
        showItems ? (setShowItems(false) || setToggleSymbol("🔽")) : (setShowItems(true) || setToggleSymbol("🔼"));
      }

      return (
        <div className="flex flex-col mt-3 bg-gray-50 ">
            {/* Header */}
            <div onClick={handleClick} className="bg-gray-50 cursor-pointer p-4 flex justify-between shadow-xl">
               <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
               <span>{toggleSymbol}</span>
            </div>
            {/* Accordion Body */}
             { showItems && <IteamList items={data.itemCards}/> }
        </div>
      )
}

export default RestaurantCategory;