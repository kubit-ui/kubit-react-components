import {
  StepperNumberOrientationType,
  StepperNumberStateType,
  StepperNumberStylesType,
} from '@/components/stepperNumber/types';

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
import { StepperNumberVariantType } from './variants';

const commonStepCircleTokens = {
  display: 'flex',
  justify_content: 'center',
  align_items: 'center',
  border_radius: RADIUS.radius_00,
  width: '1.75rem',
  height: '1.75rem',
  border_style: 'solid',
  border_width: BORDERS.border_100,
};

const commonStepVerticalTokens = {
  description_font_align: TEXT_ALIGN.left,
  iconSelected: {
    width: SIZES.size_250,
    height: SIZES.size_250,
    color: COLORS.ACCENT.color_accent_default_icon_100,
  },
  stepContainer: {
    display: 'flex',
    flex_direction: 'row',
    gap: SPACINGS.spacing_100,
  },
  stepNameContainer: {
    padding_top: SPACINGS.spacing_100,
    padding_bottom: '2.25rem',
    isLast: {
      padding_bottom: SPACINGS.spacing_0,
    },
  },
  stepIndex: {
    color: COLORS.NEUTRAL.color_neutral_font_250,
    font_weight: FONT_WEIGHT.font_weight_600,
  },
};
const commonStepHorizontalTokens = {
  iconSelected: {
    width: SIZES.size_250,
    height: SIZES.size_250,
    color: COLORS.ACCENT.color_accent_default_icon_100,
  },
  stepContainer: {
    display: 'flex',
    flex_direction: 'row',
  },
  stepIndex: {
    color: COLORS.NEUTRAL.color_neutral_font_250,
    font_weight: FONT_WEIGHT.font_weight_600,
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  },
};
const commonStepBarTokens = {
  flex: 1,
  width: SPACINGS.spacing_100,
  height: SPACINGS.spacing_100,
};

export const STEPPER_NUMBER_STYLES: StepperNumberStylesType<StepperNumberVariantType> = {
  [StepperNumberVariantType.DEFAULT]: {
    [StepperNumberOrientationType.VERTICAL]: {
      container: {
        display: 'flex',
        flex_direction: 'column',
      },
      [StepperNumberStateType.ACTIVE]: {
        ...commonStepVerticalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.SECONDARY.color_secondary_bg_100,
          border_color: COLORS.SECONDARY.color_secondary_bg_100,
        },
        stepName: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_50,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.SECONDARY.color_secondary_bg_100,
        },
      },
      [StepperNumberStateType.COMPLETED]: {
        ...commonStepVerticalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.NEUTRAL.color_neutral_font_250,
          border_color: COLORS.ACCENT.color_accent_default_border_100,
        },
        stepName: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_50,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.SECONDARY.color_secondary_bg_100,
        },
      },
      [StepperNumberStateType.INACTIVE]: {
        ...commonStepVerticalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
          border_color: COLORS.NEUTRAL.color_neutral_border_250,
        },
        stepName: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          font_weight: FONT_WEIGHT.font_weight_400,
          color: COLORS.NEUTRAL.color_neutral_font_50,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
        },
      },
    },
    [StepperNumberOrientationType.HORIZONTAL]: {
      container: {
        display: 'flex',
        flex_direction: 'row',
        justify_content: 'center',
      },
      [StepperNumberStateType.ACTIVE]: {
        ...commonStepHorizontalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.SECONDARY.color_secondary_bg_100,
          border_color: COLORS.SECONDARY.color_secondary_bg_100,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.SECONDARY.color_secondary_bg_100,
        },
      },
      [StepperNumberStateType.COMPLETED]: {
        ...commonStepHorizontalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.NEUTRAL.color_neutral_font_250,
          border_color: COLORS.ACCENT.color_accent_default_border_100,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.SECONDARY.color_secondary_bg_100,
        },
      },
      [StepperNumberStateType.INACTIVE]: {
        ...commonStepHorizontalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
          border_color: COLORS.NEUTRAL.color_neutral_border_250,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
        },
      },
    },
  },
  [StepperNumberVariantType.ALTERNATIVE]: {
    [StepperNumberOrientationType.VERTICAL]: {
      container: {
        display: 'flex',
        flex_direction: 'column',
      },
      [StepperNumberStateType.ACTIVE]: {
        ...commonStepVerticalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.SECONDARY.color_secondary_bg_100,
          border_color: COLORS.SECONDARY.color_secondary_bg_100,
        },
        stepName: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_250,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.SECONDARY.color_secondary_bg_100,
        },
      },
      [StepperNumberStateType.COMPLETED]: {
        ...commonStepVerticalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.NEUTRAL.color_neutral_font_250,
          border_color: COLORS.NEUTRAL.color_neutral_font_250,
        },
        stepName: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_250,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.NEUTRAL.color_neutral_font_250,
        },
      },
      [StepperNumberStateType.INACTIVE]: {
        ...commonStepVerticalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
          border_color: COLORS.NEUTRAL.color_neutral_border_250,
        },
        stepName: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          font_weight: FONT_WEIGHT.font_weight_400,
          color: COLORS.NEUTRAL.color_neutral_font_250,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
        },
      },
    },
    [StepperNumberOrientationType.HORIZONTAL]: {
      container: {
        display: 'flex',
        flex_direction: 'row',
        justify_content: 'center',
      },
      [StepperNumberStateType.ACTIVE]: {
        ...commonStepHorizontalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.SECONDARY.color_secondary_bg_100,
          border_color: COLORS.SECONDARY.color_secondary_bg_100,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.SECONDARY.color_secondary_bg_100,
        },
      },
      [StepperNumberStateType.COMPLETED]: {
        ...commonStepHorizontalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.ACCENT.color_accent_default_bg_150,
          border_color: COLORS.NEUTRAL.color_neutral_border_250,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.ACCENT.color_accent_default_bg_150,
        },
      },
      [StepperNumberStateType.INACTIVE]: {
        ...commonStepHorizontalTokens,
        stepCircle: {
          ...commonStepCircleTokens,
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
          border_color: COLORS.NEUTRAL.color_neutral_border_250,
        },
        stepBar: {
          ...commonStepBarTokens,
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
        },
      },
    },
  },
};
