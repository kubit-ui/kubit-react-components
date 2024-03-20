import {
  InputContentPosition,
  InputHelpMessagePosition,
  InputState,
} from '@/components/input/types';
import { InputCurrencyStylesType } from '@/components/inputCurrency/types';

import { BORDERS, COLORS, FONT_WEIGHT, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { InputCurrencyVariant } from './variants';

const commonProps = {
  currencyNameContainer: {
    gap: SPACINGS.spacing_150,
    width: SPACINGS.spacing_600,
    height: SPACINGS.spacing_500,
    border_radius: BORDERS.border_00,
    marginLeftOrRightByIsOutAndPosition: SPACINGS.spacing_150,
  },
  currencyNameContainerPosition: InputContentPosition.INNER,
  currencyName: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_500,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  helpMessage: {
    position: InputHelpMessagePosition.BOTTOM,
  },
  inputVariant: InputCurrencyVariant.DEFAULT,
};

const defaultCommonProps = {
  ...commonProps,
  inputVariant: InputCurrencyVariant.DEFAULT,
};

const disabledCommonProps = {
  currencyNameContainer: {
    ...commonProps.currencyNameContainer,
  },
  currencyName: {
    ...commonProps.currencyName,
    color: COLORS.ACCENT.color_accent_default_font_100,
  },
};

export const INPUT_CURRENCY_STYLES: InputCurrencyStylesType<InputCurrencyVariant> = {
  [InputCurrencyVariant.DEFAULT]: {
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
      currencyName: {
        ...commonProps.currencyName,
        color: COLORS.DISABLED.color_accentDisabled_font_50,
      },
    },
    [InputState.DISABLED_FILLED]: {
      ...defaultCommonProps,
      ...disabledCommonProps,
      currencyName: {
        ...commonProps.currencyName,
        color: COLORS.DISABLED.color_accentDisabled_font_50,
      },
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...defaultCommonProps,
      ...disabledCommonProps,
      currencyName: {
        ...commonProps.currencyName,
        color: COLORS.DISABLED.color_accentDisabled_font_50,
      },
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
