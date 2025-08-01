// src/CustomHookExample.tsx

import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomHookExample: React.FC = () => {
  // Call the custom hook and get its returned values
  const mousePosition = useMousePosition();

  return (
    <div style={{ border: '1px solid #FFC107', padding: '20px', margin: '20px', borderRadius: '8px', backgroundColor: '#fff9e6' }}>
      <h2>Custom Hook Example</h2>
      <p>Move your mouse over this page to see the coordinates update.</p>
      <div style={{ border: '2px solid #FFC107', padding: '10px', marginTop: '15px', display: 'inline-block' }}>
        <p style={{ margin: 0 }}>
          Mouse X: <strong>{mousePosition.x}</strong>
        </p>
        <p style={{ margin: 0 }}>
          Mouse Y: <strong>{mousePosition.y}</strong>
        </p>
      </div>
    </div>
  );
};

export default CustomHookExample;