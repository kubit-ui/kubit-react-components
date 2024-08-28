import { ActionBottomSheetStylesType } from '@/components/actionBottomSheet/types';
import { DeviceBreakpointsType } from '@/types';

import {
  COLORS,
  FONT_WEIGHT,
  RADIUS,
  SHADOW,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
} from '../../foundations';
import { PopoverVariantType } from '../popover/variants';
import { TextVariantType } from '../text/variants';
import { ActionBottomSheetVariantType } from './variants';

const ACTION_BUTTON_SHEET_TOKENS = {
  container: {
    width: '20rem',
    box_shadow: SHADOW.shadow_10,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border_radius: `${RADIUS.radius_50} ${RADIUS.radius_50} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
    padding: `${SPACINGS.spacing_0} ${SPACINGS.spacing_300} ${SPACINGS.spacing_400}`,
    display: 'flex',
    flex_direction: 'column',
    overflow_y: 'auto',
    [DeviceBreakpointsType.TABLET]: {
      width: '100%',
      border_radius: `${RADIUS.radius_50} ${RADIUS.radius_50} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
    },
    [DeviceBreakpointsType.MOBILE]: {
      width: '100%',
      border_radius: `${RADIUS.radius_50} ${RADIUS.radius_50} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
    },
  },
  closeIconContainer: {
    justify_content: 'flex-end',
    margin_bottom: SPACINGS.spacing_300,
  },
  closeIcon: {
    width: SIZES.size_250,
    height: SIZES.size_250,
    color: COLORS.NEUTRAL.color_neutral_icon_50,
  },
  header: {
    display: 'flex',
    flex_direction: 'column',
    padding: SPACINGS.spacing_300,
    padding_top: '0',
    [DeviceBreakpointsType.TABLET]: {
      margin_bottom: SPACINGS.spacing_250,
    },
    [DeviceBreakpointsType.MOBILE]: {
      margin_bottom: SPACINGS.spacing_250,
    },
  },
  controlContainer: {
    display: 'flex',
    justify_content: 'space-between',
    width: '100%',
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    padding_top: SPACINGS.spacing_400,
  },
  titleContainer: {
    margin_bottom: SPACINGS.spacing_300,
  },
  titleContainerFont: {
    [DeviceBreakpointsType.DESKTOP]: {
      text_align: TEXT_ALIGN.left,
    },
    [DeviceBreakpointsType.TABLET]: {
      text_align: TEXT_ALIGN.center,
    },
    [DeviceBreakpointsType.MOBILE]: {
      text_align: TEXT_ALIGN.center,
    },
  },
  title: {
    font_weight: FONT_WEIGHT.font_weight_600,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    font_variant: TextVariantType.HEADING_H4_EXTENDED,
  },
  content: {
    max_height: '100vh',
  },
};

export const ACTION_BOTTOM_SHEET_STYLES: ActionBottomSheetStylesType<ActionBottomSheetVariantType> =
  {
    [ActionBottomSheetVariantType.DEFAULT]: {
      popoverVariant: PopoverVariantType.ACTION_BOTTOM_SHEET,
      ...ACTION_BUTTON_SHEET_TOKENS,
    },
    [ActionBottomSheetVariantType.INPUT_SEARCH]: {
      popoverVariant: PopoverVariantType.ACTION_BOTTOM_SHEET,
      container: {
        width: '100%',
        box_shadow: SHADOW.shadow_10,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        display: 'flex',
        flex_direction: 'column',
        overflow_y: 'auto',
      },
      closeIconContainer: {
        justify_content: 'flex-end',
        margin_bottom: SPACINGS.spacing_100,
      },
      closeIcon: {
        width: SIZES.size_250,
        height: SIZES.size_250,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
      header: {
        display: 'flex',
        flex_direction: 'column',
        margin_top: SPACINGS.spacing_300,
        padding_left: SPACINGS.spacing_300,
        padding_right: SPACINGS.spacing_300,
      },
      titleContainer: {
        margin_bottom: SPACINGS.spacing_400,
      },
      titleContainerFont: {
        text_align: TEXT_ALIGN.center,
      },
      title: {
        font_variant: TextVariantType.PARAGRAPH_LARGE_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_500,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      content: {
        max_height: '100vh',
        overflow_y: 'auto',
        padding_top: SPACINGS.spacing_300,
      },
    },
    [ActionBottomSheetVariantType.INPUT_DROPDOWN_DEFAULT]: {
      popoverVariant: PopoverVariantType.ACTION_BOTTOM_SHEET,
      container: {
        width: '100%',
        box_shadow: SHADOW.shadow_10,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        display: 'flex',
        flex_direction: 'column',
        overflow_y: 'auto',
      },
      closeIconContainer: {
        justify_content: 'flex-end',
        margin_bottom: SPACINGS.spacing_100,
      },
      closeIcon: {
        width: SIZES.size_250,
        height: SIZES.size_250,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
      header: {
        display: 'flex',
        flex_direction: 'column',
        margin_top: SPACINGS.spacing_300,
        padding_left: SPACINGS.spacing_300,
        padding_right: SPACINGS.spacing_300,
      },
      titleContainer: {
        margin_bottom: SPACINGS.spacing_400,
      },
      titleContainerFont: {
        text_align: TEXT_ALIGN.center,
      },
      title: {
        font_variant: TextVariantType.PARAGRAPH_LARGE_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_500,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      content: {
        max_height: '100vh',
        overflow_y: 'auto',
        padding_top: SPACINGS.spacing_300,
      },
    },
  };
