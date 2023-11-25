import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { ColorRing } from  'react-loader-spinner';
import Shimmer from "./Shimmerui";
import { Link } from "react-router-dom";

/* Whenever something updated in the useState function like anything updated 
   in setResList or setSearchText (state variables) everytime body component 
   re-render (meaans :--refresh the body component) but only updating that DOM
    part which is being updated*/

// mane react kono state variable change hole compare korte thake previous dom
// with current changed dom and if it noticed any change it updates only that
// part of the dome like , jodi ekta input field thake to tate jodi kichu 
// likhi amra to only oi input field ta update krbe baki ta na but render puro tai
// hobe

const Body = ()=>{
    const [restList, setResList] = useState([])
    const [searchText, setSearchText] = useState("");
    const [filterdRestaurant, setFilterdRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
          const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7247556&lng=88.4789351&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          console.log(json);  

          setResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);       
          setFilterdRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

   /* if(restList.length === 0){
        return (
            <div className="spinner-container">
             <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
            /> 
            <Shimmer/>
          </div>
        )
    } */ 

    return (restList.length === 0) ? (
      <Shimmer/> 
      ) :  (
       <div className="body">
           <div className="filter">
             <div className="search">
                <input type="text" onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}  className="search-box"/>
                <button onClick={()=>{
                    const filterRestaurants = restList.filter((res)=>{
                          return (
                            
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()) || res.info.cuisines.includes(searchText)
                          )
                    }); setFilterdRestaurant(filterRestaurants);  
                }}  
                className="search-btn">Search</button>
             </div>
             <button className="filter-btn" onClick={()=>{
                const filterRestaurants = restList.filter((res,index)=>{
                return res?.info?.avgRating >= 4.2
             });setFilterdRestaurant(filterRestaurants); }}>Top Rated Restaurant</button>
           </div>
           <div className="res-container">
               {filterdRestaurant.map((res,index)=>{
                   return (
                    <Link key={res?.info?.id} to={"/restaurants/"+res?.info?.id}> <RestaurantCard key={res?.info?.id} resData={res?.info}/></Link>
                   )
               })}
           </div>
       </div>
    )
}

export default Body;