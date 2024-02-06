import Productlist from './features/Product-list/ProductList.js'
import { Counter } from './features/counter/Counter';
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './features/Navbar/Navbar.js';


function App() {
  return (
    <div className='App'>
      <div>
          <SpeedInsights/>
          <Analytics/>
          <Navbar></Navbar>
          <Productlist></Productlist>
        </div>
    </div>
  );
}


export default App;
