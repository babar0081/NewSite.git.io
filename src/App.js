import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { SnackbarProvider } from 'notistack';
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
import PageNotFound from './Pages/404PageNotFound';
import OrderSuccesPage from './Pages/order-succesPage';
import UserOrderPage from './Pages/UserOrderPages';


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
  {
    path: '/order-success/:id',
    element:<Protected>

      <OrderSuccesPage></OrderSuccesPage>,
    </Protected>
  },
  {
    path: '/orders',
    element:<Protected>

      <UserOrderPage></UserOrderPage>,
    </Protected>
  },

  {
    path: '*',
    element:
        <PageNotFound></PageNotFound>
      
    
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
      <SnackbarProvider/>
              <ToastContainer/>
      <div>
          <SpeedInsights/>
          <Analytics/>
          
          <RouterProvider router={router} />
        </div>
    </div>
  );
}


export default App;


