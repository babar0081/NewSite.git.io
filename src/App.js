
import { Counter } from './features/counter/Counter';
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Home from './Pages/Home';
import SignupPage from './Pages/SignupPage';
import * as React from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './Pages/CartPage';
import Checkout from './Pages/CheckOut';

import ProductDetailsPage from './Pages/ProductDetailsPage';
import LoginPage from './Pages/LoginPage';

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
    path: "/ProductDetails",
    element:<ProductDetailsPage></ProductDetailsPage>,
  },
]);



function App() {
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


