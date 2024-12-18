import { TagStylesType as TagStylesTypeV2 } from '@/components/tagV2/types/tagTheme';
import { BORDERS, RADIUS } from '@/designSystem/kubitWireframe/commons/foundations/borders';
import { SIZES } from '@/designSystem/kubitWireframe/commons/foundations/sizes';
import { SPACINGS } from '@/designSystem/kubitWireframe/commons/foundations/spacings';
import { FONT_WEIGHT } from '@/designSystem/kubitWireframe/commons/foundations/typography';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { TextVariantType } from '../text/variants';
import { TagVariantTypeV2 } from './variants';

export const getTagStylesV2 = (COLORS: {
  [key: string]: { [key: string]: string };
}): TagStylesTypeV2<TagVariantTypeV2> => {
  return {
    [TagVariantTypeV2.DEFAULT]: {
      container: {
        width: 'fit-content',
        max_width: '100%',
        display: 'flex',
        flex_direction: 'row',
        align_items: 'center',
        border_width: BORDERS.border_100,
        border_radius: RADIUS.radius_100,
        padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
        gap: SPACINGS.spacing_150,
        ...transformShadow(RADIUS.radius_100),
        ...shadowAfterStyles(RADIUS.radius_100, COLORS.ACCENT.color_accent_default_bg_100, '2px'),
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
        border_style: 'solid',
      },
      icon: {
        color: COLORS.SECONDARY.color_secondary_bg_150,
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
    },
    [TagVariantTypeV2.SUCCESS]: {
      container: {
        width: 'fit-content',
        max_width: '100%',
        display: 'flex',
        flex_direction: 'row',
        align_items: 'center',
        border_width: BORDERS.border_50,
        border_radius: RADIUS.radius_100,
        padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
        gap: SPACINGS.spacing_150,
        ...transformShadow(RADIUS.radius_100),
        ...shadowAfterStyles(RADIUS.radius_100, COLORS.ACCENT.color_accent_default_bg_100, '2px'),
        background_color: COLORS.FEEDBACK.color_feedback_success_bg_50,
        border_color: COLORS.FEEDBACK.color_feedback_success_border_50,
        border_style: 'solid',
      },
      icon: {
        color: COLORS.SECONDARY.color_secondary_bg_150,
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
    },
    [TagVariantTypeV2.ISSUE]: {
      container: {
        width: 'fit-content',
        max_width: '100%',
        display: 'flex',
        flex_direction: 'row',
        align_items: 'center',
        border_width: BORDERS.border_50,
        border_radius: RADIUS.radius_100,
        padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
        gap: SPACINGS.spacing_150,
        ...transformShadow(RADIUS.radius_100),
        ...shadowAfterStyles(RADIUS.radius_100, COLORS.ACCENT.color_accent_default_bg_100, '2px'),
        background_color: COLORS.FEEDBACK.color_feedback_warning_bg_50,
        border_color: COLORS.FEEDBACK.color_feedback_warning_border_50,
        border_style: 'solid',
      },
      icon: {
        color: COLORS.SECONDARY.color_secondary_bg_150,
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
    },
    [TagVariantTypeV2.DORMANT]: {
      container: {
        width: 'fit-content',
        max_width: '100%',
        display: 'flex',
        flex_direction: 'row',
        align_items: 'center',
        border_width: BORDERS.border_50,
        border_radius: RADIUS.radius_100,
        padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
        gap: SPACINGS.spacing_150,
        ...transformShadow(RADIUS.radius_100),
        ...shadowAfterStyles(RADIUS.radius_100, COLORS.ACCENT.color_accent_default_bg_100, '2px'),
        background_color: COLORS.FEEDBACK.color_feedback_error_bg_50,
        border_color: COLORS.FEEDBACK.color_feedback_error_border_50,
        border_style: 'solid',
      },
      icon: {
        color: COLORS.SECONDARY.color_secondary_bg_150,
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
    },
    [TagVariantTypeV2.DEPRECATED]: {
      container: {
        width: 'fit-content',
        max_width: '100%',
        display: 'flex',
        flex_direction: 'row',
        align_items: 'center',
        border_width: BORDERS.border_50,
        border_radius: RADIUS.radius_100,
        padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
        gap: SPACINGS.spacing_150,
        ...transformShadow(RADIUS.radius_100),
        ...shadowAfterStyles(RADIUS.radius_100, COLORS.ACCENT.color_accent_default_bg_100, '2px'),
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
        border_style: 'solid',
      },
      icon: {
        color: COLORS.SECONDARY.color_secondary_bg_150,
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
    },
    [TagVariantTypeV2.INFORMATIVE]: {
      container: {
        width: 'fit-content',
        max_width: '100%',
        display: 'flex',
        flex_direction: 'row',
        align_items: 'center',
        border_width: BORDERS.border_50,
        border_radius: RADIUS.radius_100,
        padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
        gap: SPACINGS.spacing_150,
        ...transformShadow(RADIUS.radius_100),
        ...shadowAfterStyles(RADIUS.radius_100, COLORS.ACCENT.color_accent_default_bg_100, '2px'),
        background_color: COLORS.FEEDBACK.color_feedback_info_bg_50,
        border_color: COLORS.FEEDBACK.color_feedback_info_border_50,
        border_style: 'solid',
      },
      icon: {
        color: COLORS.SECONDARY.color_secondary_bg_150,
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
    },
  };
};
