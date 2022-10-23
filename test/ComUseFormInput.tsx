import React from 'react';
import { useFormInput } from '../src';

const ComUseFormInput = () => {
  const { value: value1, onChange: onChange1 } = useFormInput('1');
  const { value: value2, onChange: onChange2 } = useFormInput('2');
  const { value: value3, onChange: onChange3 } = useFormInput('3');
  // 抽成自定义的hook目的是不用在一个函数里声明多个value值，不用定义多个处理函数

  return (
    <div>
      <span>不受控：</span>
      <input type="text" />
      <hr></hr>
      <span>受控：</span>
      <input type="text" value={value1} onChange={onChange1} />
      <input type="text" value={value2} onChange={onChange2} />
      <input type="text" value={value3} onChange={onChange3} />
    </div>
  );
};

export default ComUseFormInput;
