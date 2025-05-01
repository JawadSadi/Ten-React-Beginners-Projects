import React from "react";
import "../style.css";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>

        <div className="btns-container">
          <button onClick={() => setCount(count + 1)} className="btn">
            +
          </button>
          <button onClick={() => setCount(0)} className="btn-reset btn">
            Reset
          </button>
          <button onClick={() => setCount(count - 1)} className="btn">
            -
          </button>
        </div>
      </div>
    </div>
  );
}
