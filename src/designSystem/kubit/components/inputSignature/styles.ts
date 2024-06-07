import { InputSignatureState, InputSignatureStyles } from '@/components/inputSignature/types';

import { BORDERS, COLORS, FONT_WEIGHT, SPACINGS } from '../../foundations';
import { TextVariantType } from '../variants';
import { InputSignatureVariants } from './variants';

const commonContainerTokens = {
  min_heigth: '188px',
  border_width: BORDERS.border_100,
  border_style: 'dashed',
  border_radius: '16px',
  width: '100%',
  position: 'relative',
  background_color: COLORS.NEUTRAL.color_neutral_bg_250,
};
const placeholderContainer = {
  padding: `${SPACINGS.spacing_350} ${SPACINGS.spacing_250}`,
  position: 'absolute',
  height: SPACINGS.spacing_100_percent,
  width: SPACINGS.spacing_100_percent,
  display: 'flex',
  justify_content: 'center',
  align_items: 'center',
  top: '0',
  left: '0',
};
const placeholderText = {
  font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
  font_weight: FONT_WEIGHT.font_weight_400,
  color: COLORS.NEUTRAL.color_neutral_font_100,
};

export const INPUT_SIGNATURE_STYLES: InputSignatureStyles<InputSignatureVariants> = {
  [InputSignatureVariants.DEFAULT]: {
    signatureStyle: {
      color: COLORS.NEUTRAL.color_neutral_font_50,
      lineWidth: 2,
    },
    [InputSignatureState.DEFAULT]: {
      container: {
        ...commonContainerTokens,
        border_color: COLORS.NEUTRAL.color_neutral_border_150,
      },
      placeholderContainer,
      placeholderText,
    },
    [InputSignatureState.ACTIVE]: {
      container: {
        ...commonContainerTokens,
        border_color: COLORS.ACCENT.color_accent_default_border_50,
      },
      placeholderContainer,
      placeholderText,
    },
    [InputSignatureState.DISABLED]: {
      container: {
        ...commonContainerTokens,
        border_color: COLORS.DISABLED.color_accentDisabled_border_100,
      },
      placeholderContainer,
      placeholderText: {
        ...placeholderText,
        color: COLORS.DISABLED.color_accentDisabled_font_100,
      },
    },
    [InputSignatureState.ERROR]: {
      container: {
        ...commonContainerTokens,
        background_color: COLORS.FEEDBACK.color_feedback_error_bg_50,
        border_color: COLORS.FEEDBACK.color_feedback_error_border_50,
      },
      placeholderContainer,
      placeholderText: {
        color: COLORS.FEEDBACK.color_feedbackError_font_50,
      },
    },
    [InputSignatureState.FILLED]: {
      container: {
        ...commonContainerTokens,
        border_color: COLORS.NEUTRAL.color_neutral_border_150,
      },
      placeholderContainer,
      placeholderText,
    },
  },
};
