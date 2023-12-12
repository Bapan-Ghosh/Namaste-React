import RestaurantCard,{withPromotedLevel} from "./RestaurantCard";
import { useEffect, useState } from "react";
// import { ColorRing } from  'react-loader-spinner';
import Shimmer from "./Shimmerui";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BODY_API } from "../utils/constants";
/* Whenever something updated in the useState function like anything updated 
   in setResList or setSearchText (state variables) everytime body component 
   re-render (meaans :--refresh the body component) but only update that DOM
   part which is being updated*/

// mane react kono state variable change hole compare korte thake previous dom
// with current changed dom and if it noticed any change it updates only that
// part of the dome like , jodi ekta input field thake to tate jodi kichu 
// likhi amra to only oi input field ta update krbe baki ta na but render puro
// tai hobe

const Body = ()=>{
    const [restList, setResList] = useState([])
    const [searchText, setSearchText] = useState("");
    const [filterdRestaurant, setFilterdRestaurant] = useState([]);

    const RestaurantCardPromoted = withPromotedLevel(RestaurantCard);
    // We are calling the withPromotedLevel function and it's returning
    // the fn which is inside the withPromotedLevel function 

    useEffect(()=>{
        fetchData();
    },[]) // [] =>means 1 bar e render hobe => empty array dependency

    const fetchData = async ()=>{
          const data = await fetch(BODY_API);
          const json = await data.json();
          console.log("1 :")
          console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          console.log("2 :")
          console.log(json);  

          setResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);       
          console.log("why?")
          console.log(restList);
          setFilterdRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    
        //custome hooks
        const onlineStatus = useOnlineStatus();

        if( onlineStatus === false) 
            return (
               <h1>
                Looks like you are offline !! Please check your internet connection
                </h1>
              )
              

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

    return (filterdRestaurant?.length === 0) ? 
      <Shimmer/> 
       :  (
       <div className="body">
           <div className="flex justify-between m-5 ml-9">
             <div className="search">
                <input type="text" className="border border-solid border-sky-500 p-1 hover:border-sky-500 rounded-md" onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}/>
                <button onClick={()=>{
                    const filterRestaurants = restList.filter((res)=>{
                          return (
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()) || res.info.cuisines.includes(searchText)
                          )
                    }); setFilterdRestaurant(filterRestaurants);  
                }}  
                className="bg-blue-300 pt-1 pb-1 p-3 ml-1 hover:bg-blue-600  rounded-md">Search</button>
             </div>
             <button className="bg-blue-300 pt-1 mr-4 pb-1 p-3 hover:bg-blue-600  rounded-md" onClick={()=>{
                const filterRestaurants = restList.filter((res,index)=>{
                return res?.info?.avgRating >= 4.2
             });setFilterdRestaurant(filterRestaurants); }}>Top Rated Restaurant</button>
           </div>
           {filterdRestaurant?.length >0 ? (
           <div className="flex flex-wrap  ml-6">
               {filterdRestaurant.map((res,index)=>{
                   return (
                    <Link key={res?.info?.id} 
                    to={"/restaurants/"+res?.info?.id}> 
                    {res?.info?.avgRating >=4.2 ? <RestaurantCardPromoted resData={res?.info}/> : <RestaurantCard resData={res?.info}/>}
                    
                    </Link>
                   )
               })}
           </div> ) :(<h1 className="text-center text-red-700">Restaurents are closed!</h1>)}
       </div>
    )
}

export default Body;