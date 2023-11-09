
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
  
  const user = {
    name: 'Life Chocies Academy',
    imageUrl: 'https://i.postimg.cc/vm30rsCN/download.png',
    imageSize: 90,
  };
  const [counter , setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1) }>-</button>
      <h1>{counter}</h1>
      
      <button onClick={() => setCounter((prevCount) => prevCount + 1) }>+</button>
     <br/>
      <MyButton />
      <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>

    </div>
  );
}

export default App;
