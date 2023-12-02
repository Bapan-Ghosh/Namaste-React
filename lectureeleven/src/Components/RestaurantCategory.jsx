import { useState } from "react";
import IteamList from "./IteamList";

const RestaurantCategory = ({data,showNotShow, setShowIndex}) =>{
      // const [showItems, setShowItems] = useState(true)
      const [toggleSymbol,setToggleSymbol] = useState("🔽")
      // console.log("From restcategory")
      // console.log(data);

      // This is a lifting state up concept
      //passing data from child to parents 
      
      const handleClick = ()=>{
        toggleSymbol === "🔽" ? setToggleSymbol("🔼") : setToggleSymbol("🔽")
       setShowIndex();
      }

      return (
        <div className="flex flex-col mt-3 bg-gray-50 ">
            {/* Header */}
            <div onClick={handleClick} className="bg-gray-50 cursor-pointer p-4 flex justify-between shadow-xl">
               <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
               <span>{toggleSymbol}</span>
            </div>
            {/* Accordion Body */}
             { showNotShow && <IteamList items={data.itemCards}/> }
        </div>
      )
}

export default RestaurantCategory;