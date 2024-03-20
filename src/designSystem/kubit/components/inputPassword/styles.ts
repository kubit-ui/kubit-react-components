import { InputState } from '@/components/input/types';
import { InputPasswordStylesType } from '@/components/inputPassword/types';

import { COLORS } from '../../foundations';
import { InputPasswordVariant } from './variants';

const defaultCommonProps = {
  inputVariant: InputPasswordVariant.DEFAULT,
};

const subtituteCommonProps = {
  inputVariant: InputPasswordVariant.SUBSTITUTE,
};

export const INPUT_PASSWORD_STYLES: InputPasswordStylesType<InputPasswordVariant> = {
  [InputPasswordVariant.DEFAULT]: {
    [InputState.EMPTY]: {
      ...defaultCommonProps,
      inputIcon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [InputState.FILLED]: {
      ...defaultCommonProps,
      inputIcon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
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
  [InputPasswordVariant.SUBSTITUTE]: {
    [InputState.EMPTY]: {
      ...subtituteCommonProps,
    },
    [InputState.FILLED]: {
      ...subtituteCommonProps,
    },
    [InputState.ACTIVE]: {
      ...subtituteCommonProps,
    },
    [InputState.DISABLED_EMPTY]: {
      ...subtituteCommonProps,
    },
    [InputState.DISABLED_FILLED]: {
      ...subtituteCommonProps,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...subtituteCommonProps,
    },
    [InputState.ERROR_EMPTY]: {
      ...subtituteCommonProps,
    },
    [InputState.ERROR_FILLED]: {
      ...subtituteCommonProps,
    },
    [InputState.ERROR_ACTIVE]: {
      ...subtituteCommonProps,
    },
    [InputState.ERROR_FILLED_WITH_INFO]: {
      ...subtituteCommonProps,
    },
  },
};
