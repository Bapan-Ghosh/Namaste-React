// import { useState, useEffect } from "react";
import Shimmer from "./Shimmerui";
import { useParams } from "react-router";
// import { MENU_API } from "../utils/Constants";
import useRestaurantMenu from '../utils/useRestrauntMenu';
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


//Now we want to control the resta category components br restamenu 
const RestaurantMenu = ()=>{
    const [showIndex,setShowIndex] = useState(null);
    // console.log(showIndex);
    const {resId} =  useParams();

    const toggle = (index)=>{
        showIndex == index ? setShowIndex(null) : setShowIndex(index)
    }
    // This is called custome hooks
    const resMenu =  useRestaurantMenu(resId);

    if(resMenu === null) return <Shimmer/>
    const {name,costForTwoMessage,cuisines,avgRatingString,totalRatingsString} = resMenu?.data?.cards[0]?.card?.card?.info; 
    
//    const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    const categories = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log("From categories mane [puro all category inside this there is another array]");
    console.log(categories)

    return (
       <div className="mt-5 w-[50%] m-auto">
            <div className="flex justify-between mb-2">
              <div className="left">
                <h1 className="font-bold">{name}</h1>
                <h4 className="font-light">{cuisines.join(",")} - {costForTwoMessage}</h4>
              </div>  
              <div className="shadow-inner border py-1">  
                 <h3>⭐{avgRatingString}</h3>
                 <hr />
                 <h3 className="font-light">{totalRatingsString}</h3>
             </div>
               
            </div>
            <hr />
            <div className="flex flex-col">
                {categories.map((category,index) =>{
                       return (
                          <RestaurantCategory key={index} 
                          data={category?.card?.card}
                          showNotShow = {index === showIndex ? true : false}
//This is a lifting state up concept, When we  we call ()=>toggle(index)
// function from the component ResCategory then we are basically setting 
// index to  showIndex and as it's state is changing the component will 
// rerender and when showIndex == index , then that accorian will expand
                          setShowIndex = {()=>toggle(index)}
                          />
                       )
                })}
            </div>
       </div>
    )
}

export default RestaurantMenu;

