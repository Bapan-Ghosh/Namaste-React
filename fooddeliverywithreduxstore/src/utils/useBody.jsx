import { useEffect, useState } from "react";
import { BODY_API } from "./constants"

const useBody = ()=>{
    const [restList, setResList] = useState();

    useEffect(()=>{
          fetch();
    },[])

    const fetch = async () =>{
        const data = await fetch(BODY_API);
          const json = await data.json();
          console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          console.log(json);  
          setResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);       
    } 

    return restList
}

export default useBody;