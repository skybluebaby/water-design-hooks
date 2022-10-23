import React from 'react';
import { UseFormInput } from './index.d';

// 封装的表单值及其改变处理函数
const useFormInput: UseFormInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

export default useFormInput;
