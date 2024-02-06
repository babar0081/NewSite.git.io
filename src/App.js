
import { Counter } from './features/counter/Counter';
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Home from './Pages/Home';
import SignupPage from './Pages/SignupPage';



function App() {
  return (
    <div className='App'>
      <div>
          <SpeedInsights/>
          <Analytics/>
          
          <Home></Home>
        </div>
    </div>
  );
}


export default App;
