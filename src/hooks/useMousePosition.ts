// src/hooks/useMousePosition.ts
// src/hooks/useMousePosition.ts

import { useState, useEffect } from 'react';

// Re-defining the type here for clarity, but it can be imported
type MousePosition = {
  x: number;
  y: number;
};

// The custom hook function
// It doesn't take any arguments, but it must return an object of type MousePosition
export const useMousePosition = (): MousePosition => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    // Event handler for the mousemove event
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add the event listener to the window
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // The empty array ensures this effect runs only once

  return position;
};