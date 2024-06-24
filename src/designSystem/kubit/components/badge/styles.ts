import { BadgeStatus, BadgeStylesType } from '@/components/badge/types/';

import { COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { BadgeSize, BadgeVariant } from './variants';

export const BADGE_STYLES: BadgeStylesType<BadgeVariant, BadgeSize> = {
  [BadgeSize.DEFAULT]: {
    icon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
    },
  },
  [BadgeVariant.PRIMARY]: {
    container: {
      gap: SPACINGS.spacing_150,
    },
    label: {
      font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
    },
    labelIcon: {
      width: SIZES.size_150,
      height: SIZES.size_150,
    },
    [BadgeStatus.OPEN]: {
      iconColor: COLORS.BRAND.color_brand_icon_50,
      labelFontColor: COLORS.ACCENT.color_accent_default_font_100,
      labelIconColor: COLORS.BRAND.color_brand_icon_50,
    },
    [BadgeStatus.CLOSE]: {
      iconColor: COLORS.NEUTRAL.color_neutral_icon_50,
      labelFontColor: COLORS.NEUTRAL.color_neutral_font_50,
      labelIconColor: COLORS.NEUTRAL.color_neutral_icon_50,
    },
  },
  [BadgeVariant.ALTERNATIVE]: {
    container: {
      gap: SPACINGS.spacing_150,
    },
    label: {
      font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
    },
    labelIcon: {
      width: SIZES.size_150,
      height: SIZES.size_150,
    },
    [BadgeStatus.OPEN]: {
      iconColor: COLORS.NEUTRAL.color_neutral_icon_250,
      labelFontColor: COLORS.NEUTRAL.color_neutral_font_250,
      labelIconColor: COLORS.NEUTRAL.color_neutral_icon_250,
    },
    [BadgeStatus.CLOSE]: {
      iconColor: COLORS.NEUTRAL.color_neutral_icon_250,
      labelFontColor: COLORS.NEUTRAL.color_neutral_font_250,
      labelIconColor: COLORS.NEUTRAL.color_neutral_icon_250,
    },
  },
};
