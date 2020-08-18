import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const OneTimeButton = ({ onClick }) => {
  const [click, setClick] = useState(false)
  const [items, setItems] = useState([])
  const counts = {
    countA: 0,
    countB: 0
  }
  const [count, setCount] = useState(counts)


  const incA = () => {
    setCount(count => ({
     ...count,
      countA: count.countA + 1
    }) )
  }
  
  const incB = () => {
    setCount(count => ({
      ...count,
      countB: count.countB + 1
    }) )
  }

  

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100 + 10
      }
    ])
  }


  const handleClick = () => {
    // Ok, no more clicking.
    onClick();
    setClick(true);
  };


  return (
    <div>
      <button onClick={handleClick}
        disabled={click}>
        click me once
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}

      </ul>
      <button onClick={addItem}>Add a number</button>
      <button name="incrementA" onClick={incA}>incA</button>
      <button name="incrementA" onClick={incB}>incB</button>
        <h1>A:{count.countA}</h1>
        <h1>B:{count.countB}</h1>

    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <OneTimeButton onClick={() => alert("hii")} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
