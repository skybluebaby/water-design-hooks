import React from 'react';
import useInterval from './useInterval';
import { UseRetry } from './index.d';

// 重试，当callback返回了true，则结束
const useRetry: UseRetry = (callback, delay) => {
  const [hasResolved, setHasResolved] = React.useState(false);

  useInterval(
    () => {
      const tick = async () => {
        const hasResolved = await callback();
        if (hasResolved) {
          setHasResolved(true);
        }
      };
      tick();
    },
    hasResolved ? null : delay
  );

  return hasResolved;
};

export default useRetry;
