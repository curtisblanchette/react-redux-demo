import { useState } from "react";

const Counter = () => {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Add to Count</button>
        <button onClick={() => setCount(count - 1)}>Remove from Count</button>
      </div>
    </>
  )
};

export default Counter;