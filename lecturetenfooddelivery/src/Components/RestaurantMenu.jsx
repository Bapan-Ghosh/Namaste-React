// import { useState, useEffect } from "react";
import Shimmer from "./Shimmerui";
import { useParams } from "react-router";
// import { MENU_API } from "../utils/Constants";
import useRestaurantMenu from '../utils/useRestrauntMenu';
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=>{
    // const [resMenu, setResMenu] = useState(null);
    const {resId} =  useParams();

    // This is called custome hooks
    const resMenu =  useRestaurantMenu(resId);
    // console.log(resId)

    // useEffect(()=>{
    //       fetchMenu();
    // },[])
   
    // const fetchMenu = async ()=>{
    //       const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7247556&lng=88.4789351&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    //       const json = await     ;
    //       console.log(json);
    //       setResMenu(json);
    // }; 
    /* earlier we were fetching data from here but after that we have created 
       custome hook to seperate it  
    */

    if(resMenu === null) return <Shimmer/>
    const {name,costForTwoMessage,cuisines,avgRatingString,totalRatingsString} = resMenu?.data?.cards[0]?.card?.card?.info; 
    
    const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    const categories = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
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
                          <RestaurantCategory key={index} data={category?.card?.card}/>
                       )
                })}
            </div>
            {/* <br />
            <h2 style={{textAlign:"center",textDecoration:"underLine"}}>Menu</h2>
            <br />
            <hr /> */}
            {/* <ul className="ul">
                {itemCards.map((item,index)=>{
                    return(
                        <div key={item.card.info.id}>
                          <li >{item.card.info.category}</li>
                          <li>{item.card.info.name}</li>
                          <li>₹{item.card.info.price/100}</li>
                          <br />
                          <li>{item.card.info.description}</li>
                          <hr />
                        </div>
                    )
                })}
                
            </ul>  */}
       </div>
    )
}

export default RestaurantMenu;

