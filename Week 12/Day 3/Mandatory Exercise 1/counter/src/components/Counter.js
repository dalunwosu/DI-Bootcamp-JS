import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const incrementIfOdd = () => {
    if (count % 2 !== 0) {
      onIncrement();
    }
  };

  const incrementAsync = () => {
    setTimeout(onIncrement, 1000);
  };

  return (
    <p>
      Clicked: {count} times <button onClick={onIncrement}>+</button>{" "}
      <button onClick={onDecrement}>-</button>{" "}
      <button onClick={incrementIfOdd}>Increment if odd</button>{" "}
      <button onClick={incrementAsync}>Increment async</button>
    </p>
  );
};

export default Counter;
