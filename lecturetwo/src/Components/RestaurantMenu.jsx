import { useState, useEffect } from "react";
import Shimmer from "./Shimmerui";
import { useParams } from "react-router";

const RestaurantMenu = ()=>{
    const [resMenu, setResMenu] = useState(null);
    const {resId} =  useParams(); 

    useEffect(()=>{
          fetchMenu();
    },[])
   
    const fetchMenu = async ()=>{
          const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7247556&lng=88.4789351&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
          const json = await data.json();
          console.log(json);
          setResMenu(json);
          const l = ""
    };

    if(resMenu === null) return <Shimmer/>
    const {name,costForTwoMessage,cuisines,avgRatingString,totalRatingsString} = resMenu?.data?.cards[0]?.card?.card?.info; 
    
    const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log(itemCards)
    return (
       <div className="menu">
            <div className="flex">
              <div className="left">
                <h1>{name}</h1>
                <h4>{cuisines.join(",")} - {costForTwoMessage}</h4>
              </div>  
              <div className="right">  
                 <h3>⭐{avgRatingString}</h3>
                 <h3>{totalRatingsString}</h3>
             </div>  
            </div>
            <br />
            <h2 style={{textAlign:"center",textDecoration:"underLine"}}>Menu</h2>
            <br />
            <hr />
            <ul className="ul">
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
                
            </ul> 
       </div>
    )
}

export default RestaurantMenu;

