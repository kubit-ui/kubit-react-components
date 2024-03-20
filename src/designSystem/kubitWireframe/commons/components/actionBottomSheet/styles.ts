import { ActionBottomSheetStylesType } from '@/components/actionBottomSheet/types';
import { DeviceBreakpointsType } from '@/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import {
  BORDERS,
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

export const getActionBottomSheetStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): ActionBottomSheetStylesType<ActionBottomSheetVariantType> => {
  return {
    [ActionBottomSheetVariantType.DEFAULT]: {
      container: {
        width: '20rem',
        box_shadow: SHADOW.shadow_10,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        padding: SPACINGS.spacing_400,
        border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        max_height: '100%',
        ...transformShadow(RADIUS.radius_150),
        ...shadowAfterStyles(
          RADIUS.radius_150,
          COLORS.BRAND.color_brand_bg_50,
          SPACINGS.spacing_50
        ),
        [DeviceBreakpointsType.TABLET]: {
          width: SPACINGS.spacing_100_percent,
        },
        [DeviceBreakpointsType.MOBILE]: {
          width: SPACINGS.spacing_100_percent,
          max_height: '100svh',
        },
      },
      closeIconContainer: {
        justify_content: 'flex-start',
      },
      closeIcon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
      header: {
        display: 'flex',
        flex_direction: 'column',
        padding: SPACINGS.spacing_300,
        [DeviceBreakpointsType.TABLET]: {
          box_shadow: SHADOW.shadow_10,
          margin_bottom: SPACINGS.spacing_250,
        },
        [DeviceBreakpointsType.MOBILE]: {
          box_shadow: SHADOW.shadow_10,
          margin_bottom: SPACINGS.spacing_250,
        },
      },
      titleContainer: {
        margin_top: SPACINGS.spacing_300,
        margin_bottom: SPACINGS.spacing_300,
      },
      titleContainerFont: {
        text_align: TEXT_ALIGN.left,
      },
      title: {
        font_weight: FONT_WEIGHT.font_weight_500,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_variant: TextVariantType.HEADING_H4_EXTENDED,
      },
      popoverVariant: PopoverVariantType.ACTION_BOTTOM_SHEET,
    },
    [ActionBottomSheetVariantType.FUNCTIONALITIES_MODULE]: {
      container: {
        width: '20rem',
        box_shadow: SHADOW.shadow_10,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        padding: SPACINGS.spacing_400,
        border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        max_height: '100%',
        ...transformShadow(RADIUS.radius_150),
        ...shadowAfterStyles(
          RADIUS.radius_150,
          COLORS.BRAND.color_brand_bg_50,
          SPACINGS.spacing_50
        ),
        [DeviceBreakpointsType.TABLET]: {
          width: SPACINGS.spacing_100_percent,
        },
        [DeviceBreakpointsType.MOBILE]: {
          width: SPACINGS.spacing_100_percent,
          max_height: '100svh',
        },
      },
      closeIconContainer: {
        justify_content: 'flex-start',
      },
      closeIcon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
      titleContainer: {
        margin_top: SPACINGS.spacing_300,
        margin_bottom: SPACINGS.spacing_300,
      },
      titleContainerFont: {
        text_align: TEXT_ALIGN.left,
      },
      title: {
        font_weight: FONT_WEIGHT.font_weight_500,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_variant: TextVariantType.HEADING_H4_EXTENDED,
      },
      content: {
        [DeviceBreakpointsType.TABLET]: {
          overflow_y: 'auto',
          padding_bottom: SPACINGS.spacing_150,
          max_height: '100vh',
        },
        [DeviceBreakpointsType.MOBILE]: {
          overflow_y: 'auto',
          padding_bottom: SPACINGS.spacing_150,
          max_height: '100vh',
        },
      },
      popoverVariant: PopoverVariantType.ACTION_BOTTOM_SHEET,
    },
  };
};
