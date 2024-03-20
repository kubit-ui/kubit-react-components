import { TooltipStylesType } from '@/components/tooltip/types';
import { DeviceBreakpointsType } from '@/types';

import {
  COLORS,
  FONT_WEIGHT,
  RADIUS,
  SHADOW,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
  Z_INDEX,
} from '../../foundations';
import { TextVariantType } from '../text';
import { PopoverVariantType } from '../variants';
import { TooltipVariantType } from './variants';

export const TOOLTIP_STYLES: TooltipStylesType<TooltipVariantType> = {
  [TooltipVariantType.DEFAULT]: {
    headerContainer: {
      flex_direction: 'column',
    },
    title: {
      font_weight: FONT_WEIGHT.font_weight_400,
      text_align: TEXT_ALIGN.left,
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
      color: COLORS.NEUTRAL.color_neutral_font_250,
    },
    paragraph: {
      font_weight: FONT_WEIGHT.font_weight_400,
      text_align: TEXT_ALIGN.left,
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
      color: COLORS.NEUTRAL.color_neutral_font_250,
      [DeviceBreakpointsType.TABLET]: {
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
    },
    paragraphContainer: {
      flex_direction: 'column',
    },
    divider: {
      border_top_color: '',
      border_top_width: '',
      border_style: '',
      padding_top: '',
    },
    tooltipExternalContainer: {
      [DeviceBreakpointsType.DESKTOP]: {
        padding: SPACINGS.spacing_250,
        z_index: Z_INDEX.OVERLAY,
        display: 'none',
        position: 'fixed',
        box_sizing: 'border-box',
      },
    },
    arrowContainer: {
      arrow_size: '10px',
      arrow_position: '10px',
      background_color: COLORS.NEUTRAL.color_neutral_bg_150,
      [DeviceBreakpointsType.TABLET]: {
        display: 'none',
      },
      [DeviceBreakpointsType.MOBILE]: {
        display: 'none',
      },
    },
    tooltipInternalContainer: {
      max_width: '20rem',
      max_height: '30rem',
      display: 'flex',
      flex_direction: 'column',
      width: 'max-content',
      background_color: COLORS.NEUTRAL.color_neutral_bg_150,
      padding: SPACINGS.spacing_300,
      border_radius: RADIUS.radius_50,
      box_shadow: SHADOW.shadow_10,
      [DeviceBreakpointsType.TABLET]: {
        border_radius: `${RADIUS.radius_50} ${RADIUS.radius_50} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
        padding: SPACINGS.spacing_400,
        width: SPACINGS.spacing_100_percent,
        max_width: 'none',
        max_height: '100vh',
      },
      [DeviceBreakpointsType.MOBILE]: {
        border_radius: `${RADIUS.radius_50} ${RADIUS.radius_50} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
        padding: SPACINGS.spacing_400,
        width: SPACINGS.spacing_100_percent,
        max_width: 'none',
        max_height: '100vh',
      },
    },
    closeButtonContainer: {
      altVariant: true,
      margin_bottom: SPACINGS.spacing_300,
    },
    closeButtonIcon: {
      color: COLORS.ACCENT.color_accent_default_icon_150,
      height: SIZES.size_300,
      width: SIZES.size_300,
    },
    tooltipAsModal: true,
    popoverVariant: {
      [DeviceBreakpointsType.TABLET]: PopoverVariantType.TOOLTIP,
      [DeviceBreakpointsType.MOBILE]: PopoverVariantType.TOOLTIP,
    },
  },
};
