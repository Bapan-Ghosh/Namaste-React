import React,{lazy,Suspense, useEffect, useState} from 'react'
import ReactDOM  from 'react-dom/client';
import '../index.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import Shimmer from './Components/Shimmerui';
import UserContext from './utils/UseContext';

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
    // Now suppose we want to pass data to context api;
    const [userName, setUserName] = useState();
    useEffect(()=>{
          // make an api call send username and password
          const data = {
            name : "Bapan Ghosh",
          };
          setUserName(data.name);
    },[]) 

    return (
        <div>
            <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
            <Header/>   {/* because header is common in every page */}
            <Outlet/>  {/* The Outlet will be replaced by the child component based on the route.*/}
            {/* if path "/"  then Outlet will be replaced with <Body/>*/ }

            {/* if path "/about" */}
            {/* <About /> */}

        </UserContext.Provider>
        </div>
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
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }
        ],
        errorElement :<Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)