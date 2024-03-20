// Foundations
import {
  ValidationStatusCommonProps,
  ValidationStatusState,
  ValidationStatusStylesType,
} from '@/components/validationStatus/types';

import { COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { ValidationStatusVariants } from './variants';

const commonProps: ValidationStatusCommonProps = {
  container: {
    display: 'flex',
    flex_direction: 'column',
    width: '100%',
    height: 'auto',
    margin_top: SPACINGS.spacing_50,
    gap: SPACINGS.spacing_300,
  },
  row: {
    display: 'flex',
    width: '100%',
    align_items: 'flex-start',
    gap: SPACINGS.spacing_100,
  },
};

export const VALIDATION_STATUS_STYLES: ValidationStatusStylesType<ValidationStatusVariants> = {
  [ValidationStatusVariants.DEFAULT]: {
    ...commonProps,
    [ValidationStatusState.DEFAULT]: {
      icon: {
        color: COLORS.NEUTRAL.color_neutral_icon_50,
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
      explainText: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [ValidationStatusState.SUCCESS]: {
      icon: {
        color: COLORS.FEEDBACK.color_feedback_success_icon_50,
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
      explainText: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [ValidationStatusState.ERROR]: {
      icon: {
        color: COLORS.FEEDBACK.color_feedbackError_icon_100,
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
      explainText: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        color: COLORS.FEEDBACK.color_feedbackError_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
  },
};
