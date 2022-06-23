import React, { useState } from "react";
import { RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementByAmount] = useState("0");

  return (
    <div>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementByAmount(e.target.value)}
        />
        <button
          aria-label="Increment by value"
          onClick={() => {
            dispatch(incrementByAmount(Number(incrementAmount) || 0));
          }}
        >
          Increment by amount
        </button>
        <br />
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
