import { BadgeStylesType } from '@/components/badgeV2/types/';
import { BadgeState } from '@/components/badgeV2/types/state';

import { COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { BadgeSizeV2, BadgeVariantV2 } from './variants';

export const BADGE_STYLES_V2: BadgeStylesType<BadgeVariantV2, BadgeSizeV2> = {
  [BadgeSizeV2.DEFAULT]: {
    icon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
    },
  },
  [BadgeVariantV2.PRIMARY]: {
    [BadgeState.ACTIVE]: {
      container: {
        gap: SPACINGS.spacing_150,
      },
      label: {
        font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.ACCENT.color_accent_default_font_100,
      },
      labelIcon: {
        width: SIZES.size_150,
        height: SIZES.size_150,
        color: COLORS.BRAND.color_brand_icon_50,
      },
      icon: {
        color: COLORS.BRAND.color_brand_icon_50,
      },
    },
    [BadgeState.DEFAULT]: {
      container: {
        gap: SPACINGS.spacing_150,
      },
      label: {
        font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      labelIcon: {
        width: SIZES.size_150,
        height: SIZES.size_150,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
      icon: {
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
  },
  [BadgeVariantV2.ALTERNATIVE]: {
    [BadgeState.ACTIVE]: {
      container: {
        gap: SPACINGS.spacing_150,
      },
      label: {
        font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
      labelIcon: {
        width: SIZES.size_150,
        height: SIZES.size_150,
        color: COLORS.NEUTRAL.color_neutral_icon_250,
      },
      icon: {
        color: COLORS.NEUTRAL.color_neutral_icon_250,
      },
    },
    [BadgeState.DEFAULT]: {
      container: {
        gap: SPACINGS.spacing_150,
      },
      label: {
        font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
      labelIcon: {
        width: SIZES.size_150,
        height: SIZES.size_150,
        color: COLORS.NEUTRAL.color_neutral_icon_250,
      },
      icon: {
        color: COLORS.NEUTRAL.color_neutral_icon_250,
      },
    },
  },
};
