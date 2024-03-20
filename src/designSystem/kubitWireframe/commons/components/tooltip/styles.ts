import { TooltipStylesType } from '@/components/tooltip/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { DeviceBreakpointsType } from '@/types';

import {
  BORDERS,
  FONT_WEIGHT,
  RADIUS,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
  Z_INDEX,
} from '../../foundations';
import { TextVariantType } from '../text';
import { PopoverVariantType } from '../variants';
import { TooltipVariantType } from './variants';

export const getTooltipStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TooltipStylesType<TooltipVariantType> => {
  return {
    [TooltipVariantType.DEFAULT]: {
      headerContainer: {
        flex_direction: 'row-reverse',
        [DeviceBreakpointsType.TABLET]: {
          flex_direction: 'column',
        },
        [DeviceBreakpointsType.MOBILE]: {
          flex_direction: 'column',
        },
      },
      title: {
        font_weight: FONT_WEIGHT.font_weight_400,
        text_align: TEXT_ALIGN.left,
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      paragraph: {
        font_weight: FONT_WEIGHT.font_weight_400,
        text_align: TEXT_ALIGN.left,
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      closeButtonContainer: {
        altVariant: true,
      },
      closeButtonIcon: {
        color: COLORS.NEUTRAL.color_neutral_font_50,
        height: SIZES.size_300,
        width: SIZES.size_300,
      },
      divider: {
        border_top_color: '',
        border_top_width: '',
        border_style: '',
        padding_top: '',
      },
      arrowContainer: {
        padding: SPACINGS.spacing_250,
        z_index: Z_INDEX.OVERLAY,
        display: 'none',
        box_sizing: 'border-box',
        position: 'relative',
        arrow_size: '10px',
        arrow_position: '10px',
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        ...transformShadow(RADIUS.radius_300),
        ...shadowAfterStyles(
          RADIUS.radius_300,
          COLORS.BRAND.color_brand_bg_50,
          SPACINGS.spacing_50
        ),
        [DeviceBreakpointsType.TABLET]: {
          display: 'none',
        },
        [DeviceBreakpointsType.MOBILE]: {
          display: 'none',
        },
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
      tooltipInternalContainer: {
        max_width: '20rem',
        max_height: '30rem',
        display: 'flex',
        flex_direction: 'column',
        width: 'max-content',
        border_width: BORDERS.border_50,
        border_style: 'solid',
        border_color: COLORS.SECONDARY.color_secondary_border_50,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        padding: SPACINGS.spacing_300,
        border_radius: RADIUS.radius_300,
        ...transformShadow(RADIUS.radius_300),
        ...shadowAfterStyles(
          RADIUS.radius_300,
          COLORS.BRAND.color_brand_bg_50,
          SPACINGS.spacing_50
        ),
        [DeviceBreakpointsType.TABLET]: {
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
          border_radius: `${RADIUS.radius_50} ${RADIUS.radius_50} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
          padding: SPACINGS.spacing_400,
          width: SPACINGS.spacing_100_percent,
          max_width: 'none',
          max_height: '100vh',
        },
        [DeviceBreakpointsType.MOBILE]: {
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
          border_radius: `${RADIUS.radius_50} ${RADIUS.radius_50} ${RADIUS.radius_00} ${RADIUS.radius_00}`,
          padding: SPACINGS.spacing_400,
          width: SPACINGS.spacing_100_percent,
          max_width: 'none',
          max_height: '100vh',
        },
      },
      tooltipAsModal: true,
      popoverVariant: {
        [DeviceBreakpointsType.TABLET]: PopoverVariantType.TOOLTIP,
        [DeviceBreakpointsType.MOBILE]: PopoverVariantType.TOOLTIP,
      },
    },
  };
};
