import { AvatarStylesType } from '@/components/avatar/types/avatarTheme';
import { AvatarBackgroundColor, AvatarContentType } from '@/components/avatar/types/content';
import { BORDERS, RADIUS } from '@/designSystem/kubitWireframe/commons/foundations/borders';
import { SIZES } from '@/designSystem/kubitWireframe/commons/foundations/sizes';
import { SPACINGS } from '@/designSystem/kubitWireframe/commons/foundations/spacings';
import {
  FONT_WEIGHT,
  TEXT_ALIGN,
} from '@/designSystem/kubitWireframe/commons/foundations/typography';

import { TextVariantType } from '../../../../kubit/components/text/variants';
import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { AvatarSize } from './variants';

const getContainerBackgroundColor = COLORS => ({
  containerBackgroundColor: {
    [AvatarBackgroundColor.COLOR_DEFAULT]: {
      backgroundColor: COLORS.NEUTRAL.color_neutral_bg_250,
      contentColor: COLORS.NEUTRAL.color_neutral_icon_50,
      borderColor: COLORS.NEUTRAL.color_neutral_border_50,
    },
    [AvatarBackgroundColor.COLOR_RED]: {
      backgroundColor: COLORS.NEUTRAL.color_neutral_bg_250,
      contentColor: COLORS.ACCENT.color_neutral_icon_50,
      borderColor: COLORS.NEUTRAL.color_neutral_border_50,
    },
    [AvatarBackgroundColor.COLOR_WHITE]: {
      backgroundColor: COLORS.NEUTRAL.color_neutral_bg_250,
      contentColor: COLORS.NEUTRAL.color_neutral_icon_50,
      borderColor: COLORS.NEUTRAL.color_neutral_border_50,
    },
  },
});

const commonLargeTokens = COLORS => ({
  linkContainer: {
    width: SPACINGS.spacing_600,
    height: SPACINGS.spacing_600,
    border_radius: RADIUS.radius_300,
    overflow: 'visible',
    ...transformShadow(RADIUS.radius_300),
    ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
  },
  avatarContainer: {
    width: SPACINGS.spacing_600,
    height: SPACINGS.spacing_600,
    max_width: SPACINGS.spacing_600,
    max_height: SPACINGS.spacing_600,
    border_radius: RADIUS.radius_300,
  },
});

export const getAvatarStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): AvatarStylesType<AvatarSize> => {
  return {
    [AvatarSize.LARGE]: {
      [AvatarContentType.WITH_ICON]: {
        ...commonLargeTokens(COLORS),
        containerBorderWidth: BORDERS.border_50,
        ...getContainerBackgroundColor(COLORS),
        avatar: {
          width: SIZES.size_250,
          height: SIZES.size_250,
        },
      },
      [AvatarContentType.WITH_IMAGE]: {
        ...commonLargeTokens(COLORS),
      },
      [AvatarContentType.WITH_INITIALS]: {
        ...commonLargeTokens(COLORS),
        containerBorderWidth: BORDERS.border_50,
        ...getContainerBackgroundColor(COLORS),
        initials: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          font_weight: FONT_WEIGHT.font_weight_600,
          text_align: TEXT_ALIGN.center,
        },
      },
    },
  };
};
