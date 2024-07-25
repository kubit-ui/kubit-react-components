import {
  InputDigitSequenceStateType,
  InputDigitSequenceStylesType,
} from '@/components/inputDigitSequence/types';
import { DeviceBreakpointsType } from '@/types';

import {
  BORDERS,
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  PARAGRAPH,
  SIZES,
  SPACINGS,
} from '../../foundations';
import { ButtonSizeType } from '../button';
import { TextVariantType } from '../text';
import { InputDigitSequenceVariant } from './variants';

const commonProps = {
  rootContainer: {
    row_gap: SPACINGS.spacing_150,
  },
  titleTooltipContainer: {
    display: 'flex',
    flex_direction: 'row',
    align_items: 'center',
    gap: SPACINGS.spacing_100,
  },
  title: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_600,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  inputDigitsContainer: {
    column_gap: SPACINGS.spacing_150,
  },
  inputDigitContainer: {
    opacity: '1',
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_0}`,
    width: SPACINGS.spacing_100_percent,
    max_width: SPACINGS.spacing_100_percent,
    min_width: SPACINGS.spacing_100_percent,
    height: SPACINGS.spacing_500,
    border_width: BORDERS.border_50,
    border_color: COLORS.NEUTRAL.color_neutral_border_50,
  },
  inputDigitContainerError: {
    border_color: COLORS.FEEDBACK.color_feedbackError_border_100,
  },
  inputDigitContainerfocus: {
    border_width: BORDERS.border_100,
  },
  inputDigitAndNumberContainer: {
    width: SPACINGS.spacing_100_percent,
    row_gap: SPACINGS.spacing_150,
  },
  inputDigitText: {
    font_size: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].font_size,
    line_height: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].line_height,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  inputNumber: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_100,
  },
  inputDigitTextTypePassword: {
    font_family: FONT_FAMILY.font_family_digit_password_small_square,
  },
  errorContainer: {
    gap: SPACINGS.spacing_100,
  },
  errorText: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.FEEDBACK.color_feedbackError_font_50,
  },
  errorIcon: {
    width: SIZES.size_150,
    height: SIZES.size_150,
    color: COLORS.FEEDBACK.color_feedbackError_icon_100,
  },
  helpText: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_300,
    color: COLORS.NEUTRAL.color_neutral_font_100,
  },
  actionButtonSize: ButtonSizeType.SMALL,
};

export const INPUT_DIGIT_SEQUENCE_STYLES: InputDigitSequenceStylesType<InputDigitSequenceVariant> =
  {
    [InputDigitSequenceVariant.DEFAULT]: {
      [InputDigitSequenceStateType.DEFAULT]: {
        ...commonProps,
      },
      [InputDigitSequenceStateType.DISABLED]: {
        ...commonProps,
        inputDigitContainer: {
          ...commonProps.inputDigitContainer,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border_color: COLORS.DISABLED.color_accentDisabled_border_50,
        },
      },
      [InputDigitSequenceStateType.BLOCKED_BY_SYSTEM]: {
        ...commonProps,
        inputDigitContainer: {
          ...commonProps.inputDigitContainer,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border_color: COLORS.DISABLED.color_accentDisabled_border_50,
        },
        inputDigitTextTypePassword: {
          font_family: FONT_FAMILY.font_family_digit_password_large_square,
        },
      },
    },
  };
