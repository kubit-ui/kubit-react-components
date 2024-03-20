// Foundations
import { ChipStylesType } from '@/components/chip/types';

import { BORDERS, COLORS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { ChipStateType, ChipVariantType } from './variants';

const commonChipContainer = {
  display: 'inline-flex',
  justify_content: 'center',
  align_items: 'center',
  border_style: 'solid',
  border_width: BORDERS.border_50,
  gap: SPACINGS.spacing_100,
  border_radius: RADIUS.radius_00,
  padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
};

const commonLeftIcon = {
  width: SIZES.size_150,
  height: SIZES.size_150,
};

const commonLabel = {
  font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
  font_weight: FONT_WEIGHT.font_weight_400,
};

const commonRangeItemWrapper = {
  display: 'inline-flex',
  align_items: 'center',
  justify_content: 'center',
  gap: SPACINGS.spacing_100,
  margin_left: SPACINGS.spacing_100,
};

const commonRangeItemText = {
  font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
  font_weight: FONT_WEIGHT.font_weight_400,
};

const commonRangeItemSeparator = {
  font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
  font_weight: FONT_WEIGHT.font_weight_400,
};

const commonRangeIcon = {
  // review
  width: SIZES.size_150,
  height: SIZES.size_150,
};

const commonCloseIcon = {
  width: SIZES.size_250,
  height: SIZES.size_250,
};

export const CHIP_STYLES: ChipStylesType<ChipVariantType> = {
  [ChipVariantType.DEFAULT]: {
    [ChipStateType.DEFAULT]: {
      chipContainer: {
        ...commonChipContainer,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
      },
      leftIcon: {
        ...commonLeftIcon,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
      label: {
        ...commonLabel,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
      rangeItemWrapper: {
        ...commonRangeItemWrapper,
      },
      rangeItemText: {
        ...commonRangeItemText,
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
      rangeItemSeparator: {
        ...commonRangeItemSeparator,
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
      rangeIcon: {
        ...commonRangeIcon,
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
      closeIcon: {
        ...commonCloseIcon,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [ChipStateType.ERROR]: {
      chipContainer: {
        ...commonChipContainer,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_color: COLORS.FEEDBACK.color_feedbackError_border_100,
      },
      leftIcon: {
        ...commonLeftIcon,
        color: COLORS.FEEDBACK.color_feedbackError_icon_100,
      },
      label: {
        ...commonLabel,
        color: COLORS.FEEDBACK.color_feedbackError_font_50,
      },
      rangeItemWrapper: {
        ...commonRangeItemWrapper,
      },
      rangeItemText: {
        ...commonRangeItemText,
        color: COLORS.FEEDBACK.color_feedbackError_font_50,
      },
      rangeItemSeparator: {
        ...commonRangeItemSeparator,
        color: COLORS.FEEDBACK.color_feedbackError_font_50,
      },
      rangeIcon: {
        ...commonRangeIcon,
        color: COLORS.FEEDBACK.color_feedbackError_icon_100,
      },
      closeIcon: {
        ...commonCloseIcon,
        color: COLORS.FEEDBACK.color_feedbackError_icon_100,
      },
      errorContainer: {
        display: 'flex',
        align_items: 'center',
        gap: SPACINGS.spacing_100,
        margin_top: SPACINGS.spacing_100,
      },
      errorIcon: {
        color: COLORS.FEEDBACK.color_feedbackError_icon_100,
        width: SIZES.size_150,
        height: SIZES.size_150,
      },
      errorMessage: {
        font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
        color: COLORS.FEEDBACK.color_feedbackError_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [ChipStateType.DISABLED]: {
      chipContainer: {
        ...commonChipContainer,
        background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
        border_color: COLORS.DISABLED.color_accentDisabled_border_50,
      },
      leftIcon: {
        ...commonLeftIcon,
        color: COLORS.NEUTRAL.color_neutral_icon_100,
      },
      label: {
        ...commonLabel,
        color: COLORS.DISABLED.color_accentDisabled_font_50,
      },
      rangeItemWrapper: {
        ...commonRangeItemWrapper,
      },
      rangeItemText: {
        ...commonRangeItemText,
        color: COLORS.DISABLED.color_accentDisabled_font_50,
      },
      rangeItemSeparator: {
        ...commonRangeItemSeparator,
        color: COLORS.NEUTRAL.color_neutral_icon_100,
      },
      rangeIcon: {
        ...commonRangeIcon,
        color: COLORS.NEUTRAL.color_neutral_icon_100,
      },
      closeIcon: {
        ...commonCloseIcon,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
  },
};
