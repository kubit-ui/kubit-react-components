import { TabsStateTypes, TabsStylesType } from '@/components/tabs/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS, Z_INDEX } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { TabsVariantType } from './variants';

export const getTabsStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TabsStylesType<TabsVariantType> => {
  const commonArrowIconContainer = {
    position: 'absolute',
    height: '100%',
    display: 'none',
    align_items: 'center',
    justify_content: 'center',
    z_index: Z_INDEX.INTERN_2,
    cursor: 'pointer',
    [DeviceBreakpointsType.MOBILE]: {
      background_color: COLORS.ACCENT.color_accent_default_bg_50,
      display: 'flex',
      focusVisible: {
        margin_right: SPACINGS.spacing_50,
        margin_left: SPACINGS.spacing_50,
      },
    },
  };
  return {
    [TabsVariantType.DEFAULT]: {
      container: {
        margin_bottom: SPACINGS.spacing_150,
      },
      arrowLeftIconContainer: {
        ...commonArrowIconContainer,
      },
      leftIcon: {
        width: SIZES.size_250,
        height: SIZES.size_250,
        color: COLORS.NEUTRAL.color_neutral_icon_250,
      },
      rightIcon: {
        width: SIZES.size_250,
        height: SIZES.size_250,
        color: COLORS.NEUTRAL.color_neutral_icon_250,
      },
      arrowRightIconContainer: {
        ...commonArrowIconContainer,
        right: '0',
      },
      tabContainer: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_width: BORDERS.border_50,
        border_style: 'solid',
        border_color: COLORS.NEUTRAL.color_neutral_border_50,

        ...transformShadow(RADIUS.radius_150),
        ...shadowAfterStyles(
          `${RADIUS.radius_150} ${RADIUS.radius_150} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
          COLORS.BRAND.color_brand_bg_50,
          '2px'
        ),
        border_radius: `${RADIUS.radius_150} ${RADIUS.radius_150} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
      },
      oneTabContainer: {
        display: 'flex',
        justify_content: 'center',
        width: '100%',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_500} ${SPACINGS.spacing_250} ${SPACINGS.spacing_500}`,
        cursor: 'default',
        [DeviceBreakpointsType.MOBILE]: {
          padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_0} ${SPACINGS.spacing_250} ${SPACINGS.spacing_0}`,
        },
      },

      [TabsStateTypes.SELECTED]: {
        label: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_50,
        },
        tabButton: {
          width: '100%',
          padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_500} ${SPACINGS.spacing_250} ${SPACINGS.spacing_500}`,
          cursor: 'default',
          [DeviceBreakpointsType.MOBILE]: {
            padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_0} ${SPACINGS.spacing_250} ${SPACINGS.spacing_0}`,
          },
        },
      },
      [TabsStateTypes.UNSELECTED]: {
        label: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_50,
        },
        tabButton: {
          width: '100%',
          padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_500} ${SPACINGS.spacing_250} ${SPACINGS.spacing_500}`,
          cursor: 'pointer',
          [DeviceBreakpointsType.MOBILE]: {
            padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_0} ${SPACINGS.spacing_250} ${SPACINGS.spacing_0}`,
          },
        },
      },
      [TabsStateTypes.EMPTY]: {
        tabButton: {
          padding: SPACINGS.spacing_0,
          min_height: '2.75rem',
        },
      },
    },
    [TabsVariantType.FUNCTIONALITIES_MODULE]: {
      arrowLeftIconContainer: {
        ...commonArrowIconContainer,
      },
      leftIcon: {
        width: SIZES.size_250,
        height: SIZES.size_250,
        color: COLORS.NEUTRAL.color_neutral_icon_250,
      },
      rightIcon: {
        width: SIZES.size_250,
        height: SIZES.size_250,
        color: COLORS.NEUTRAL.color_neutral_icon_250,
      },
      arrowRightIconContainer: {
        ...commonArrowIconContainer,
        right: '0',
      },
      tabButtonsContainer: {
        column_gap: SPACINGS.spacing_0,
      },
      tabContainer: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_width: BORDERS.border_50,
        border_style: 'solid',
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
        ...transformShadow(RADIUS.radius_150),
        ...shadowAfterStyles(
          `${RADIUS.radius_150} ${RADIUS.radius_150} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
          COLORS.BRAND.color_brand_bg_50,
          '2px'
        ),
        border_radius: `${RADIUS.radius_150} ${RADIUS.radius_150} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
      },
      oneTabContainer: {
        display: 'flex',
        justify_content: 'center',
        width: '100%',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_500} ${SPACINGS.spacing_250} ${SPACINGS.spacing_500}`,
        cursor: 'default',
        [DeviceBreakpointsType.MOBILE]: {
          padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_0} ${SPACINGS.spacing_250} ${SPACINGS.spacing_0}`,
        },
      },
      [TabsStateTypes.SELECTED]: {
        label: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_50,
        },
        tabButton: {
          width: '100%',
          padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_500} ${SPACINGS.spacing_250} ${SPACINGS.spacing_500}`,
          cursor: 'default',
          [DeviceBreakpointsType.MOBILE]: {
            padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_0} ${SPACINGS.spacing_250} ${SPACINGS.spacing_0}`,
          },
        },
      },
      [TabsStateTypes.UNSELECTED]: {
        label: {
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_50,
        },
        tabButton: {
          width: '100%',
          padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_500} ${SPACINGS.spacing_250} ${SPACINGS.spacing_500}`,
          cursor: 'pointer',
          [DeviceBreakpointsType.MOBILE]: {
            padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_0} ${SPACINGS.spacing_250} ${SPACINGS.spacing_0}`,
          },
        },
      },
      [TabsStateTypes.EMPTY]: {
        tabButton: {
          padding: SPACINGS.spacing_0,
          min_height: '2.75rem',
        },
      },
    },
  };
};
