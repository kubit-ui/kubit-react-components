import { IconHighlightedSizeType } from '@/components/iconHighlighted/types';
import {
  InputContentPosition,
  InputHelpMessagePosition,
  InputState,
} from '@/components/input/types';
import { InputPhoneVariantProps } from '@/components/inputPhone/types';

import { COLORS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { IconHighlightedVariantType } from '../iconHighlighted/variants';
import { TextVariantType } from '../text/variants';
import { InputPhoneVariant } from './variants';

const commonProps = {
  inputVariant: InputPhoneVariant.DEFAULT,
  affixContainer: {
    display: 'inline-flex',
    justify_content: 'center',
    align_items: 'center',
    width: 'auto',
    height: SPACINGS.spacing_600,
    padding: SPACINGS.spacing_250,
    gap: SPACINGS.spacing_100,
    border_radius: RADIUS.radius_00,
    margin_right: 'inherit',
  },
  affixContainerPosition: InputContentPosition.INNER,
  affix: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  affixIcon: {
    height: SIZES.size_250,
    width: SIZES.size_250,
  },
  affixIconHighlighted: {
    variant: IconHighlightedVariantType.SQUARE,
    size: IconHighlightedSizeType.EXTRA_SMALL,
    backgroundColor: COLORS.ACCENT.color_accent_default_icon_100,
  },
  affixIconContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  helpMessage: {
    position: InputHelpMessagePosition.BOTTOM,
  },
};

const defaultCommonProps = {
  ...commonProps,
  inputVariant: InputPhoneVariant.DEFAULT,
};

const disabledCommonProps = {
  affix: {
    ...commonProps.affix,
    color: COLORS.ACCENT.color_accent_default_bg_100,
  },
};

export const INPUT_PHONE_STYLES: InputPhoneVariantProps<InputPhoneVariant> = {
  [InputPhoneVariant.DEFAULT]: {
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
      ...disabledCommonProps,
    },
    [InputState.DISABLED_FILLED]: {
      ...defaultCommonProps,
      ...disabledCommonProps,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...defaultCommonProps,
      ...disabledCommonProps,
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
  [InputPhoneVariant.AFFIX_OUT]: {
    [InputState.EMPTY]: {
      ...commonProps,
      affixContainerPosition: InputContentPosition.OUT,
    },
    [InputState.FILLED]: {
      ...commonProps,
      affixContainerPosition: InputContentPosition.OUT,
    },
    [InputState.ACTIVE]: {
      ...commonProps,
      affixContainerPosition: InputContentPosition.OUT,
    },
    [InputState.DISABLED_EMPTY]: {
      ...commonProps,
      affixContainerPosition: InputContentPosition.OUT,
    },
    [InputState.DISABLED_FILLED]: {
      ...commonProps,
      affixContainerPosition: InputContentPosition.OUT,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...commonProps,
      affixContainerPosition: InputContentPosition.OUT,
    },
    [InputState.ERROR_EMPTY]: {
      ...commonProps,
      affixContainerPosition: InputContentPosition.OUT,
    },
    [InputState.ERROR_FILLED]: {
      ...commonProps,
      affixContainerPosition: InputContentPosition.OUT,
    },
    [InputState.ERROR_ACTIVE]: {
      ...commonProps,
      affixContainerPosition: InputContentPosition.OUT,
    },
    [InputState.ERROR_FILLED_WITH_INFO]: {
      ...commonProps,
      affixContainerPosition: InputContentPosition.OUT,
    },
  },
};
