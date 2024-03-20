import {
  DrawerLevelPositionTypes,
  DrawerStylesType,
  DrawerVariantPositionTypes,
} from '@/components/drawer/types';
import { DeviceBreakpointsType } from '@/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS, Z_INDEX } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { FooterVariants } from '../variants';
import { DrawerVariantType } from './variants';

const drawerContainerTokens = (COLORS): object => {
  return {
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    overflow_y: 'unset',
    border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
    ...transformShadow(RADIUS.radius_00),
    ...shadowAfterStyles(RADIUS.radius_00, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
  };
};
const iconContainerTokens = (COLORS): object => {
  return {
    position: 'sticky',
    z_index: Z_INDEX.STICKY,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    padding_top: SPACINGS.spacing_400,
    padding_left: SPACINGS.spacing_400,
    padding_right: SPACINGS.spacing_400,
    padding_bottom: SPACINGS.spacing_300,
  };
};
const iconTokens = (COLORS): object => {
  return {
    color: COLORS.NEUTRAL.color_neutral_bg_50,
    height: SIZES.size_250,
    width: SIZES.size_250,
  };
};
const titleContainerTokens = (COLORS): object => {
  return {
    padding_left: SPACINGS.spacing_740,
    padding_right: SPACINGS.spacing_740,
    padding_bottom: SPACINGS.spacing_400,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
  };
};
const titleTokens = (COLORS): object => {
  return {
    font_variant: TextVariantType.HEADING_H3_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_600,
    color: COLORS.BRAND.color_brand_02_font_50,
  };
};
const contentTokens = {
  padding_left: SPACINGS.spacing_740,
  padding_right: SPACINGS.spacing_740,
  childs: {
    margin_left: SPACINGS.spacing_0,
  },
  firstChild: {
    margin_top: SPACINGS.spacing_300,
    margin_left: SPACINGS.spacing_0,
  },
  lastChild: {
    margin_bottom: SPACINGS.spacing_300,
    margin_left: SPACINGS.spacing_0,
  },
};
const footerTokens = (COLORS): object => {
  return {
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    position: 'sticky',
    bottom: SPACINGS.spacing_0,
    border_top: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
    variant: FooterVariants.EMPTY,
    padding: `${SPACINGS.spacing_400} ${SPACINGS.spacing_450}`,
    width: SPACINGS.spacing_100_percent,
  };
};

export const getDrawerStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): DrawerStylesType<DrawerVariantType> => {
  return {
    [DrawerVariantType.DEFAULT]: {
      [DeviceBreakpointsType.DESKTOP]: {
        container: {
          [DrawerVariantPositionTypes.DRAWER_RIGHT]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.DESKTOP]: {
              width: `calc(50vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
          [DrawerVariantPositionTypes.DRAWER_LEFT]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.DESKTOP]: {
              width: `calc(50vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
          [DrawerVariantPositionTypes.DRAWER_BOTTOM]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.DESKTOP]: {
              width: `calc(50vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
        },
        iconContainer: {
          ...iconContainerTokens(COLORS),
        },
        icon: {
          ...iconTokens(COLORS),
        },
        titleContentFooterContainer: {
          paddingTopIsBlocking: SPACINGS.spacing_740,
        },
        titleContainer: {
          ...titleContainerTokens(COLORS),
        },
        title: {
          ...titleTokens(COLORS),
        },
        content: {
          ...contentTokens,
        },
        footer: {
          ...footerTokens(COLORS),
        },
        [DrawerLevelPositionTypes.FIRST_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_RIGHT,
        },
        [DrawerLevelPositionTypes.SECOND_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_RIGHT,
        },
      },
      [DeviceBreakpointsType.TABLET]: {
        container: {
          [DrawerVariantPositionTypes.DRAWER_RIGHT]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.DESKTOP]: {
              width: `calc(50vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
          [DrawerVariantPositionTypes.DRAWER_LEFT]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.DESKTOP]: {
              width: `calc(50vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
          [DrawerVariantPositionTypes.DRAWER_BOTTOM]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.DESKTOP]: {
              width: `calc(50vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
        },
        iconContainer: {
          ...iconContainerTokens(COLORS),
        },
        icon: {
          ...iconTokens(COLORS),
        },
        titleContentFooterContainer: {
          height: 'fit-content',
          paddingTopIsBlocking: SPACINGS.spacing_740,
        },
        titleContainer: {
          ...titleContainerTokens(COLORS),
        },
        title: {
          ...titleTokens(COLORS),
        },
        content: {
          ...contentTokens,
        },
        footer: {
          ...footerTokens(COLORS),
        },
        [DrawerLevelPositionTypes.FIRST_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_BOTTOM,
        },
        [DrawerLevelPositionTypes.SECOND_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_LEFT,
        },
      },
      [DeviceBreakpointsType.MOBILE]: {
        container: {
          [DrawerVariantPositionTypes.DRAWER_RIGHT]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.DESKTOP]: {
              width: `calc(50vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
          [DrawerVariantPositionTypes.DRAWER_LEFT]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.DESKTOP]: {
              width: `calc(50vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
          [DrawerVariantPositionTypes.DRAWER_BOTTOM]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.DESKTOP]: {
              width: `calc(50vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
        },
        iconContainer: {
          ...iconContainerTokens(COLORS),
          padding_top: SPACINGS.spacing_300,
          padding_left: SPACINGS.spacing_300,
          padding_right: SPACINGS.spacing_300,
          padding_bottom: SPACINGS.spacing_300,
        },
        icon: {
          ...iconTokens(COLORS),
        },
        titleContentFooterContainer: {
          paddingTopIsBlocking: SPACINGS.spacing_740,
        },
        titleContainer: {
          ...titleContainerTokens(COLORS),
          padding_left: SPACINGS.spacing_300,
          padding_right: SPACINGS.spacing_300,
          padding_bottom: SPACINGS.spacing_300,
        },
        title: {
          ...titleTokens(COLORS),
        },
        content: {
          ...contentTokens,
          padding_left: SPACINGS.spacing_300,
          padding_right: SPACINGS.spacing_300,
        },
        footer: {
          ...footerTokens(COLORS),
          bottom: SPACINGS.spacing_50,
        },
        [DrawerLevelPositionTypes.FIRST_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_BOTTOM,
        },
        [DrawerLevelPositionTypes.SECOND_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_LEFT,
        },
      },
    },
    [DrawerVariantType.DEFAULT_ABSOLUTE_NO_ANIMATION]: {
      [DeviceBreakpointsType.DESKTOP]: {
        container: {
          [DrawerVariantPositionTypes.DRAWER_RIGHT]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.DESKTOP]: {
              width: `calc(50vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
        },
        iconContainer: {
          ...iconContainerTokens(COLORS),
        },
        icon: {
          ...iconTokens(COLORS),
        },
        titleContentFooterContainer: {
          paddingTopIsBlocking: SPACINGS.spacing_740,
        },
        titleContainer: {
          ...titleContainerTokens(COLORS),
        },
        title: {
          ...titleTokens(COLORS),
        },
        content: {
          ...contentTokens,
        },
        footer: {
          ...footerTokens(COLORS),
        },
        [DrawerLevelPositionTypes.FIRST_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_NO_ANIMATION,
        },
        [DrawerLevelPositionTypes.SECOND_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_NO_ANIMATION,
        },
      },
      [DeviceBreakpointsType.TABLET]: {
        container: {
          [DrawerVariantPositionTypes.DRAWER_RIGHT]: {
            ...drawerContainerTokens(COLORS),
            position: 'relative',
            bottom: SPACINGS.spacing_0,
            [DeviceBreakpointsType.TABLET]: {
              width: `calc(100vw - ${SPACINGS.spacing_100})`,
              right: SPACINGS.spacing_50,
              bottom: SPACINGS.spacing_50,
              position: 'absolute',
              max_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: 'auto',
              min_height: 'unset',
            },
          },
        },
        iconContainer: {
          ...iconContainerTokens(COLORS),
        },
        icon: {
          ...iconTokens(COLORS),
        },
        titleContentFooterContainer: {
          height: 'fit-content',
          paddingTopIsBlocking: SPACINGS.spacing_740,
        },
        titleContainer: {
          ...titleContainerTokens(COLORS),
        },
        title: {
          ...titleTokens(COLORS),
        },
        content: {
          ...contentTokens,
        },
        footer: {
          ...footerTokens(COLORS),
        },
        [DrawerLevelPositionTypes.FIRST_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_NO_ANIMATION,
        },
        [DrawerLevelPositionTypes.SECOND_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_NO_ANIMATION,
        },
      },
      [DeviceBreakpointsType.MOBILE]: {
        container: {
          [DrawerVariantPositionTypes.DRAWER_RIGHT]: {
            ...drawerContainerTokens(COLORS),
            [DeviceBreakpointsType.MOBILE]: {
              width: `calc(${SPACINGS.spacing_100_vw} - ${SPACINGS.spacing_50})`,
              right: SPACINGS.spacing_50,
              bottom: SPACINGS.spacing_50,
              position: 'absolute',
              min_height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
              height: `calc(${SPACINGS.spacing_100_vh} - ${SPACINGS.spacing_100})`,
            },
          },
        },
        iconContainer: {
          ...iconContainerTokens(COLORS),
          padding_top: SPACINGS.spacing_300,
          padding_left: SPACINGS.spacing_300,
          padding_right: SPACINGS.spacing_300,
          padding_bottom: SPACINGS.spacing_300,
        },
        icon: {
          ...iconTokens(COLORS),
        },
        titleContentFooterContainer: {
          paddingTopIsBlocking: SPACINGS.spacing_740,
        },
        titleContainer: {
          ...titleContainerTokens(COLORS),
          padding_left: SPACINGS.spacing_300,
          padding_right: SPACINGS.spacing_300,
          padding_bottom: SPACINGS.spacing_300,
        },
        title: {
          ...titleTokens(COLORS),
        },
        content: {
          ...contentTokens,
          padding_left: SPACINGS.spacing_300,
          padding_right: SPACINGS.spacing_300,
        },
        footer: {
          ...footerTokens(COLORS),
          bottom: SPACINGS.spacing_50,
        },
        [DrawerLevelPositionTypes.FIRST_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_NO_ANIMATION,
        },
        [DrawerLevelPositionTypes.SECOND_LEVEL]: {
          containerPosition: DrawerVariantPositionTypes.DRAWER_NO_ANIMATION,
        },
      },
    },
  };
};
