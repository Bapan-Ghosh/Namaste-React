import React,{lazy,Suspense} from 'react'
import  ReactDOM  from 'react-dom/client';
import '../index.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import Cart from './Components/Cart';
import Shimmer from './Components/Shimmerui';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';

//chunking
//code splitting
//Dynamic Bundling
//lazy loading
//On demand loading
 
/*
// npx parcel index.html

/*
    ///////////SYNTAX 1
    const functional = () =>{
        return (
            <h1> Just wow , just wow </h1>
        )
    }   

    const functional = () => <h1> fsfsf </h1>

*/
/*
const abc = () =>{
    return(
        <h1>cool</h1>
    )
}
const App = () => {
  return (
    <>
        There are 3 ways to execute the component 
    <abc/>     
    <abc></abc>
    {abc()}
         This is called component composition 
    <div>App</div>
    </>
  )
}
*/
 // export default App
//





//
const Grocery = lazy(()=> import("./Components/Grocery"));

const AppLayout = ()=>{

    return (
        //provider is for the redux so that we can use the store throught
        // all code
        <Provider store={appStore}>
        <div>
            <Header/>   {/* because header is common in every page */}
            <Outlet/>  {/* The Outlet will be replaced by the child component based on the route.*/}
            {/* if path "/"  then Outlet will be replaced with <Body/>*/ }

            {/* if path "/about" */}
            {/* <About /> */}
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
               path:"/",
               element:<Body/>
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <ContactUs />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }
        ],
        errorElement :<Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)