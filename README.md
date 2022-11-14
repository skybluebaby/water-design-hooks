## 综述

water-design-hooks 是基于 react 的一套 hooks 库，用于 react 的状态函数组件开发

## 介绍

| 名称               | 说明                                            | 参数                                | 版本   |
| :----------------- | :---------------------------------------------- | :---------------------------------- | :----- |
| `useBoolean`       | 定义布尔值                                      | `boolean`                           | ^1.0.0 |
| `useFormInput`     | 对表单的`value`和`onChange`的复用封装           | `string`                            | ^1.0.0 |
| `useInterval`      | 计时器，按间隔执行回调函数，可控清除计时器      | -                                   | ^1.0.0 |
| `useMousePosition` | 获取鼠标位置                                    | -                                   | ^1.0.0 |
| `useSyncState`     | 在调用 setState 后，可同步获取 state 改变后的值 | -                                   | ^1.0.0 |
| `useScroll`        | 滚动的监听                                      | `{ container: function }`           | ^1.0.0 |
| `useRetry`         | 重试                                            | `Function or AsyncFunction, number` | ^1.0.1 |

## 使用

### useBoolean

```tsx
import React from 'react';
import { useBoolean } from 'water-design-hooks';

const App = () => {
  const [show, { setTrue, setFalse, toggle }] = useBoolean(true);

  return (
    <div>
      <button onClick={setTrue}>显示</button>
      <button onClick={setFalse}>隐藏</button>
      <button onClick={() => toggle()}>切换</button>
      <button onClick={() => toggle(true)}>切换显示</button>
      <button onClick={() => toggle(false)}>切换隐藏</button>
      <p>文本:</p>
      {show && <p>北京的金山上，光芒照四方</p>}
    </div>
  );
};

export default App;
```

### useFormInput

```tsx
import React from 'react';
import { useFormInput } from 'water-design-hooks';

const App = () => {
  const { value: value1, onChange: onChange1 } = useFormInput('1');
  const { value: value2, onChange: onChange2 } = useFormInput('2');
  // 抽成自定义的hook目的是不用在一个函数里声明多个value值，不用定义多个处理函数
  return (
    <>
      <input type="text" value={value1} onChange={onChange1} />
      <input type="text" value={value2} onChange={onChange2} />
    </>
  );
};

export default App;
```

### useInterval

```tsx
import React from 'react';
import { useInterval } from 'water-design-hooks';

const App = () => {
  const [count, setCount] = React.useState(0);
  const { clearInterval } = useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <button onClick={clearInterval}>关闭定时器</button>
      <p>当前数量： {count}</p>
    </div>
  );
};

export default App;
```

### useMousePosition

```tsx
import React from 'react';
import { useMousePosition } from 'water-design-hooks';

const App = () => {
  const { x, y } = useMousePosition();

  return (
    <h2>
      position: {x}, {y}
    </h2>
  );
};

export default App;
```

### useSyncState

```tsx
import React from 'react';
import { useSyncState } from 'water-design-hooks';

const App = () => {
  const [value1, setValue1] = React.useState(0);
  const [value2, { getValue: getValue2, setValue: setValue2 }] =
    useSyncState(0);

  const onValue1Click = () => {
    setValue1(value1 + 1);
    // 这里拿到的值还是更新前的值
    console.log(value1);
  };

  const onValue2Click = () => {
    setValue2(value2 + 1);
    // 这里拿到的值是更新后的值
    console.log(getValue2());
  };

  return (
    <div>
      <button onClick={onValue1Click}>value1自增</button>
      <span>{value1}</span>
      <hr></hr>
      <button onClick={onValue2Click}>value2自增</button>
      <span>{value2}</span>
    </div>
  );
};

export default App;
```

### useScroll

```tsx
import React from 'react';
import { useScroll } from 'water-design-hooks';

const App = () => {
  const ref = React.useRef(null);
  const { setPosition } = useScroll({
    // container: () => document.getElementById('wrapper'),
    container: () => ref.current,
  });

  return (
    <div
      style={{
        width: 300,
        height: 500,
        border: '2px solid #000',
        overflow: 'auto',
      }}
      // id="wrapper"
      ref={ref}
    >
      <div style={{ height: 1000, width: 700 }}>123</div>
      <span>456</span>
      <button
        style={{ marginLeft: 200 }}
        onClick={() =>
          setPosition({ top: 10 }, 600, () => {
            console.log(123);
          })
        }
      >
        回到顶部
      </button>
    </div>
  );
};

export default App;
```

### useRetry

```tsx
import React from 'react';
import { useRetry } from 'water-design-hooks';

let a = 0;
const fetchData = async () => {
  a++;
  return Promise.resolve({ name: '张三' + a });
};

const App = () => {
  const [data, setData] = React.useState<{ name?: string }[]>([]);
  useRetry(async () => {
    const res = await fetchData();
    setData((prev) => [...prev, res]);
    if (res.name === '张三10') {
      // 当返回true时结束该重试hook
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

export default App;
```
