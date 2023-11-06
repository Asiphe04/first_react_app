// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [counter , setCounter] = useState(0);
  return (
    <div className="App">
      <button onclick={() => setCounter((prevCount) => prevCount - 1) }>-</button>
      <h1>{counter}</h1>
      <button onclick={() => setCounter((prevCount) => prevCount + 1) }>+</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


    </div>
  );
}

export default App;
