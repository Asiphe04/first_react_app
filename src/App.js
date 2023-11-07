
import {useState} from 'react';
import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function App() {
  const [counter , setCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1) }>-</button>
      <h1>{counter}</h1>
      
      <button onClick={() => setCounter((prevCount) => prevCount + 1) }>+</button>
     <br/>
      <MyButton />


    </div>
  );
}

export default App;
