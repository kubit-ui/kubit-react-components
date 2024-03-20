import { TabsStateTypes, TabsStylesType } from '@/components/tabs/types';
import { DeviceBreakpointsType } from '@/types';

import { COLORS, FONT_WEIGHT, SIZES, SPACINGS, Z_INDEX } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { TabsVariantType } from './variants';

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

export const PRIMARY_TABS_STYLES: TabsStylesType<TabsVariantType> = {
  [TabsVariantType.DEFAULT]: {
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
    oneTabContainer: {
      display: 'flex',
      justify_content: 'center',
      cursor: 'default',
      width: '100%',
      padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_500} ${SPACINGS.spacing_250} ${SPACINGS.spacing_500}`,
      border_top_width: SIZES.size_25,
      border_top_color: COLORS.BRAND.color_brand_border_50,
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      border_style: 'solid',
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
        border_top_width: SIZES.size_25,
        border_top_color: COLORS.BRAND.color_brand_border_50,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_style: 'solid',
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
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
      tabButton: {
        width: '100%',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_500} ${SPACINGS.spacing_250} ${SPACINGS.spacing_500}`,
        background_color: COLORS.NEUTRAL.color_neutral_bg_50,
        cursor: 'pointer',
        [DeviceBreakpointsType.MOBILE]: {
          padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_0} ${SPACINGS.spacing_250} ${SPACINGS.spacing_0}`,
        },
      },
    },
    [TabsStateTypes.EMPTY]: {
      tabButton: {
        padding: SPACINGS.spacing_0,
        min_height: '3rem',
      },
    },
  },
};
