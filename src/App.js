import Productlist from './features/Product-list/ProductList.js'
import { Counter } from './features/counter/Counter';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/next"


function App() {
  return (
    <div className='App'>
      <div>
          <Productlist></Productlist>
          <SpeedInsights />
        </div>
    </div>
  );
}


export default App;
