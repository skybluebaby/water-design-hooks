import { Target, Position } from './index.d';

export const isWindow = (obj: any) => {
  return obj !== null && obj !== undefined && obj === obj.window;
};

export const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
  const p = (c - b) / 2;
  t /= d / 2;
  if (t < 1) {
    return p * t ** 3 + b;
  }
  return p * ((t -= 2) * t * t + 2) + b;
};

export const scrollTo = (target: Target, left: number, top: number) => {
  if (isWindow(target)) {
    (target as Window).scrollTo(left, top);
  } else if ((target as Target) instanceof Document) {
    (target as Document).documentElement.scrollLeft = left;
    (target as Document).documentElement.scrollTop = top;
  } else {
    (target as HTMLElement).scrollLeft = left;
    (target as HTMLElement).scrollTop = top;
  }
};

export const getScroll = (target: Target): Position => {
  let left: number;
  let top: number;
  if (!target) {
    return { left: 0, top: 0 };
  }
  if (isWindow(target)) {
    left = (target as Window).scrollX;
    top = (target as Window).scrollY;
  } else if (target instanceof Document) {
    left = target.documentElement.scrollLeft;
    top = target.documentElement.scrollTop;
  } else {
    left = (target as HTMLElement).scrollLeft;
    top = (target as HTMLElement).scrollTop;
  }
  return { left, top };
};

export const getDom = (param: any) => {
  if (typeof param === 'function') {
    return param();
  }
  return param;
};
