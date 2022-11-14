import React from 'react';
import { useRetry } from '../src';

let a = 0;

const fetchData = async () => {
  a++;
  return Promise.resolve({ name: '张三' + a });
};

const ComUseRetry = () => {
  const [data, setData] = React.useState<{ name?: string }[]>([]);
  useRetry(async () => {
    const res = await fetchData();
    setData((prev) => [...prev, res]);
    if (res.name === '张三10') {
      return true;
    }
  }, 1000);

  return (
    <div>
      {data.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
    </div>
  );
};

export default ComUseRetry;
