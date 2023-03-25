import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../../store/reducers";
import { decrementCount, incrementCount } from "../../store/actions";

const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(incrementCount())}>Add to Count</button>
        <button onClick={() => dispatch(decrementCount())}>Remove from Count</button>
      </div>
    </>
  )
};

export default Counter;