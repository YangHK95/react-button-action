import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]=useState(0)
  const [disabled,setDisabled]=useState(false)
  return (
    <div className="App">
      <header className="App-header">
       <h3 data-testid="counter">{count}</h3>
       <div>
        <button data-testid="minus-button" onClick={()=> setCount((prev)=> prev -1)} disabled={disabled}>-</button>
        <button data-testid="plus-button" onClick={()=> setCount((prev)=> prev +1)} disabled={disabled}>+</button>
       </div>
       <div>
        <button style={{background:"blue"}} data-testid="on/off-button" onClick={()=> setDisabled((prev)=> !prev)}>on/off</button>
       </div>
       <div>냠냠</div>
      </header>
    </div>
  );
}

export default App;
