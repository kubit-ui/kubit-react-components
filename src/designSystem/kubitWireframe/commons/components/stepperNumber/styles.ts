import {
  StepperNumberOrientationType,
  StepperNumberStateType,
  StepperNumberStylesType,
} from '@/components/stepperNumber/types';
import {
  shadowAfterStylesSpecificProps,
  transformShadow,
} from '@/designSystem/kubitWireframe/utils/wireframe';

import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS, TEXT_ALIGN } from '../../foundations';
import { TextVariantType } from '../text';
import { StepperNumberVariantType } from './variants';

export const getStepperNumberStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): StepperNumberStylesType<StepperNumberVariantType> => {
  const commonStepCircleTokens = {
    display: 'flex',
    justify_content: 'center',
    align_items: 'center',
    border_radius: RADIUS.radius_275,
    min_width: SPACINGS.spacing_400,
    min_height: SPACINGS.spacing_400,
    max_height: SPACINGS.spacing_400,
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
    },
  };
  const commonStepBarTokens = {
    flex: 1,
    width: SPACINGS.spacing_100,
    height: SPACINGS.spacing_100,
  };

  return {
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
            background_color: COLORS.BRAND.color_brand_bg_50,
            border_color: COLORS.NEUTRAL.color_neutral_border_50,
          },
          stepName: {
            font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
            font_weight: FONT_WEIGHT.font_weight_600,
            color: COLORS.NEUTRAL.color_neutral_font_50,
          },
          stepBar: {
            ...commonStepBarTokens,
            background_color: COLORS.SECONDARY.color_secondary_bg_100,
            height: SPACINGS.spacing_50,
          },
        },
        [StepperNumberStateType.COMPLETED]: {
          ...commonStepVerticalTokens,
          stepCircle: {
            ...commonStepCircleTokens,
            background_color: COLORS.SECONDARY.color_secondary_bg_150,
            border_color: COLORS.NEUTRAL.color_neutral_border_50,
            ...transformShadow(RADIUS.radius_300),
            ...shadowAfterStylesSpecificProps(
              RADIUS.radius_300,
              COLORS.BRAND.color_brand_bg_50,
              '2px',
              SPACINGS.spacing_400,
              SPACINGS.spacing_400
            ),
          },
          stepName: {
            font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
            font_weight: FONT_WEIGHT.font_weight_600,
            color: COLORS.NEUTRAL.color_neutral_font_50,
          },
          stepBar: {
            ...commonStepBarTokens,
            background_color: COLORS.SECONDARY.color_secondary_bg_100,
            height: SPACINGS.spacing_50,
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
            background_color: COLORS.SECONDARY.color_secondary_bg_200,
            height: SPACINGS.spacing_50,
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
            background_color: COLORS.BRAND.color_brand_bg_50,
            border_color: COLORS.NEUTRAL.color_neutral_border_50,
          },
          stepBar: {
            ...commonStepBarTokens,
            background_color: COLORS.SECONDARY.color_secondary_bg_100,
            height: SPACINGS.spacing_50,
          },
        },
        [StepperNumberStateType.COMPLETED]: {
          ...commonStepHorizontalTokens,
          stepCircle: {
            ...commonStepCircleTokens,
            background_color: COLORS.SECONDARY.color_secondary_bg_150,
            border_color: COLORS.NEUTRAL.color_neutral_border_50,
            ...transformShadow(RADIUS.radius_300),
            ...shadowAfterStylesSpecificProps(
              RADIUS.radius_300,
              COLORS.BRAND.color_brand_bg_50,
              '2px',
              SPACINGS.spacing_400,
              SPACINGS.spacing_400
            ),
          },
          stepBar: {
            ...commonStepBarTokens,
            background_color: COLORS.SECONDARY.color_secondary_bg_100,
            height: SPACINGS.spacing_50,
          },
        },
        [StepperNumberStateType.INACTIVE]: {
          ...commonStepHorizontalTokens,
          stepCircle: {
            ...commonStepCircleTokens,
            background_color: COLORS.SECONDARY.color_secondary_bg_200,
            border_color: COLORS.SECONDARY.color_secondary_bg_200,
          },
          stepBar: {
            ...commonStepBarTokens,
            background_color: COLORS.SECONDARY.color_secondary_bg_200,
            height: SPACINGS.spacing_50,
          },
        },
      },
    },
  };
};
