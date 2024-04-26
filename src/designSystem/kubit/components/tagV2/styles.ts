import { TagStylesTypeV2 } from '@/components';

import { BORDERS, COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { TagVariantTypeV2 } from './variants';

const commonVariantProps = {
  container: {
    width: 'fit-content',
    max_width: '100%',
    display: 'flex',
    flex_direction: 'row',
    align_items: 'center',
    gap: SPACINGS.spacing_100,
    padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
  },
  icon: {
    color: COLORS.NEUTRAL.color_neutral_font_50,
    height: SIZES.size_200,
    width: SIZES.size_200,
  },
  label: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_600,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    overflow: 'hidden',
    white_space: 'nowrap',
    text_overflow: 'ellipsis',
  },
};

export const TAG_STYLES_V2: TagStylesTypeV2<TagVariantTypeV2> = {
  [TagVariantTypeV2.HEALTHY]: {
    ...commonVariantProps,
    container: {
      ...commonVariantProps.container,
      background_color: COLORS.FEEDBACK.color_feedback_success_bg_50,
      border_color: COLORS.FEEDBACK.color_feedback_success_border_50,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
  },
  [TagVariantTypeV2.DORMANT]: {
    ...commonVariantProps,
    container: {
      ...commonVariantProps.container,
      background_color: COLORS.FEEDBACK.color_feedback_error_bg_50,
      border_color: COLORS.FEEDBACK.color_feedback_error_border_50,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
  },
  [TagVariantTypeV2.ISSUE]: {
    ...commonVariantProps,
    container: {
      ...commonVariantProps.container,
      background_color: COLORS.FEEDBACK.color_feedback_warning_bg_50,
      border_color: COLORS.FEEDBACK.color_feedback_warning_border_50,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
  },
  [TagVariantTypeV2.CODE]: {
    ...commonVariantProps,
    container: {
      ...commonVariantProps.container,
      background_color: COLORS.SECONDARY.color_secondary_bg_200,
      border_color: COLORS.SECONDARY.color_secondary_border_150,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
    label: {
      ...commonVariantProps.label,
      font_weight: FONT_WEIGHT.font_weight_500,
    },
  },
  [TagVariantTypeV2.DEPRECATED]: {
    ...commonVariantProps,
    container: {
      ...commonVariantProps.container,
      background_color: COLORS.NEUTRAL.color_neutral_bg_200,
      border_color: COLORS.NEUTRAL.color_neutral_border_50,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
  },
  [TagVariantTypeV2.INFORMATIVE]: {
    ...commonVariantProps,
    container: {
      ...commonVariantProps.container,
      background_color: COLORS.FEEDBACK.color_feedback_info_bg_50,
      border_color: COLORS.FEEDBACK.color_feedback_info_border_50,
      border_width: BORDERS.border_50,
      border_style: 'solid',
    },
  },
};
