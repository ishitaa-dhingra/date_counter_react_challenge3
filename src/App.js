import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setstep] = useState(0);
  const [count, setcount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  function handlereset() {
    setstep(1);
    setcount(0);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setstep(Number(e.target.value))}
        />
        <span>Step:{step}</span>{" "}
      </div>
      <div>
        <button onClick={() => setcount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setcount(Number(e.target.value))}
        />

        <button onClick={() => setcount((c) => c + step)}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      {count !== 0 || step != 1 ? (
        <div>
          <button onClick={handlereset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
