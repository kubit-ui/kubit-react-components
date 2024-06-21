import { StepperProgressCommonProps, StepperProgressStylesType } from '@/components';

import { COLORS, FONT_WEIGHT, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { StepperProgressVariants } from './variants';

const commonProps: StepperProgressCommonProps = {
  container: {
    display: 'flex',
    flex_direction: 'column',
    width: 'auto',
  },
  progress: {
    width: '100%',
    height: SPACINGS.spacing_100,
    border_style: 'none',
    webkitProgressBar: {
      background_color: COLORS.NEUTRAL.color_neutral_border_200,
      border_style: 'none',
    },
    webkitProgressValue: {
      background_color: COLORS.ACCENT.color_accent_default_bg_100,
      border_style: 'none',
    },
    mozProgressBar: {
      background_color: COLORS.ACCENT.color_accent_default_bg_100,
      border_style: 'none',
    },
  },
  helpTextContainer: {
    width: 'fit-content',
    margin_top: SPACINGS.spacing_150,
  },
};

export const STEPPER_PROGRESS_STYLES: StepperProgressStylesType<StepperProgressVariants> = {
  [StepperProgressVariants.DEFAULT]: {
    ...commonProps,
    currentStep: {
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_600,
      color: COLORS.NEUTRAL.color_neutral_font_50,
    },
    maxStep: {
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.NEUTRAL.color_neutral_font_50,
    },
  },

  [StepperProgressVariants.ALTERNATIVE]: {
    ...commonProps,
    currentStep: {
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_600,
      color: COLORS.NEUTRAL.color_neutral_font_250,
    },
    maxStep: {
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.NEUTRAL.color_neutral_font_250,
    },
  },
};
