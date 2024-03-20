import { InputState } from '@/components/input/types';
import { InputPasswordStylesType } from '@/components/inputPassword/types';

import { InputPasswordVariant } from './variants';

const defaultCommonProps = {
  inputVariant: InputPasswordVariant.DEFAULT,
};

export const getInputPasswordStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): InputPasswordStylesType<InputPasswordVariant> => {
  return {
    [InputPasswordVariant.DEFAULT]: {
      [InputState.EMPTY]: {
        ...defaultCommonProps,
      },
      [InputState.FILLED]: {
        ...defaultCommonProps,
      },
      [InputState.ACTIVE]: {
        ...defaultCommonProps,
      },
      [InputState.DISABLED_EMPTY]: {
        ...defaultCommonProps,
      },
      [InputState.DISABLED_FILLED]: {
        ...defaultCommonProps,
      },
      [InputState.DISABLED_FILLED_WITH_INFO]: {
        ...defaultCommonProps,
      },
      [InputState.ERROR_EMPTY]: {
        ...defaultCommonProps,
      },
      [InputState.ERROR_FILLED]: {
        ...defaultCommonProps,
      },
      [InputState.ERROR_ACTIVE]: {
        ...defaultCommonProps,
      },
      [InputState.ERROR_FILLED_WITH_INFO]: {
        ...defaultCommonProps,
      },
    },
  };
};
