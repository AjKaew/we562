import React, { useState } from "react";

function ExpensiveComponent({ count }) {
  let expensiveCalculation = 0;
  for (let i = 0; i < 1e6; i++) {
    expensiveCalculation += count;
  }

  return <p>Expensive Calculation Result: {expensiveCalculation}</p>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Profiler Example</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent count={count} />
    </div>
  );
}

export default App;