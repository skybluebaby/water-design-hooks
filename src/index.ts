import useBoolean from './useBoolean';
import useFormInput from './useFormInput';
import useSyncState from './useSyncState';
import useMousePosition from './useMousePosition';
import useInterval from './useInterval';
import useScroll from './useScroll';
import useRetry from './useRetry';

import { WaterHooks } from './index.d';

export {
  useBoolean,
  useFormInput,
  useSyncState,
  useMousePosition,
  useInterval,
  useScroll,
  useRetry,
};

const waterHooks: WaterHooks = {
  useBoolean,
  useFormInput,
  useSyncState,
  useMousePosition,
  useInterval,
  useScroll,
  useRetry,
};

export default waterHooks;
