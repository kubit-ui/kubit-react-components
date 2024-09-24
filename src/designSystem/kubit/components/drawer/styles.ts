import {
  DrawerLevelPositionTypes,
  DrawerStylesType,
  DrawerVariantPositionTypes,
} from '@/components/drawer/types';
import { CommonStyleType, DeviceBreakpointsType, IconTypes, TypographyTypes } from '@/types';

import {
  BORDERS,
  COLORS,
  FONT_WEIGHT,
  RADIUS,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
  Z_INDEX,
} from '../../foundations';
import { TextVariantType } from '../text';
import { FooterVariants } from '../variants';
import { DrawerVariantType } from './variants';

const containerCommonProps: {
  [key in DrawerVariantPositionTypes]?: CommonStyleType;
} = {
  [DrawerVariantPositionTypes.DRAWER_RIGHT]: {
    border_top_left_radius: RADIUS.radius_50,
    border_bottom_left_radius: RADIUS.radius_50,
    max_height: SPACINGS.spacing_100_vh,
    background: COLORS.NEUTRAL.color_neutral_bg_250,
    min_width: '50vw',
    max_width: '50vw',
  },
  [DrawerVariantPositionTypes.DRAWER_LEFT]: {
    border_top_right_radius: RADIUS.radius_50,
    border_bottom_right_radius: RADIUS.radius_50,
    max_height: SPACINGS.spacing_100_vh,
    background: COLORS.NEUTRAL.color_neutral_bg_250,
    min_width: '50vw',
    max_width: '50vw',
  },
  [DrawerVariantPositionTypes.DRAWER_BOTTOM]: {
    border_top_right_radius: RADIUS.radius_50,
    border_top_left_radius: RADIUS.radius_50,
    background: COLORS.NEUTRAL.color_neutral_bg_250,
  },
};
const commonIconContainerProps: CommonStyleType = {
  position: 'sticky',
  z_index: Z_INDEX.STICKY,
  background_color: COLORS.NEUTRAL.color_neutral_bg_250,
};
const commonTitleProps: TypographyTypes = {
  font_variant: TextVariantType.HEADING_H4_EXPANDED,
  font_weight: FONT_WEIGHT.font_weight_600,
  color: COLORS.NEUTRAL.color_neutral_font_50,
};
const commonIconProps: IconTypes = {
  width: SIZES.size_250,
  height: SIZES.size_250,
  color: COLORS.NEUTRAL.color_neutral_icon_50,
};
const commonFooterProps: CommonStyleType & {
  variant?: string;
} = {
  position: 'sticky',
  z_index: Z_INDEX.STICKY,
  border_top: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_200}`,
  variant: FooterVariants.DEFAULT,
};
const commonContentProps = {
  childs: {
    margin_left: SPACINGS.spacing_100,
  },
  firstChild: {
    margin_top: SPACINGS.spacing_100,
    margin_left: SPACINGS.spacing_100,
  },
  lastChild: {
    margin_bottom: SPACINGS.spacing_100,
    margin_left: SPACINGS.spacing_100,
  },
};

export const DRAWER_STYLES: DrawerStylesType<DrawerVariantType> = {
  [DrawerVariantType.DEFAULT]: {
    [DeviceBreakpointsType.DESKTOP]: {
      container: {
        ...containerCommonProps,
      },
      iconContainer: {
        ...commonIconContainerProps,
        padding_top: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_400,
        padding_right: SPACINGS.spacing_400,
        padding_bottom: SPACINGS.spacing_300,
      },
      icon: {
        ...commonIconProps,
      },
      titleContentFooterContainer: {
        padding_left: SPACINGS.spacing_740,
        padding_right: SPACINGS.spacing_740,
        paddingTopIsBlocking: SPACINGS.spacing_650,
      },
      titleContainer: {
        margin_bottom: SPACINGS.spacing_400,
        text_align: TEXT_ALIGN.left,
        position: 'sticky',
        z_index: Z_INDEX.STICKY,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      title: {
        ...commonTitleProps,
      },
      content: {
        ...commonContentProps,
      },
      footer: {
        ...commonFooterProps,
        margin_top: SPACINGS.spacing_600,
        padding_top: SPACINGS.spacing_350,
        padding_bottom: SPACINGS.spacing_350,
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
        ...containerCommonProps,
        [DrawerVariantPositionTypes.DRAWER_BOTTOM]: {
          ...containerCommonProps.DRAWER_BOTTOM,
          min_height: 'var(--100svh, 100vh)',
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
      },
      iconContainer: {
        ...commonIconContainerProps,
        padding_top: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_400,
        padding_right: SPACINGS.spacing_400,
        padding_bottom: SPACINGS.spacing_300,
      },
      icon: {
        ...commonIconProps,
      },
      titleContentFooterContainer: {
        padding_left: SPACINGS.spacing_400,
        padding_right: SPACINGS.spacing_400,
        paddingTopIsBlocking: SPACINGS.spacing_650,
      },
      titleContainer: {
        margin_bottom: SPACINGS.spacing_400,
        text_align: TEXT_ALIGN.center,
        position: 'sticky',
        z_index: Z_INDEX.STICKY,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      title: {
        ...commonTitleProps,
      },
      content: {
        ...commonContentProps,
      },
      footer: {
        ...commonFooterProps,
        margin_top: SPACINGS.spacing_300,
        padding_top: SPACINGS.spacing_350,
        padding_bottom: SPACINGS.spacing_350,
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
        ...containerCommonProps,
        [DrawerVariantPositionTypes.DRAWER_BOTTOM]: {
          ...containerCommonProps.DRAWER_BOTTOM,
          min_height: 'var(--100svh, 100vh)',
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
      },
      iconContainer: {
        ...commonIconContainerProps,
        padding_top: SPACINGS.spacing_300,
        padding_left: SPACINGS.spacing_300,
        padding_right: SPACINGS.spacing_300,
        padding_bottom: SPACINGS.spacing_300,
      },
      icon: {
        ...commonIconProps,
      },
      titleContentFooterContainer: {
        padding_left: SPACINGS.spacing_300,
        padding_right: SPACINGS.spacing_300,
        paddingTopIsBlocking: SPACINGS.spacing_600,
      },
      titleContainer: {
        margin_bottom: SPACINGS.spacing_400,
        text_align: TEXT_ALIGN.center,
        position: 'sticky',
        z_index: Z_INDEX.STICKY,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      title: {
        ...commonTitleProps,
      },
      content: {
        ...commonContentProps,
      },
      footer: {
        ...commonFooterProps,
        margin_top: SPACINGS.spacing_400,
        padding_top: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_300,
        padding_right: SPACINGS.spacing_300,
        border_top: SPACINGS.spacing_0,
      },
      [DrawerLevelPositionTypes.FIRST_LEVEL]: {
        containerPosition: DrawerVariantPositionTypes.DRAWER_BOTTOM,
      },
      [DrawerLevelPositionTypes.SECOND_LEVEL]: {
        containerPosition: DrawerVariantPositionTypes.DRAWER_LEFT,
      },
    },
  },
  [DrawerVariantType.TESTING_NO_ANIMATION]: {
    [DeviceBreakpointsType.DESKTOP]: {
      container: {
        ...containerCommonProps,
        [DrawerVariantPositionTypes.DRAWER_RIGHT]: {
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          width: '37.5rem',
          height: '15rem',
          min_width: '37.5rem',
          min_height: '15rem',
          border_top_left_radius: RADIUS.radius_50,
          border_bottom_left_radius: RADIUS.radius_50,
          [DeviceBreakpointsType.DESKTOP]: {
            min_width: '37.5rem',
            min_height: '15rem',
          },
        },
      },
      iconContainer: {
        ...commonIconContainerProps,
        padding_top: SPACINGS.spacing_0,
        padding_left: SPACINGS.spacing_0,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_0,
      },
      icon: {
        ...commonIconProps,
      },
      titleContentFooterContainer: {
        padding_left: SPACINGS.spacing_0,
        padding_right: SPACINGS.spacing_0,
        paddingTopIsBlocking: SPACINGS.spacing_0,
      },
      titleContainer: {
        margin_bottom: SPACINGS.spacing_400,
        text_align: TEXT_ALIGN.left,
        position: 'sticky',
        z_index: Z_INDEX.STICKY,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      title: {
        ...commonTitleProps,
      },
      content: {
        ...commonContentProps,
      },
      footer: {
        ...commonFooterProps,
        margin_top: SPACINGS.spacing_0,
        padding_top: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_0,
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
        ...containerCommonProps,
        [DrawerVariantPositionTypes.DRAWER_RIGHT]: {
          width: '11rem',
          height: '9rem',
          min_width: '11rem',
          min_height: '9rem',
          border_top_left_radius: RADIUS.radius_50,
          border_bottom_left_radius: RADIUS.radius_50,
        },
      },
      iconContainer: {
        ...commonIconContainerProps,
        padding_top: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_400,
        padding_right: SPACINGS.spacing_400,
        padding_bottom: SPACINGS.spacing_300,
      },
      icon: {
        ...commonIconProps,
      },
      titleContentFooterContainer: {
        padding_left: SPACINGS.spacing_400,
        padding_right: SPACINGS.spacing_400,
        paddingTopIsBlocking: SPACINGS.spacing_650,
      },
      titleContainer: {
        margin_bottom: SPACINGS.spacing_400,
        text_align: TEXT_ALIGN.center,
        position: 'sticky',
        z_index: Z_INDEX.STICKY,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      title: {
        ...commonTitleProps,
      },
      content: {
        ...commonContentProps,
      },
      footer: {
        ...commonFooterProps,
        margin_top: SPACINGS.spacing_300,
        padding_top: SPACINGS.spacing_350,
        padding_bottom: SPACINGS.spacing_350,
      },
      [DrawerLevelPositionTypes.FIRST_LEVEL]: {
        containerPosition: DrawerVariantPositionTypes.DRAWER_NO_ANIMATION,
      },
      [DrawerLevelPositionTypes.SECOND_LEVEL]: {
        containerPosition: DrawerVariantPositionTypes.DRAWER_NO_ANIMATION,
      },
    },
    [DeviceBreakpointsType.MOBILE]: {
      iconContainer: {
        ...commonIconContainerProps,
        padding_top: SPACINGS.spacing_300,
        padding_left: SPACINGS.spacing_300,
        padding_right: SPACINGS.spacing_300,
        padding_bottom: SPACINGS.spacing_300,
      },
      icon: {
        ...commonIconProps,
      },
      titleContentFooterContainer: {
        padding_left: SPACINGS.spacing_50,
        padding_right: SPACINGS.spacing_50,
        paddingTopIsBlocking: SPACINGS.spacing_600,
      },
      titleContainer: {
        margin_bottom: SPACINGS.spacing_400,
        text_align: TEXT_ALIGN.center,
        position: 'sticky',
        z_index: Z_INDEX.STICKY,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      title: {
        ...commonTitleProps,
      },
      content: {
        ...commonContentProps,
      },
      footer: {
        ...commonFooterProps,
        margin_top: SPACINGS.spacing_0,
        padding_top: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_0,
        border_top: SPACINGS.spacing_0,
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
