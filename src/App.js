import React from 'react'; 
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import RollDice from './Component/RollDice/RollDice';
library.add(fas) 
  
function App() { 
    return ( 
        <div> 
          {/* Render the RollDice Here */}
              <RollDice />
        </div> 
    ); 
} 
  
export default App; 