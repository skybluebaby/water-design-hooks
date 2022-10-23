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

/*------------------------------------------------------------------------*/

export interface WaterHooks {
  useBoolean: UseBoolean;
  useFormInput: UseFormInput;
  useSyncState: UseSyncState;
  useMousePosition: UseMousePosition;
  useInterval: UseInterval;
}
declare const waterHooks: WaterHooks;

export {
  useBoolean,
  useFormInput,
  useSyncState,
  useMousePosition,
  useInterval,
};

export default waterHooks;
