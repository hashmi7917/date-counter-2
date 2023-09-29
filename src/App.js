import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleDec() {
    setCount((c) => c - step);
  }

  function handleInc() {
    setCount((c) => c + step);
  }

  function handleReset(e) {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="App">
      {/* <button onClick={() => setStep((c) => c - 1)}> - </button> Step: {step}{" "}
      <button onClick={() => setStep((c) => c + 1)}>+</button> */}
      <input
        onChange={(e) => setStep(Number(e.target.value))}
        type="range"
        min="1"
        max="100"
        value={step}
      />
      <span>Step {step}</span>
      <br />
      <button onClick={handleDec}> - </button>
      <span>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </span>
      <button onClick={handleInc}> + </button>
      <br />
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
      <br />
      <br />
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
