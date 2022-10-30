import useBoolean from './useBoolean';
import useFormInput from './useFormInput';
import useSyncState from './useSyncState';
import useMousePosition from './useMousePosition';
import useInterval from './useInterval';
import useScroll from './useScroll';

import { WaterHooks } from './index.d';

export {
  useBoolean,
  useFormInput,
  useSyncState,
  useMousePosition,
  useInterval,
  useScroll,
};

const waterHooks: WaterHooks = {
  useBoolean,
  useFormInput,
  useSyncState,
  useMousePosition,
  useInterval,
  useScroll,
};

export default waterHooks;
