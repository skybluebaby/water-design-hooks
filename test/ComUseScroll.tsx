import React from 'react';
import { useScroll } from '../src';

const ComUseScroll = () => {
  const ref = React.useRef(null);
  const { setPosition } = useScroll({
    // container: () => document.getElementById('wrapper'),
    container: () => ref.current,
  });

  return (
    <div
      style={{
        width: 300,
        height: 500,
        border: '2px solid #000',
        overflow: 'auto',
      }}
      // id="wrapper"
      ref={ref}
    >
      <div style={{ height: 1000, width: 700 }}>123</div>
      <span>456</span>
      <button
        style={{ marginLeft: 200 }}
        onClick={() =>
          setPosition({ top: 10 }, 600, () => {
            console.log(123);
          })
        }
      >
        回到顶部
      </button>
    </div>
  );
};

export default ComUseScroll;
