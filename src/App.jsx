import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let increase = () => {
    setCount(count + 1);
  };

  let decrease = () => {
    setCount(count - 1);
  };

  let reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <div className="counter">
        <h1>Counter App</h1>

        <div className="count">
          {count}
        </div>

        <div className="buttons">
          <button onClick={decrease}>-</button>

          <button onClick={reset}>Reset</button>

          <button onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
