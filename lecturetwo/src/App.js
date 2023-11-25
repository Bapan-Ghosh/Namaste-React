import React from 'react'
import  ReactDOM  from 'react-dom/client';
import '../index.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {Routes, Route} from 'react-router';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';

// import  ''
 
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

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>   {/* because header is common in every page */}
            <Outlet/>  {/* Outlets replaces the components */}
            {/* if path "/" */}

            {/* if path "/about" */}
            {/* <About /> */}

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
            }
        ],
        errorElement :<Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)