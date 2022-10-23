import React from 'react';
import { useMousePosition } from '../src';

const ComUseMousePosition = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      <h2>
        position: {x}, {y}
      </h2>
      <span
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: '100px',
          height: '100px',
          backgroundColor: 'skyblue',
        }}
      ></span>
    </div>
  );
};

export default ComUseMousePosition;
