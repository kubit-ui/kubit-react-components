import { InputState } from '@/components/input/types';
import { InputCounterStylesType } from '@/components/inputCounter/types';

import { FONT_WEIGHT, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { TextCountVariantType } from '../textCount/variants';
import { InputCounterVariant } from './variants';

const commonProps = COLORS => ({
  inputVariant: InputCounterVariant.DEFAULT,
  textCountVariant: TextCountVariantType.DEFAULT,
  textCountTextVariant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
  textCountLeftWeight: FONT_WEIGHT.font_weight_500,
  textCountLeftColor: COLORS.FEEDBACK.color_feedbackSuccess_font_50,
  textCountRightWeight: FONT_WEIGHT.font_weight_300,
  textCountRightColor: COLORS.NEUTRAL.color_neutral_font_100,
  textCounterContainer: {
    margin_right: SPACINGS.spacing_0,
    margin_top: SPACINGS.spacing_150,
  },
});

export const getInputCounterStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): InputCounterStylesType<InputCounterVariant> => {
  return {
    [InputCounterVariant.DEFAULT]: {
      [InputState.EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.ACTIVE]: {
        ...commonProps(COLORS),
      },
      [InputState.FILLED]: {
        ...commonProps(COLORS),
      },
      [InputState.ERROR_EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.ERROR_FILLED]: {
        ...commonProps(COLORS),
      },
      [InputState.ERROR_ACTIVE]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_FILLED]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_FILLED_WITH_INFO]: {
        ...commonProps(COLORS),
      },
    },
  };
};
