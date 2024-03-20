import { TagStylesType } from '@/components/tag/types';

import { BORDERS, COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { TagOptionType, TagStatusType, TagVariantType } from './variants';

export const TAG_STYLES: TagStylesType<TagOptionType, TagVariantType, TagStatusType> = {
  [TagOptionType.HEALTHY]: {
    wrapper: {
      background_color: COLORS.FEEDBACK.color_feedback_success_bg_50,
      border_color: COLORS.FEEDBACK.color_feedback_success_border_50,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
    text: {},
  },
  [TagOptionType.ISSUE]: {
    wrapper: {
      background_color: COLORS.FEEDBACK.color_feedback_warning_bg_50,
      border_color: COLORS.FEEDBACK.color_feedback_warning_border_50,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
    text: {},
  },
  [TagOptionType.DORMANT]: {
    wrapper: {
      background_color: COLORS.FEEDBACK.color_feedback_error_bg_50,
      border_color: COLORS.FEEDBACK.color_feedback_error_border_50,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
    text: {},
  },
  [TagOptionType.DEPRECATED]: {
    wrapper: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_200,
      border_color: COLORS.NEUTRAL.color_neutral_border_50,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
    text: {},
  },
  [TagOptionType.INFORMATIVE]: {
    wrapper: {
      background_color: COLORS.FEEDBACK.color_feedback_info_bg_50,
      border_color: COLORS.FEEDBACK.color_feedback_info_border_50,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
    text: {},
  },
  [TagOptionType.CODE]: {
    wrapper: {
      background_color: COLORS.SECONDARY.color_secondary_bg_200,
      border_color: COLORS.SECONDARY.color_secondary_border_150,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
    text: {
      font_weight: FONT_WEIGHT.font_weight_500,
    },
  },
  [TagOptionType.TESTING_BORDER_TRANSPARENCY]: {
    wrapper: {
      border_width: BORDERS.border_50,
      background_color: 'transparent',
      border_color: COLORS.SECONDARY.color_secondary_border_150,
    },
    text: {
      font_weight: FONT_WEIGHT.font_weight_500,
    },
  },
  [TagOptionType.TESTING_BORDER_NO_TRANSPARENCY]: {
    wrapper: {
      border_width: BORDERS.border_50,
      background_color: COLORS.SECONDARY.color_secondary_border_150,
      border_color: COLORS.SECONDARY.color_secondary_border_150,
    },
    text: {
      font_weight: FONT_WEIGHT.font_weight_500,
    },
  },
  [TagOptionType.TESTING_NO_BORDER_TRANSPARENCY]: {
    wrapper: {
      border_width: '0',
      background_color: 'transparent',
      border_color: COLORS.SECONDARY.color_secondary_border_150,
    },
    text: {
      font_weight: FONT_WEIGHT.font_weight_500,
    },
  },
  [TagOptionType.TESTING_NO_BORDER_NO_TRANSPARENCY]: {
    wrapper: {
      border_width: '0',
      background_color: COLORS.SECONDARY.color_secondary_border_150,
      border_color: COLORS.SECONDARY.color_secondary_border_150,
    },
    text: {
      font_weight: FONT_WEIGHT.font_weight_500,
    },
  },
  [TagVariantType.SQUARE]: {
    [TagStatusType.NORMAL]: {
      wrapper: {
        padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
        display: 'flex',
        align_items: 'center',
        justify_content: 'center',
        gap: SPACINGS.spacing_100,
      },
      text: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      icon: {
        color: COLORS.NEUTRAL.color_neutral_font_50,
        height: SIZES.size_200,
        width: SIZES.size_200,
      },
    },
  },
  [TagVariantType.ARROW]: {
    [TagStatusType.NORMAL]: {
      wrapper: {
        padding: `${SPACINGS.spacing_100}`,
        display: 'flex',
        align_items: 'center',
        justify_content: 'center',
        gap: SPACINGS.spacing_100,
        border_right_width: '0',
      },
      text: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_MONO,
        font_weight: FONT_WEIGHT.font_weight_500,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      icon: {},
    },
  },
  [TagVariantType.RIBBON]: {
    [TagStatusType.NORMAL]: {
      wrapper: {
        padding: `${SPACINGS.spacing_100}`,
        display: 'flex',
        align_items: 'center',
        justify_content: 'center',
        gap: SPACINGS.spacing_100,
        border_left_width: '0',
      },
      text: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_MONO,
        font_weight: FONT_WEIGHT.font_weight_500,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      icon: {},
    },
  },
};
