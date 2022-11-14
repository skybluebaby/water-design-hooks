import React from 'react';
import { UseInterval } from './index.d';

// 计时器
const useInterval: UseInterval = (callback, delay) => {
  const intervalRef = React.useRef<undefined | number>(undefined);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(() => {
        savedCallback.current();
      }, delay);

      return () => {
        window.clearInterval(intervalRef.current);
      };
    }
  }, [delay]);

  const clearInterval = () => {
    window.clearInterval(intervalRef.current);
  };

  return { intervalRef, clearInterval };
};

export default useInterval;
