import React, { useEffect, useState } from "react";
import "./Text.css";

function Text() {
  const [count, setCount] = useState(0);
  const [dhakshayini,setDhakshayini]=useState(20)

  const incremen = () => {
    setDhakshayini(dhakshayini+1)
  };
  const decremen = () => {
    setDhakshayini(dhakshayini-1)
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("hai");
  },[count]);
  return (
    <div>
      <h1>Hello</h1>
      <h1>dhakshayini:{dhakshayini}</h1>
      <h1>count:{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incremen}>plus</button>
      <button onClick={decremen}>minus</button>
      
    </div>
  );
}

export default Text;
