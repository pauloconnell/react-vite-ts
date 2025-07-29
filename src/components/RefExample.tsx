// src/RefExample.tsx
import React, { useRef, useEffect } from 'react';

const RefExample: React.FC = () => {
  // --- 1. Typing a Ref for a DOM Element (most common) ---
  // We expect this ref to point to an HTML input element.
  // It's initialized to 'null' because the ref won't be set until the component mounts and the element exists.
  // The type is 'HTMLInputElement | null' because it can be either the element or null.
  const inputRef = useRef<HTMLInputElement | null>(null);

  // --- 2. Typing a Ref for a mutable value (that doesn't trigger re-renders) ---
  // This ref will store a number (e.g., a click count that doesn't re-render the component).
  // It's initialized to 0, so TypeScript infers it's a 'number'.
  // You could explicitly type it as `useRef<number>(0)` for clarity, though.
  const clickCountRef = useRef(0);

  // --- 3. Typing a Ref for a mutable value that might be null initially ---
  // This ref could store a string or be null.
  const timerIdRef = useRef<number | null>(null);

  useEffect(() => {
    // --- Accessing a DOM Element Ref ---
    // We use optional chaining (`?.`) or a type guard because inputRef.current might be null initially.
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input when the component mounts
      console.log('Input focused!');
    }

    // --- Example with timerIdRef ---
    timerIdRef.current = window.setInterval(() => {
      console.log('Timer running...');
    }, 2000);

    // Cleanup function for useEffect to clear the interval
    return () => {
      if (timerIdRef.current !== null) {
        clearInterval(timerIdRef.current);
        console.log('Timer cleared!');
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const handleButtonClick = () => {
    clickCountRef.current += 1; // Mutate the ref directly
    console.log(`Button clicked! Total clicks (from ref): ${clickCountRef.current}`);
    // Notice: The component itself won't re-render based on clickCountRef changing.

    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };

  return (
    <div style={{ border: '1px dashed #4CAF50', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>`useRef` Example</h2>

      <p>
        <label htmlFor="myInput">Focus this input on load:</label>
        <input
          id="myInput"
          type="text"
          ref={inputRef} // Attach the ref to the DOM element
          defaultValue="Type something here"
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </p>

      <button onClick={handleButtonClick} style={{ marginTop: '15px' }}>
        Click Me (and check console for ref value)
      </button>

      <p style={{ fontSize: '0.8em', color: '#666' }}>
        (Changing `clickCountRef` does NOT re-render the component, where changing with useState would cause re-render.)
      </p>
    </div>
  );
};

export default RefExample;