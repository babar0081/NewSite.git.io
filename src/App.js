
// import { Counter } from './features/counter/Counter';
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

import ProductDetailsPage from './Pages/ProductDetailsPage';
import LoginPage from './Pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchItemsByUserIdAsync } from './features/Cart/CartSlice';
import { selectLoggedInUser } from './features/Auth/authSlice';

const router = createBrowserRouter([
  
  
  {
    path: "/",
    element:<Home></Home>,
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
    element:<CartPage></CartPage>,
  },
  {
    path: "/Checkout",
    element:<Checkout></Checkout>,
  },
  {
    path: '/product-detail/:id',
    element:<ProductDetailsPage></ProductDetailsPage>,
  },
]);



function App() {
  const disptach = useDispatch();
  const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
      disptach(fetchItemsByUserIdAsync(user.id))
    }
    
  },[disptach,user])
  return (
    <div className='App'>
      <div>
          <SpeedInsights/>
          <Analytics/>
          
          <RouterProvider router={router} />
        </div>
    </div>
  );
}


export default App;


