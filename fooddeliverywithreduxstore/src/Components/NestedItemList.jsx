import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice';
import { CDN_URL } from '../utils/constants';

const NestedItemList = ({ nested }) => {

    const dispatch = useDispatch();
    const handleAdd = (nested)=>{
        //    Dispatch an action
        dispatch(addItem(nested));
    }

    return (
        <div className='border-gray-300  border-b-[1px] py-2 px-2 flex justify-between'>

            <div className='flex flex-col w-9/12'>
                <h1>{nested.name}</h1>
                <span>₹{nested.price ? nested.price / 100 : nested.defaultPrice/100}</span>
                <p className='pt-4 font-light text-sm'>{nested.description}</p>
            </div>
            <div className='w-3/12 p-4'>
                {nested.imageId && <img className='rounded-lg' src={CDN_URL + nested?.imageId} />}
                {nested.imageId ? <button onClick={()=>handleAdd(nested)} className='bg-white text-sm px-5 py-2 cursor-pointer hover:shadow-lg border-b-2 border-gray-200  text-green-700 rounded-sm shadow-2xl relative bottom-7 left-8'>ADD</button> :
                                  <button onClick={()=>handleAdd(nested)} className='bg-white text-sm px-5 py-2 cursor-pointer hover:shadow-lg border-b-2 border-gray-200  text-green-700 rounded-sm shadow-2xl relative bottom-0 left-8'>ADD</button>
                }
            </div>
        </div>
    )
}


//higher order function that will add best seller to that iteam that is comming from the backend
export const withBestSellerLevel = (NestedItemList) => {
    return (props) => {
        return (
            <div>
                <label className='text-yellow-500 text-sm' >⭐Best Seller</label>
                <NestedItemList {...props} />
            </div>
        )
    }
}

export default NestedItemList