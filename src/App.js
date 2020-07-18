import React,{useState} from 'react';
import {Message} from './message.js';
import './App.css';

function App() {
  let [count,setCount] = useState(2);
  let [isMorning,setMorning] = useState(true);
  
  return (
    <div className={`box ${isMorning ? 'dayLight':''}`}>
<h1>Day time is {isMorning ? 'MORNING':'NIGHT'}</h1>
<Message counter={count}/>
      <h1>The value of Count is app.js file{count}</h1>
      <button onClick={()=> setCount(count + 1)}>Counter</button>
      <button onClick={()=> setMorning(!isMorning)}>Change Day</button>
      
    </div>
  );
}

export default App;
