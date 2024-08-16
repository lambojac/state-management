import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function App() {
  const [state, setState] = useState({ count: 4, theme: "blue" });

  function decrementCount() {
    setState(prevState => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  function incrementCount() {
    setState(prevState => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  return (
    <>
      <span>{state.theme}</span>
      <span>{state.count}</span>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;



