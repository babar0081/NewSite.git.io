
import { Counter } from './features/counter/Counter';
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Home from './Pages/Home';
import SignupPage from './Pages/SignupPage';
import * as React from "react";
import { createRoot } from "react-dom/client";
import Login from './features/Auth/Components/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './Pages/CartPage';
import Checkout from './Pages/CheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path: "/Login",
    element:<Login></Login>,
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
    path: "/CheckOut",
    element:<Checkout></Checkout>,
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
