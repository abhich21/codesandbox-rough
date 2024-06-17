import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = (val) => {
    if (count === 0 && val === -1) setCount(0);
    else setCount(count + val);
  };

  return (
    <>
      <div>
        <h2>Counter : {count}</h2>
        <button onClick={() => handleClick(1)}>Incr</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => handleClick(-1)}>decr</button>
      </div>
    </>
  );
};
