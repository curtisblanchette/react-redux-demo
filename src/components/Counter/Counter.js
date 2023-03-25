
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment)}>Add to Count</button>
        <button onClick={() => dispatch(decrement)}>Remove from Count</button>
      </div>
    </>
  )
};

export default Counter;