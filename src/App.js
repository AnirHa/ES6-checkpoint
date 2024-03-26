import logo from './logo.svg';
import './App.css';
import {data} from"./data"
import React ,{ useState } from 'react';




function App() {

  const [cont , setCont] = useState(0)
  
  return (
    <div className="App">
      <button onClick={()=>setCont(cont + 1 )} >click me </button>
         {data.map(item => (
          <div key={item.id}>
            
            <h1>{item.nom}</h1>
            <h1>{item.email}</h1>
          
          </div>
          
          

        ))}
      {cont}
        </div>
  );
}

export default App;



