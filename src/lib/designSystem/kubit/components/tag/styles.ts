import type { TagVariantStyles } from '@/components/tag/types/tagTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { TagVariants as TagVariantsType } from './variants';

type TagVariants = keyof typeof TagVariantsType;

export const TAG: TagVariantStyles<TagVariants> = {
  _icon: {
    color: cssVars.colors_neutral_color_font_50,
    height: cssVars.sizes_size_200,
    width: cssVars.sizes_size_200,
  },
  _label: {
    color: cssVars.colors_neutral_color_font_50,
    font_weight: cssVars.font_weight_600,
    overflow: 'hidden',
    text_overflow: 'ellipsis',
    white_space: 'nowrap',
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
  },
  align_items: 'center',
  display: 'flex',
  flex_direction: 'row',
  gap: cssVars.spacings_spacing_100,
  max_width: cssVars.spacings_spacing_100_percent,
  padding: `${cssVars.spacings_spacing_100} ${cssVars.spacings_spacing_150}`,
  [TagVariantsType.CODE]: {
    _label: {
      font_weight: cssVars.font_weight_500,
    },
    background_color: cssVars.colors_secondary_color_bg_200,
    border_color: cssVars.colors_secondary_color_border_150,
  },
  [TagVariantsType.DEPRECATED]: {
    background_color: cssVars.colors_neutral_color_bg_200,
    border_color: cssVars.colors_neutral_color_border_50,
  },
  [TagVariantsType.DORMANT]: {
    background_color: cssVars.colors_feedback_color_error_bg_50,
    border_color: cssVars.colors_feedback_color_error_border_50,
  },
  [TagVariantsType.HEALTHY]: {
    background_color: cssVars.colors_feedback_color_success_bg_50,
    border_color: cssVars.colors_feedback_color_success_border_50,
  },
  [TagVariantsType.INFORMATIVE]: {
    background_color: cssVars.colors_feedback_color_info_bg_50,
    border_color: cssVars.colors_feedback_color_info_border_50,
  },
  [TagVariantsType.ISSUE]: {
    background_color: cssVars.colors_feedback_color_warning_bg_50,
    border_color: cssVars.colors_feedback_color_warning_border_50,
  },
  width: 'fit-content',
};
