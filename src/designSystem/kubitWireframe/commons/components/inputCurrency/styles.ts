import {
  InputContentPosition,
  InputHelpMessagePosition,
  InputState,
} from '@/components/input/types';
import { InputCurrencyStylesType } from '@/components/inputCurrency/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';

import { BORDERS, FONT_WEIGHT, RADIUS, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { InputCurrencyVariant } from './variants';

const commonProps = COLORS => ({
  currencyNameContainer: {
    gap: SPACINGS.spacing_150,
    width: SPACINGS.spacing_550,
    height: SPACINGS.spacing_550,
    border_radius: RADIUS.radius_300,
    border_width: BORDERS.border_50,
    border_color: COLORS.NEUTRAL.color_neutral_border_50,
    border_style: 'solid',
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    marginLeftOrRightByIsOutAndPosition: SPACINGS.spacing_150,
    ...transformShadow(RADIUS.radius_300),
    ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
  },
  currencyNameContainerPosition: InputContentPosition.OUT,
  currencyName: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_500,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  helpMessage: {
    position: InputHelpMessagePosition.BOTTOM,
  },
  inputVariant: InputCurrencyVariant.DEFAULT,
});

export const getInputCurrencyStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): InputCurrencyStylesType<InputCurrencyVariant> => {
  return {
    [InputCurrencyVariant.DEFAULT]: {
      [InputState.EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.FILLED]: {
        ...commonProps(COLORS),
      },
      [InputState.ACTIVE]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_EMPTY]: {
        ...commonProps(COLORS),
        currencyName: {
          ...commonProps(COLORS).currencyName,
          color: COLORS.DISABLED.color_accentDisabled_font_50,
        },
      },
      [InputState.DISABLED_FILLED]: {
        ...commonProps(COLORS),
        currencyName: {
          ...commonProps(COLORS).currencyName,
          color: COLORS.DISABLED.color_accentDisabled_font_50,
        },
      },
      [InputState.DISABLED_FILLED_WITH_INFO]: {
        ...commonProps(COLORS),
        currencyName: {
          ...commonProps(COLORS).currencyName,
          color: COLORS.DISABLED.color_accentDisabled_font_50,
        },
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
      [InputState.ERROR_FILLED_WITH_INFO]: {
        ...commonProps(COLORS),
      },
    },
  };
};
