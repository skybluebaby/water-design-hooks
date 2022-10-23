import React from 'react';
import { useInterval } from '../src';

const ComUseBoolean = () => {
  const [count, setCount] = React.useState(0);
  const { clearInterval } = useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <button onClick={clearInterval}>关闭定时器</button>
      <p>当前数量： {count}</p>
    </div>
  );
};

export default ComUseBoolean;
