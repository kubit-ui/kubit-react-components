import { RadioButtonStateType } from '@/components/radioButtonGroup/components/radioButton/types/state';
import { RadioButtonGroupStylesType } from '@/components/radioButtonGroup/types/radioButtonGroup';
import { TooltipAlignType } from '@/components/tooltip/types/tooltipAlign';

import { BORDERS, RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SIZES } from '../../foundations/sizes';
import { SPACINGS } from '../../foundations/spacings';
import { FONT_WEIGHT, PARAGRAPH, TEXT_ALIGN } from '../../foundations/typography';
import { TextVariantType } from '../text/variants';
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
    border_radius: RADIUS.radius_100,
    height: SPACINGS.spacing_400,
    width: SPACINGS.spacing_400,
    border_style: 'solid',
    border_width: BORDERS.border_50,
  },
  infoIconContainer: {
    display: 'inline-flex',
    //calc to position the icon in the middle of the line height is: (line_height - icon_height) / 2
    translate: `0rem calc((${PARAGRAPH.LARGE.DESKTOP.line_height} - ${SIZES.size_150})/2)`,
    margin_left: SPACINGS.spacing_100,
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
    height: SPACINGS.spacing_300,
    width: SPACINGS.spacing_300,
    border_radius: RADIUS.radius_100,
  },
  tooltip: {
    icon: {
      background_width: SPACINGS.spacing_350,
      height: SIZES.size_200,
      width: SIZES.size_200,
      color: COLORS.ACCENT.color_accent_default_bg_100,
      border_radius: RADIUS.radius_100,
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
