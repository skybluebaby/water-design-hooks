import React from 'react';
import { useScroll } from '../src';

const ComUseScroll = () => {
  const [wrapperRef, { setPosition }] = useScroll();
  return (
    <div
      style={{
        width: 300,
        height: 500,
        border: '2px solid #000',
        overflow: 'auto',
      }}
      ref={wrapperRef}
    >
      <div style={{ height: 1000, width: 700 }}>123</div>
      <span>456</span>
      <button style={{ marginLeft: 200 }} onClick={() => setPosition()}>
        回到顶部
      </button>
    </div>
  );
};

export default ComUseScroll;
