import React from 'react';
import { UseBoolean } from './index.d';

// 定义布尔值，可自由切换布尔值
const useBoolean: UseBoolean = (initialValue) => {
  const [boolean, setBoolean] = React.useState(initialValue);

  const setTrue = () => {
    if (boolean) return;
    setBoolean(true);
  };

  const setFalse = () => {
    if (!boolean) return;
    setBoolean(false);
  };

  const toggle = (flag?: boolean) => {
    if (flag !== undefined) {
      setBoolean(!!flag);
    } else {
      setBoolean(!boolean);
    }
  };

  return [boolean, { setTrue, setFalse, toggle }];
};

export default useBoolean;
