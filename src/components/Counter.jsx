import { useState } from 'react';
import './Counter.css';

// Counter functional component to demonstrate useState and event handling
function Counter() {
  // Step 1: Initialize state using the useState hook with an initial value of 0
  const [count, setCount] = useState(0);

  // Step 2: Event handler functions
  // Increment: Increase count by 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrement: Decrease count by 1, with safe condition to prevent going below 0
  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  // Reset: Reset count back to 0
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-card">
      {/* Project Title */}
      <h1 className="counter-title">Counter Application</h1>

      {/* Prominent Counter Display */}
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>

      {/* Conditional Rendering: Show message when count reaches 0 */}
      {count === 0 && (
        <p className="limit-message">Minimum limit reached</p>
      )}

      {/* Action Buttons Row */}
      <div className="button-group">
        <button
          type="button"
          className="btn btn-increment"
          onClick={handleIncrement}
        >
          Increment
        </button>

        <button
          type="button"
          className="btn btn-decrement"
          onClick={handleDecrement}
        >
          Decrement
        </button>

        <button
          type="button"
          className="btn btn-reset"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
