// types
// constants
import { BreadcrumbsStylesType } from '@/components/breadcrumbs/types/breadcrumbsTheme';
import { BreadcrumbsStateType } from '@/components/breadcrumbs/types/state';
import { TextDecorationType } from '@/components/text/types/decoration';
import { BORDERS, RADIUS } from '@/designSystem/kubitWireframe/commons/foundations/borders';
import { SIZES } from '@/designSystem/kubitWireframe/commons/foundations/sizes';
import { SPACINGS } from '@/designSystem/kubitWireframe/commons/foundations/spacings';
import {
  FONT_WEIGHT,
  PARAGRAPH,
  TEXT_ALIGN,
} from '@/designSystem/kubitWireframe/commons/foundations/typography';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import { BreadcrumbsVariantType } from './variants';

export const getBreadcrumbsStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): BreadcrumbsStylesType<BreadcrumbsVariantType> => {
  const commonProps = {
    link: {
      font_size: PARAGRAPH.MEDIUM[DeviceBreakpointsType.DESKTOP].font_size,
      text_align: TEXT_ALIGN.left,
      font_weight: FONT_WEIGHT.font_weight_400,
    },
    iconDividerContainer: {
      margin_left: SPACINGS.spacing_100,
    },
    iconDivider: {
      width: SIZES.size_150,
      height: SIZES.size_150,
    },
  };
  const commonPropsDefault = {
    ...commonProps,
    linkContainer: {
      background_color: COLORS.SECONDARY.color_secondary_bg_150,
      border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
      border_radius: RADIUS.radius_300,
      padding: SPACINGS.spacing_150,
      ...transformShadow(RADIUS.radius_300),
      ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, '3px'),
    },
    iconDivider: {
      ...commonProps.iconDivider,
      color: COLORS.NEUTRAL.color_neutral_font_100,
    },
  };

  return {
    [BreadcrumbsVariantType.DEFAULT]: {
      [BreadcrumbsStateType.DEFAULT]: {
        ...commonPropsDefault,
        link: {
          ...commonPropsDefault.link,
          color: COLORS.NEUTRAL.color_neutral_font_100,
          text_decoration: TextDecorationType.UNDERLINE,
        },
      },
      [BreadcrumbsStateType.HOVER]: {
        ...commonPropsDefault,
        link: {
          ...commonPropsDefault.link,
          color: COLORS.ACCENT.color_accent_default_font_100,
        },
      },
      [BreadcrumbsStateType.ACTIVE]: {
        ...commonPropsDefault,
        link: {
          ...commonPropsDefault.link,
          color: COLORS.NEUTRAL.color_neutral_font_150,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
      },
    },
  };
};
