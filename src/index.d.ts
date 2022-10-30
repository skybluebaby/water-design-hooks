import React from 'react';
export type InitialValue<T> = T | (() => T);

/*------------------------------useBoolean------------------------------*/
export type UseBoolean = (initialValue: InitialValue<boolean>) => [
  boolean,
  {
    setTrue: () => void;
    setFalse: () => void;
    toggle: (flag?: boolean) => void;
  }
];
declare const useBoolean: UseBoolean;

/*------------------------------useFormInput------------------------------*/
export type UseFormInput = (initialValue: InitialValue<string>) => {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const useFormInput: UseFormInput;

/*------------------------------useSyncState------------------------------*/
export type UseSyncState = <T>(initialValue: InitialValue<T>) => [
  T,
  {
    getValue: () => T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
  }
];
declare const useSyncState: UseSyncState;
/*----------------------------useMousePosition----------------------------*/
export type UseMousePosition = () => { x?: number; y?: number };
declare const useMousePosition: UseMousePosition;

/*----------------------------useInterval----------------------------*/
export type UseInterval = (
  callback: () => void,
  wait: number
) => {
  intervalRef: React.MutableRefObject<undefined | number>;
  clearInterval: () => void;
};
declare const useInterval: UseInterval;

/*----------------------------useScroll----------------------------*/
export type Position = {
  left: number;
  top: number;
};

export type Target = HTMLElement | Document | Window;

export type UseScroll = () => [
  React.MutableRefObject<null>,
  {
    /**
     * 当前位置
     * @member { left, top }
     */
    position: Position;
    /**
     * 设置位置
     * @param {object|undefined} position 传入当前dom需要到达的位置 { left: number, top: number }
     * @param {number|undefined} duration 指定到达指定位置的时间
     * @param {function|undefined} callback 到达指定位置后的回调
     * @returns void
     */
    setPosition: (
      position?: Partial<Position>,
      duration?: number,
      callback?: () => any
    ) => void;
  }
];

declare const useScroll: UseScroll;
/*------------------------------------------------------------------------*/

export interface WaterHooks {
  useBoolean: UseBoolean;
  useFormInput: UseFormInput;
  useSyncState: UseSyncState;
  useMousePosition: UseMousePosition;
  useInterval: UseInterval;
  useScroll: UseScroll;
}
declare const waterHooks: WaterHooks;

export {
  useBoolean,
  useFormInput,
  useSyncState,
  useMousePosition,
  useInterval,
  useScroll,
};

export default waterHooks;
