import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

export default function DateCounter2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function defineStep(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }

  function defineCount(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }

  function inc() {
    dispatch({ type: "inc" });
  }

  function dec() {
    dispatch({ type: "dec" });
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => defineStep(e)}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input type="text" value={count} onChange={(e) => defineCount(e)} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
