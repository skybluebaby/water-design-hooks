import React from 'react';
import { getScroll, scrollTo, easeInOutCubic } from './utils';
import raf from 'rc-util/lib/raf';
import { UseScroll, Target, Position } from './index.d';

/**
 *
 * @returns [domRef, { position, setPosition }]
 * @member domRef 绑定的容器
 * @member position  当前容器所处的位置 { left, top }
 * @member setPosition 设置当前容器的位置
 */
const useScroll: UseScroll = () => {
  const domRef = React.useRef(null);

  const [point, setPoint] = React.useState<Position>({ left: 0, top: 0 });

  const getPosition = React.useCallback((): Position => {
    const target = domRef.current;
    if (target) {
      return getScroll(target);
    }
    return { left: 0, top: 0 };
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      const position = getPosition();
      setPoint(position);
    };
    const target = domRef.current;
    if (target) {
      (target as Target).addEventListener('scroll', onScroll);
    }
    return () => {
      if (target) {
        (target as Target).removeEventListener('scroll', onScroll);
      }
    };
  }, [getPosition]);

  const setPosition = React.useCallback(
    (
      position?: Partial<Position>,
      duration = 450,
      callback?: () => any
    ): void => {
      const { left = 0, top = 0 } = position || {};
      const startTime = Date.now();
      const target = domRef.current;
      if (!target) {
        return;
      }
      const { left: scrollLeft, top: scrollTop } = getPosition();
      const frameFunc = () => {
        const timestamp = Date.now();
        const time = timestamp - startTime;
        const [nextScrollLeft, nextScrollTop] = [
          { current: scrollLeft, destination: left },
          { current: scrollTop, destination: top },
        ].map((item) =>
          easeInOutCubic(
            time > duration ? duration : time,
            item.current,
            item.destination,
            duration
          )
        );
        scrollTo(target, nextScrollLeft, nextScrollTop);
        if (time < duration) {
          raf(frameFunc);
        } else if (typeof callback === 'function') {
          callback();
        }
      };
      raf(frameFunc);
    },
    [getPosition]
  );

  return [domRef, { position: point, setPosition }];
};

export default useScroll;
