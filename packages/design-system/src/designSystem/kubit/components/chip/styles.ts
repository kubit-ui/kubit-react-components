import type { ChipVariantStyles } from '@/components/chip/types/chipTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { ChipStateType, ChipVariantType } from './variants';

type ChipVariants = keyof typeof ChipVariantType;

export const CHIP: ChipVariantStyles<ChipVariants> = {
  _closeIcon: {
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  _errorContainer: {
    display: 'flex',
  },
  _errorIcon: {
    height: cssVars.sizes_size_150,
    width: cssVars.sizes_size_150,
  },
  _errorMessage: {
    ...TEXT[TextVariantType.PARAGRAPH_CAPTION_EXTENDED],
    font_weight: cssVars.font_weight_400,
  },
  _label: {
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
    font_weight: cssVars.font_weight_400,
  },
  _leftIcon: {
    height: cssVars.sizes_size_150,
    width: cssVars.sizes_size_150,
  },
  _rangeIcon: {
    height: cssVars.sizes_size_150,
    width: cssVars.sizes_size_150,
  },
  _rangeItemSeparator: {
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
    font_weight: cssVars.font_weight_400,
  },
  _rangeItemText: {
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
    font_weight: cssVars.font_weight_400,
  },
  _rangeItemWrapper: {
    display: 'inline-flex',
  },
  align_items: 'center',
  border_radius: cssVars.radius_00,
  border_style: 'solid',
  border_width: cssVars.borders_border_50,
  [ChipVariantType.DEFAULT]: {
    $attributes: {
      'data-state': {
        [ChipStateType.DISABLED]: {
          background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
          border_color: cssVars.colors_disabled_color_accentdisabled_border_50,
        },
        [ChipStateType.ERROR]: {
          background_color: cssVars.colors_neutral_color_bg_250,
          border_color: cssVars.colors_feedback_color_feedbackerror_border_100,
        },
      },
    },
    _closeIcon: {
      $attributes: {
        'data-state': {
          [ChipStateType.DISABLED]: {
            color: cssVars.colors_neutral_color_icon_50,
          },
          [ChipStateType.ERROR]: {
            color: cssVars.colors_feedback_color_feedbackerror_icon_100,
          },
        },
      },
      color: cssVars.colors_neutral_color_icon_50,
    },
    _errorContainer: {
      $attributes: {
        'data-state': {
          [ChipStateType.ERROR]: {
            align_items: 'center',
            gap: cssVars.spacings_spacing_100,
            margin_top: cssVars.spacings_spacing_100,
          },
        },
      },
      display: 'flex',
    },
    _errorIcon: {
      $attributes: {
        'data-state': {
          [ChipStateType.ERROR]: {
            color: cssVars.colors_feedback_color_feedbackerror_icon_100,
          },
        },
      },
      padding: cssVars.spacings_spacing_0,
    },
    _errorMessage: {
      color: cssVars.colors_feedback_color_feedbackerror_font_50,
    },
    _label: {
      $attributes: {
        'data-state': {
          [ChipStateType.DISABLED]: {
            color: cssVars.colors_disabled_color_accentdisabled_font_50,
          },
          [ChipStateType.ERROR]: {
            color: cssVars.colors_feedback_color_feedbackerror_font_50,
          },
        },
      },
      color: cssVars.colors_neutral_color_icon_50,
    },
    _leftIcon: {
      $attributes: {
        'data-state': {
          [ChipStateType.DISABLED]: {
            color: cssVars.colors_neutral_color_icon_100,
          },
          [ChipStateType.ERROR]: {
            color: cssVars.colors_feedback_color_feedbackerror_icon_100,
          },
        },
      },
      color: cssVars.colors_neutral_color_icon_50,
    },
    _rangeItemSeparator: {
      $attributes: {
        'data-state': {
          [ChipStateType.DISABLED]: {
            color: cssVars.colors_neutral_color_icon_100,
          },
          [ChipStateType.ERROR]: {
            color: cssVars.colors_feedback_color_feedbackerror_font_50,
          },
        },
      },
      color: cssVars.colors_accent_color_default_icon_50,
    },
    _rangeItemText: {
      $attributes: {
        'data-state': {
          [ChipStateType.DISABLED]: {
            color: cssVars.colors_disabled_color_accentdisabled_font_50,
          },
          [ChipStateType.ERROR]: {
            color: cssVars.colors_feedback_color_feedbackerror_font_50,
          },
        },
      },
      color: cssVars.colors_accent_color_default_icon_50,
    },
    background_color: cssVars.colors_neutral_color_bg_250,
    border_color: cssVars.colors_neutral_color_border_50,
  },
  display: 'inline-flex',
  gap: cssVars.spacings_spacing_100,
  justify_content: 'center',
  padding: `${cssVars.spacings_spacing_100} ${cssVars.spacings_spacing_150}`,
};
