import { TagStylesType } from '@/components/tag/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { TagOptionType, TagStatusType, TagVariantType } from './variants';

export const getTagStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TagStylesType<TagOptionType, TagVariantType, TagStatusType> => {
  return {
    [TagOptionType.INFORMATIVE]: {
      wrapper: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
        border_style: 'solid',
      },
      text: {},
    },
    [TagVariantType.SQUARE]: {
      [TagStatusType.NORMAL]: {
        wrapper: {
          border_width: BORDERS.border_100,
          border_radius: RADIUS.radius_100,
          padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
          display: 'flex',
          align_items: 'center',
          justify_content: 'center',
          gap: SPACINGS.spacing_150,
          ...transformShadow(RADIUS.radius_100),
          ...shadowAfterStyles(RADIUS.radius_100, COLORS.ACCENT.color_accent_default_bg_100, '2px'),
        },
        text: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_50,
        },
        icon: {
          color: COLORS.SECONDARY.color_secondary_bg_150,
          height: SIZES.size_200,
          width: SIZES.size_200,
        },
      },
    },
  };
};
