import { NavigationCardStylesType } from '@/components/navigationCard/types';
import { TextComponentType } from '@/components/text/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, FONT_WEIGHT, RADIUS, SHADOW, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { NavigationCardVariantType } from './variants';

export const getNavigationCardStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): NavigationCardStylesType<NavigationCardVariantType> => {
  const commonTokens = {
    container: {
      width: '100%',
      position: 'relative',
      height: 'auto',
      display: 'flex',
      flex_direction: 'row',
      align_items: 'center',
      justify_content: 'space-between',
      cursor: 'pointer',
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      box_shadow: SHADOW.shadow_10,
    },
    contentContainer: {
      display: 'flex',
      flex_direction: 'column',
      width: 'auto',
    },
    rightContentContainer: {
      display: 'flex',
      align_items: 'center',
      justify_content: 'center',
      width: 'auto',
      [DeviceBreakpointsType.MOBILE]: {
        justify_content: 'flex-start',
      },
    },
    decorativeElementContainer: {
      height: 'auto',
      width: 'auto',
      display: 'flex',
      align_items: 'center',
      justify_content: 'center',
      align_self: 'flex-start',
    },
  };
  return {
    [NavigationCardVariantType.PRIMARY]: {
      ...commonTokens,
      containerExpandedContent: false,
      container: {
        ...commonTokens.container,
        padding: `${SPACINGS.spacing_400} ${SPACINGS.spacing_300}`,
        border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        border_radius: RADIUS.radius_150,
        ...transformShadow(RADIUS.radius_150),
        ...shadowAfterStyles(RADIUS.radius_150, COLORS.BRAND.color_brand_bg_50, '3px'),
      },
      icon: {
        color: COLORS.NEUTRAL.color_neutral_icon_50,
        width: SIZES.size_250,
        height: SIZES.size_250,
        margin_right: SPACINGS.spacing_150,
      },
      title: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.ACCENT.color_accent_default_font_50,
        component: TextComponentType.SPAN,
      },
      descriptionContainer: {
        margin_top: SPACINGS.spacing_250,
      },
      description: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.ACCENT.color_accent_default_font_50,
      },
      arrowIcon: {
        color: COLORS.NEUTRAL.color_neutral_icon_50,
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
    },
  };
};
