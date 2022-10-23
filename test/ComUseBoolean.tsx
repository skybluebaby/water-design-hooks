import React from 'react';
import { useBoolean } from '../src';

const ComUseBoolean = () => {
  const [show, { setTrue, setFalse, toggle }] = useBoolean(true);

  return (
    <div>
      <button onClick={setTrue}>显示</button>
      <button onClick={setFalse}>隐藏</button>
      <button onClick={() => toggle()}>切换</button>
      <p>文本:</p>
      {show && <p>北京的金山上，光芒照四方</p>}
    </div>
  );
};

export default ComUseBoolean;
