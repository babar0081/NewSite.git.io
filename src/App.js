import { ToastContainer } from 'react-toastify';
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Home from './Pages/Home';
import SignupPage from './Pages/SignupPage';
import * as React from "react";
// import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import CartPage from './Pages/CartPage';
import Checkout from './Pages/CheckOut';

import LoginPage from './Pages/LoginPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import Protected from './features/Auth/Components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


import { fetchItemsByUserIdAsync } from './features/Cart/CartSlice';
import { selectLoggedInUser } from './features/Auth/authSlice';

const router = createBrowserRouter([
  
  
  {
    path: "/",
    element: <Protected>
       <Home></Home> 
       </Protected>     ,
  },
  {
    path: "/Login",
    element:<LoginPage></LoginPage>,
  },
  {
    path: "/Signup",
    element:<SignupPage></SignupPage>,
  },
  {
    path: "/Cart",
    element:
    <Protected>
      <CartPage></CartPage>,

    </Protected>

  },
  {
    path: "/Checkout",
    element:<Protected>

      <Checkout></Checkout>,
    </Protected>
  },
  {
    path: '/product-detail/:id',
    element:<Protected>

      <ProductDetailsPage></ProductDetailsPage>,
    </Protected>
  },
]);



function App() {
  const disptach = useDispatch();
  const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user && user.id){
      disptach(fetchItemsByUserIdAsync(user.id))
      console.log(user.id)
    }
  },[disptach,user])
  return (
    <div className='App'>
              <ToastContainer />

      <div>
          <SpeedInsights/>
          <Analytics/>
          
          <RouterProvider router={router} />
        </div>
    </div>
  );
}


export default App;


