import React from 'react';
import { useSyncState } from '../src';

const ComUseSyncState = () => {
  const [value1, setValue1] = React.useState(0);
  const [value2, { getValue: getValue2, setValue: setValue2 }] =
    useSyncState(0);

  const onValue1Click = () => {
    // setValue1(value1 + 1);
    setValue1((prevState) => prevState + 1);
    // 这里拿到的值还是更新前的值
    console.log(value1);
  };

  const onValue2Click = () => {
    // setValue2(value2 + 1);
    setValue2((prevState) => prevState + 1);
    // 这里拿到的值是更新后的值
    console.log(getValue2());
  };

  return (
    <div>
      <p>请看控制台打印的滞后效果</p>
      <p>value1:</p>
      <button onClick={onValue1Click} style={{ marginRight: '10px' }}>
        value1自增
      </button>
      <button>{value1}</button>
      <hr></hr>
      <p>value2:</p>
      <button onClick={onValue2Click} style={{ marginRight: '10px' }}>
        value2自增
      </button>
      <button>{value2}</button>
    </div>
  );
};

export default ComUseSyncState;
