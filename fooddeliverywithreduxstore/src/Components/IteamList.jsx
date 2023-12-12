import React from 'react'
import NestedItemList from './NestedItemList';
import { withBestSellerLevel } from './NestedItemList';
import { useDispatch } from 'react-redux';

const IteamList = ({items}) => {
    console.log("From items ")
    console.log(items);
    console.log(items[0].card?.info?.isBestseller);
    
    //This is the higher order function
    const BestSellerLevel = withBestSellerLevel(NestedItemList)
  return (
    <div>
        {items.map((item,index)=>{  
            return (
                <div key={index}>
                    {item?.card?.info?.isBestseller ?
                    ( <BestSellerLevel nested={item.card.info}/> ): 
                    (<NestedItemList nested={item.card.info}/>) }
                </div>
            ) 
        })}
    </div>
  )
}



export default IteamList;