import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = (val) => {
    if (count === 0 && val === -1) setCount(0);
    else setCount(count + val);
  };

  return (
    <>
      <h2>Counter : {count}</h2>
      <button onClick={() => handleClick(1)}>+</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => handleClick(-1)}>-</button>
    </>
  );
};
