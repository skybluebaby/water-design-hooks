import React from 'react';
import { UseInterval } from './index.d';

// 计时器
const useInterval: UseInterval = (callback, wait) => {
  const intervalRef = React.useRef<undefined | number>(undefined);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      savedCallback.current();
    }, wait);

    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, [wait]);

  const clearInterval = () => {
    window.clearInterval(intervalRef.current);
  };

  return { intervalRef, clearInterval };
};

export default useInterval;
