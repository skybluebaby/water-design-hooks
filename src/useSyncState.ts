import React from 'react';
import { UseSyncState, InitialValue } from './index.d';

// 封装的可以获取同步的 state，调用getValue即可立马拿到响应值
const useSyncState: UseSyncState = (initialValue) => {
  const [value, setInnerValue] = React.useState(initialValue);
  const ref = React.useRef(value);

  const getValue = () => {
    return ref.current;
  };

  const setValue = (param: InitialValue<any>) => {
    ref.current = typeof param === 'function' ? param(ref.current) : param;
    setInnerValue(ref.current);
  };

  return [value, { getValue, setValue }];
};

export default useSyncState;
