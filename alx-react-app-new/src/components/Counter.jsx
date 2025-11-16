// src/components/Counter.jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: 8,
        width: 260,
        margin: "12px auto",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <h3 style={{ margin: "0 0 12px 0" }}>Simple Counter</h3>

      <p style={{ fontSize: 20, margin: "8px 0" }}>
        Current Count: <strong>{count}</strong>
      </p>

      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ padding: "8px 12px", cursor: "pointer" }}
        >
          Increment
        </button>

        <button
          onClick={() => setCount((c) => c - 1)}
          style={{ padding: "8px 12px", cursor: "pointer" }}
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            background: "#f3f3f3",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
