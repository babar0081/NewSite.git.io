import Productlist from './features/Product-list/ProductList.js'
import { Counter } from './features/counter/Counter';
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className='App'>
      <div>
          <Productlist></Productlist>
          <SpeedInsights/>
          <Analytics />
        </div>
    </div>
  );
}


export default App;
