import {
  RadioButtonGroupStylesType,
  RadioButtonStateType,
} from '@/components/radioButtonGroup/types';
import { TooltipAlignType } from '@/components/tooltip/types';

import {
  BORDERS,
  COLORS,
  FONT_WEIGHT,
  RADIUS,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
} from '../../foundations';
import { TextVariantType } from '../text';
import { TooltipVariantType } from '../variants';
import { RadioButtonGroupVariantType } from './variants';

const commonVariantsTokens = {
  title: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    font_weight: FONT_WEIGHT.font_weight_500,
    text_align: TEXT_ALIGN.left,
    margin_bottom: SPACINGS.spacing_150,
    margin_right: SPACINGS.spacing_150,
  },
  rowContainer: {
    row_gap: SPACINGS.spacing_150,
    column_gap: SPACINGS.spacing_150,
    margin_bottom: SPACINGS.spacing_400,
  },
  radioButton: {
    border_radius: RADIUS.radius_circle,
    height: SPACINGS.spacing_400,
    width: SPACINGS.spacing_400,
    border_style: 'solid',
    border_width: BORDERS.border_50,
  },
  label: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_500,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  sublabel: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  icon: {
    height: SIZES.size_150,
    width: SIZES.size_150,
    border_radius: RADIUS.radius_circle,
  },
  tooltip: {
    icon: {
      background_width: SIZES.size_150,
      height: SIZES.size_150,
      width: SIZES.size_150,
    },
    variant: TooltipVariantType.DEFAULT,
    align: TooltipAlignType.RIGHT,
  },
};

const radioButtonDefaultTokens = {
  [RadioButtonStateType.DEFAULT]: {
    ...commonVariantsTokens,
    radioButton: {
      ...commonVariantsTokens.radioButton,
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      border_color: COLORS.NEUTRAL.color_neutral_border_100,
    },
  },
  [RadioButtonStateType.SELECTED]: {
    ...commonVariantsTokens,
    radioButton: {
      ...commonVariantsTokens.radioButton,
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      border_color: COLORS.ACCENT.color_accent_default_border_100,
    },
    icon: {
      ...commonVariantsTokens.icon,
      background_color: COLORS.ACCENT.color_accent_default_icon_100,
    },
  },
  [RadioButtonStateType.DISABLED]: {
    ...commonVariantsTokens,
    radioButton: {
      ...commonVariantsTokens.radioButton,
      cursor: 'not-allowed',
      background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
      border_color: COLORS.DISABLED.color_accentDisabled_border_50,
    },
  },
  [RadioButtonStateType.DISABLED_SELECTED]: {
    ...commonVariantsTokens,
    radioButton: {
      ...commonVariantsTokens.radioButton,
      cursor: 'not-allowed',
      background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
      border_color: COLORS.DISABLED.color_accentDisabled_border_50,
    },
    icon: {
      ...commonVariantsTokens.icon,
      background_color: COLORS.DISABLED.color_accentDisabled_icon_50,
    },
  },
};

export const RADIO_BUTTON_GROUP_STYLES: RadioButtonGroupStylesType<RadioButtonGroupVariantType> = {
  [RadioButtonGroupVariantType.DEFAULT]: radioButtonDefaultTokens,
};
