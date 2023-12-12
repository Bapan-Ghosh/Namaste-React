import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/cartSlice";
import NestedItemList from './NestedItemList'; 
import { withBestSellerLevel } from './NestedItemList';

const Cart = ()=>{
    const cartItems = useSelector((store) =>store.cart.items);
    console.log("from cart")
    console.log(cartItems);
    const BestSellerLevel = withBestSellerLevel(NestedItemList)
    
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

  return (
    <div className="m-auto w-6/12">
        <h1 className="text-center font-bold my-10">Cart</h1>
        <button onClick={handleClearCart} className="relative left-72 bg-blue-300 pt-1 pb-1 p-3 hover:bg-blue-600  rounded-md">Clear cart</button>
        {cartItems.map((item,index)=>{  
            return (
                <div key={index}>
                    {item?.isBestseller ?
                    ( <BestSellerLevel nested={item}/> ): 
                    (<NestedItemList nested={item}/>) }
                </div>
            ) 
        })}
    </div>
  )
}

export default Cart;