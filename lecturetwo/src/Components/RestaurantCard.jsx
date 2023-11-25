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
      <div className='res-card'>
        <img className='res-logo' src={CDN_URL+cloudinaryImageId} alt="food" />
        <h3>{name}</h3>
        <h3 >{cuisines.join(",")}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>{areaName}</h3>
      </div>
    );
  };

  export default RestaurantCard;