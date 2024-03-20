import { ModalStylesType } from '@/components/modal/types';
import { DeviceBreakpointsType } from '@/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS, TEXT_ALIGN } from '../../foundations';
import { FooterVariants } from '../footer/variants';
import { PopoverVariantType } from '../popover/variants';
import { ModalVariantType } from './variants';

const tableAndMobileRadius = `${RADIUS.radius_150} ${RADIUS.radius_150} ${RADIUS.radius_00} ${RADIUS.radius_00}`;

export const getModalStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): ModalStylesType<ModalVariantType> => {
  return {
    [ModalVariantType.DEFAULT]: {
      popoverVariant: PopoverVariantType.MODAL,
      footerVariant: FooterVariants.EMPTY,
      container: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        overflow_y: 'unset',
        display: 'flex',
        align_items: 'center',
        flex_flow: 'column nowrap',
        box_sizing: 'border-box',
        border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        [DeviceBreakpointsType.DESKTOP]: {
          min_width: '37.5rem',
          min_height: '16.1rem',
          max_width: `calc(${SPACINGS.spacing_100_vw} - 40px)`,
          max_height: `calc(${SPACINGS.spacing_100_vh} - 40px)`,
          ...transformShadow(RADIUS.radius_150),
          ...shadowAfterStyles(
            RADIUS.radius_150,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
        [DeviceBreakpointsType.TABLET]: {
          width: `calc(${SPACINGS.spacing_100_vw} - ${SPACINGS.spacing_100})`,
          bottom: SPACINGS.spacing_50,
          ...transformShadow(tableAndMobileRadius),
          ...shadowAfterStyles(
            tableAndMobileRadius,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
        [DeviceBreakpointsType.MOBILE]: {
          width: `calc(${SPACINGS.spacing_100_vw} - ${SPACINGS.spacing_100})`,
          bottom: SPACINGS.spacing_50,
          ...transformShadow(tableAndMobileRadius),
          ...shadowAfterStyles(
            tableAndMobileRadius,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
      },
      headerContainer: {
        width: SPACINGS.spacing_100_percent,
        padding: SPACINGS.spacing_400,
      },
      imageContainer: {
        display: 'flex',
        justify_content: 'center',
        margin_bottom: SPACINGS.spacing_300,
      },
      title: {
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        text_align: TEXT_ALIGN.center,
      },
      content: {
        margin_top: SPACINGS.spacing_0,
        width: SPACINGS.spacing_100_percent,
        flex: 'auto',
        overflow_y: 'auto',
        max_height: SPACINGS.spacing_100_vh,
        padding_left: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_450,
        padding_bottom: SPACINGS.spacing_300,
        [DeviceBreakpointsType.MOBILE]: {
          padding_left: SPACINGS.spacing_300,
          padding_right: SPACINGS.spacing_300,
        },
      },
      closeButtonContainer: {
        display: 'flex',
        justify_content: 'end',
        margin_bottom: SPACINGS.spacing_0,
      },
      closeButtonIcon: {
        color: COLORS.NEUTRAL.color_neutral_icon_50,
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
      footer: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        padding: `${SPACINGS.spacing_400} ${SPACINGS.spacing_450}`,
        width: SPACINGS.spacing_100_percent,
        border_radius: `${RADIUS.radius_00} ${RADIUS.radius_00} ${RADIUS.radius_150} ${RADIUS.radius_150}`,
        border_top: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
      },
    },
    [ModalVariantType.DEFAULT_ABSOLUTE]: {
      popoverVariant: PopoverVariantType.MODAL_ABSOLUTE,
      footerVariant: FooterVariants.EMPTY,
      container: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        overflow_y: 'unset',
        display: 'flex',
        align_items: 'center',
        flex_flow: 'column nowrap',
        box_sizing: 'border-box',
        border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        [DeviceBreakpointsType.DESKTOP]: {
          min_width: '37.5rem',
          min_height: '16.1rem',
          max_width: `calc(${SPACINGS.spacing_100_vw} - 40px)`,
          max_height: `calc(${SPACINGS.spacing_100_vh} - 40px)`,
          ...transformShadow(RADIUS.radius_150),
          ...shadowAfterStyles(
            RADIUS.radius_150,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
        [DeviceBreakpointsType.TABLET]: {
          width: `calc(${SPACINGS.spacing_100_vw} - ${SPACINGS.spacing_100})`,
          bottom: SPACINGS.spacing_50,
          ...transformShadow(tableAndMobileRadius),
          ...shadowAfterStyles(
            tableAndMobileRadius,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
        [DeviceBreakpointsType.MOBILE]: {
          width: `calc(${SPACINGS.spacing_100_vw} - ${SPACINGS.spacing_100})`,
          bottom: SPACINGS.spacing_50,
          ...transformShadow(tableAndMobileRadius),
          ...shadowAfterStyles(
            tableAndMobileRadius,
            COLORS.BRAND.color_brand_bg_50,
            SPACINGS.spacing_50
          ),
        },
      },
      headerContainer: {
        width: SPACINGS.spacing_100_percent,
        padding: SPACINGS.spacing_400,
      },
      imageContainer: {
        display: 'flex',
        justify_content: 'center',
        margin_bottom: SPACINGS.spacing_300,
      },
      title: {
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        text_align: TEXT_ALIGN.center,
      },
      content: {
        margin_top: SPACINGS.spacing_0,
        width: SPACINGS.spacing_100_percent,
        flex: 'auto',
        overflow_y: 'auto',
        max_height: SPACINGS.spacing_100_vh,
        padding_left: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_450,
        padding_bottom: SPACINGS.spacing_300,
        [DeviceBreakpointsType.MOBILE]: {
          padding_left: SPACINGS.spacing_300,
          padding_right: SPACINGS.spacing_300,
        },
      },
      closeButtonContainer: {
        display: 'flex',
        justify_content: 'end',
        margin_bottom: SPACINGS.spacing_0,
      },
      closeButtonIcon: {
        color: COLORS.NEUTRAL.color_neutral_icon_50,
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
      footer: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        padding: `${SPACINGS.spacing_400} ${SPACINGS.spacing_450}`,
        width: SPACINGS.spacing_100_percent,
        border_radius: `${RADIUS.radius_00} ${RADIUS.radius_00} ${RADIUS.radius_150} ${RADIUS.radius_150}`,
        border_top: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
      },
    },
  };
};
