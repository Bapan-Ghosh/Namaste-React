import { useEffect, useState } from "react"

const useRestrauntMenu = (resId)=>{
    // fetch data
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7247556&lng=88.4789351&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
         const json = await data.json();
         console.log("from useRestaurantMenu");
         console.log(json);
         setResInfo(json);
    } 

    return resInfo
}

export default useRestrauntMenu;