import useBoolean from './useBoolean';
import useFormInput from './useFormInput';
import useSyncState from './useSyncState';
import useMousePosition from './useMousePosition';
import useInterval from './useInterval';

import { WaterHooks } from './index.d';

export {
  useBoolean,
  useFormInput,
  useSyncState,
  useMousePosition,
  useInterval,
};

const waterHooks: WaterHooks = {
  useBoolean,
  useFormInput,
  useSyncState,
  useMousePosition,
  useInterval,
};

export default waterHooks;
