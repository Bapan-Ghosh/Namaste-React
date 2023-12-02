import { CDN_URL } from "../utils/Constants";

/*
   { resData: { cloudinaryImageId, name, avgRating, costForTwo, areaName,cuisines } }
   This is the one way of destructuring of object
*/

const RestaurantCard = (props) => {
  
  const {resData} = props;
 
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    areaName,
  } = resData;   
  
  return (
      <div className='flex rounded-lg p-1 flex-col w-60 h-[350px] m-3 shadow-lg bg-gray-200 hover:border'>
        <img className='h-44 rounded-lg' src={CDN_URL+cloudinaryImageId} alt="food" />
        <h3 className="font-bold">{name}</h3>
        <h3 className="pr-1 ">{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>{areaName}</h3>
      </div>
    );
  };


  //this is a higher order function
 export const withPromotedLevel =(RestaurantCard)=>{
     return (props)=>{
       return (
         <>
            <label className="absolute rounded-md ml-2 mt-3 bg-black text-yellow-100 p-1">Top Rated</label>
            <RestaurantCard {...props}/>
         </>
       )
     }
  }

  export default RestaurantCard;