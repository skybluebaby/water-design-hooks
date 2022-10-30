import React from 'react';
import raf from 'rc-util/lib/raf';
import { getScroll, scrollTo, easeInOutCubic, getDom } from './utils';
import { UseScroll, Position, Target } from './index.d';

/**
 * 滚动容器监听的hooks
 * @returns { position, getPosition, setPosition }
 */
const useScroll: UseScroll = ({ container }) => {
  const [point, setPoint] = React.useState<Position>({ left: 0, top: 0 });
  const domRef = React.useRef(null);

  const getPosition = React.useCallback((): Position => {
    const dom = domRef.current;
    if (dom) {
      return getScroll(dom);
    }
    return { left: 0, top: 0 };
  }, []);

  const setPosition = React.useCallback(
    (
      position?: Partial<Position>,
      duration = 450,
      callback?: () => any
    ): void => {
      const { left = 0, top = 0 } = position || {};
      const startTime = Date.now();
      const dom = domRef.current;
      if (!dom) {
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
        scrollTo(dom, nextScrollLeft, nextScrollTop);
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

  React.useEffect(() => {
    domRef.current = getDom(container);
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      const position = getPosition();
      setPoint(position);
    };
    const dom = domRef.current as Target;
    if (dom) {
      dom.addEventListener('scroll', onScroll);
    }
    return () => {
      if (dom) {
        dom.removeEventListener('scroll', onScroll);
      }
    };
  }, [getPosition]);

  return { position: point, getPosition, setPosition };
};

export default useScroll;
