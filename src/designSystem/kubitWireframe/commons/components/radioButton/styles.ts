import {
  RadioButtonGroupStylesType,
  RadioButtonStateType,
} from '@/components/radioButtonGroup/types';
import { TooltipAlignType } from '@/components/tooltip/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, FONT_WEIGHT, RADIUS, SPACINGS, TEXT_ALIGN } from '../../foundations';
import { TextVariantType, TooltipVariantType } from '../variants';
import { RadioButtonGroupVariantType } from './variants';

const commonVariantsTokens = COLORS => ({
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
  radioButtonContainer: {
    ...transformShadow(RADIUS.radius_300),
    ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
  },
  radioButton: {
    border_radius: RADIUS.radius_300,
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
    height: SPACINGS.spacing_200,
    width: SPACINGS.spacing_200,
    border_radius: RADIUS.radius_100,
  },
  tooltip: {
    icon: {
      background_width: SPACINGS.spacing_100,
      height: SPACINGS.spacing_100,
      width: SPACINGS.spacing_100,
      color: COLORS.ACCENT.color_accent_default_bg_100,
      border_radius: RADIUS.radius_100,
    },
    variant: TooltipVariantType.DEFAULT,
    align: TooltipAlignType.RIGHT,
  },
});

export const getRadioButtonGroupStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): RadioButtonGroupStylesType<RadioButtonGroupVariantType> => {
  return {
    [RadioButtonGroupVariantType.DEFAULT]: {
      [RadioButtonStateType.DEFAULT]: {
        ...commonVariantsTokens(COLORS),
        radioButton: {
          ...commonVariantsTokens(COLORS).radioButton,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border_color: COLORS.NEUTRAL.color_neutral_border_100,
        },
      },
      [RadioButtonStateType.SELECTED]: {
        ...commonVariantsTokens(COLORS),
        radioButton: {
          ...commonVariantsTokens(COLORS).radioButton,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        icon: {
          ...commonVariantsTokens(COLORS).icon,
          background_color: COLORS.ACCENT.color_accent_default_icon_100,
        },
      },
      [RadioButtonStateType.DISABLED]: {
        ...commonVariantsTokens(COLORS),
        radioButton: {
          ...commonVariantsTokens(COLORS).radioButton,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border_color: COLORS.DISABLED.color_accentDisabled_border_50,
        },
      },
      [RadioButtonStateType.DISABLED_SELECTED]: {
        ...commonVariantsTokens(COLORS),
        radioButton: {
          ...commonVariantsTokens(COLORS).radioButton,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border_color: COLORS.DISABLED.color_accentDisabled_border_50,
        },
        icon: {
          ...commonVariantsTokens(COLORS).icon,
        },
      },
    },
  };
};
