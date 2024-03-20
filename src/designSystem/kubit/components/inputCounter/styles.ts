import { InputState } from '@/components/input/types';
import { InputCounterStylesType } from '@/components/inputCounter/types';

import { COLORS, FONT_WEIGHT, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { TextCountVariantType } from '../textCount/variants';
import { InputCounterVariant } from './variants';

const commonProps = {
  inputVariant: InputCounterVariant.DEFAULT,
  textCountVariant: TextCountVariantType.DEFAULT,
  textCountTextVariant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
  textCountLeftWeight: FONT_WEIGHT.font_weight_500,
  textCountLeftColor: COLORS.FEEDBACK.color_feedbackSuccess_font_50,
  textCountRightWeight: FONT_WEIGHT.font_weight_300,
  textCountRightColor: COLORS.NEUTRAL.color_neutral_font_100,
  textCounterContainer: {
    margin_right: SPACINGS.spacing_0,
  },
};

const errorCommonProps = {
  textCountLeftColor: COLORS.FEEDBACK.color_feedbackError_font_50,
};

export const INPUT_COUNTER_STYLES: InputCounterStylesType<InputCounterVariant> = {
  [InputCounterVariant.DEFAULT]: {
    [InputState.EMPTY]: {
      ...commonProps,
      inputIcon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [InputState.ACTIVE]: {
      ...commonProps,
    },
    [InputState.FILLED]: {
      ...commonProps,
      inputIcon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [InputState.ERROR_EMPTY]: {
      ...commonProps,
      ...errorCommonProps,
    },
    [InputState.ERROR_FILLED]: {
      ...commonProps,
      ...errorCommonProps,
    },
    [InputState.ERROR_ACTIVE]: {
      ...commonProps,
      ...errorCommonProps,
    },
    [InputState.DISABLED_EMPTY]: {
      ...commonProps,
    },
    [InputState.DISABLED_FILLED]: {
      ...commonProps,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...commonProps,
    },
  },
};
