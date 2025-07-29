// src/Counter.tsx
import React, { useState } from 'react';

interface CounterProps {
  initialCount?: number; // Optional initial count
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  // --- 1. Type inference (most common for simple types) ---
  // TypeScript infers 'count' to be a 'number' because 'initialCount' is a number.
  const [count, setCount] = useState(initialCount);

  // --- 2. Explicitly typing the state (good for clarity or complex types) ---
  // Here, we explicitly tell TypeScript that 'message' will be a string.
  // This is especially useful if the initial state could be null/undefined
  // but later will definitely be a string (e.g., fetching data).
  const [message, setMessage] = useState<string>('Welcome!');

  // --- 3. Typing a union type for state (e.g., string or null) ---
  // This state can either hold a string or be null.
  // Useful for data that might not be loaded yet.
  const [userData, setUserData] = useState<string | null>(null);

  // --- 4. Typing an object for state ---
  interface UserFormState {
    name: string;
    age: number | null; // Age can be a number or null if not yet entered
    hasAgreedToTerms: boolean;
  }

  const [userForm, setUserForm] = useState<UserFormState>({
    name: '',
    age: null,
    hasAgreedToTerms: false,
  });

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    setMessage('Count increased!');
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
    setMessage('Count decreased!');
  };

  const fetchUserData = () => {
    // Simulate fetching data
    setTimeout(() => {
      setUserData("John Doe fetched!");
    }, 1000);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUserForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Try this: setUserForm(prevForm => ({ ...prevForm, age: "twenty" })); // TypeScript will error!
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>

      <p style={{ marginTop: '15px' }}>Message: {message}</p>

      <p style={{ marginTop: '15px' }}>User Data: {userData || 'Not fetched yet'}</p>
      <button onClick={fetchUserData}>Fetch User Data</button>

      <h3 style={{ marginTop: '20px' }}>User Form</h3>
      <form>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userForm.name}
              onChange={handleFormChange}
              style={{ marginLeft: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={userForm.age || ''} // Handle null for input
              onChange={handleFormChange}
              style={{ marginLeft: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="hasAgreedToTerms"
              checked={userForm.hasAgreedToTerms}
              onChange={handleFormChange}
            />
            Agree to Terms
          </label>
        </div>
        <pre>{JSON.stringify(userForm, null, 2)}</pre>
      </form>
    </div>
  );
};

export default Counter;
 