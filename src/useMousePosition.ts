import React from 'react';
import { UseMousePosition } from './index.d';

// 获取鼠标移动时的位置
const useMousePosition: UseMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState<
    ReturnType<UseMousePosition>
  >({
    x: undefined,
    y: undefined,
  });

  React.useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
