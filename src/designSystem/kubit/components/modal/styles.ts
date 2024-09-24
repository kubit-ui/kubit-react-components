//Foundations
import { ModalStylesType } from '@/components/modal/types';
import { DeviceBreakpointsType } from '@/types';

import {
  BORDERS,
  COLORS,
  FONT_WEIGHT,
  RADIUS,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
} from '../../foundations';
import { TextVariantType } from '../text/variants';
import { FooterVariants, PopoverVariantType } from '../variants';
import { ModalVariantType } from './variants';

const commonProps = {
  popoverVariant: PopoverVariantType.MODAL,
  container: {
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    overflow_y: 'auto',
    display: 'flex',
    align_items: 'center',
    flex_flow: 'column nowrap',
    box_sizing: 'border-box',
    border_radius: RADIUS.radius_50,
  },
  headerContainer: {
    width: SPACINGS.spacing_100_percent,
    display: 'flex',
    flex_direction: 'column',
    justify_content: 'space-between',
    align_items: 'center',
    gap: SPACINGS.spacing_150,
  },
  title: {
    font_weight: FONT_WEIGHT.font_weight_600,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    text_align: TEXT_ALIGN.center,
    font_variant: TextVariantType.HEADING_H4_EXPANDED,
  },
  content: {
    margin_top: SPACINGS.spacing_0,
    width: SPACINGS.spacing_100_percent,
    flex: 'auto',
    overflow_y: 'auto',
  },
  closeButtonContainer: {
    display: 'flex',
    justify_content: 'end',
    width: '100%',
  },
  closeButtonIcon: {
    color: COLORS.NEUTRAL.color_neutral_icon_50,
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
};

export const MODAL_STYLES: ModalStylesType<ModalVariantType> = {
  [ModalVariantType.DEFAULT]: {
    ...commonProps,
    footerVariant: FooterVariants.DEFAULT,
    popoverVariant: PopoverVariantType.MODAL,
    container: {
      ...commonProps.container,
      [DeviceBreakpointsType.DESKTOP]: {
        min_width: '37.5rem',
        min_height: '15rem',
      },
      [DeviceBreakpointsType.TABLET]: {
        min_width: '48rem',
        min_height: '16rem',
      },
    },
    headerContainer: {
      ...commonProps.headerContainer,
      [DeviceBreakpointsType.DESKTOP]: {
        padding: SPACINGS.spacing_400,
      },
      [DeviceBreakpointsType.TABLET]: {
        padding: `${SPACINGS.spacing_300} ${SPACINGS.spacing_400} ${SPACINGS.spacing_400}`,
      },
      [DeviceBreakpointsType.MOBILE]: {
        padding: `${SPACINGS.spacing_300} ${SPACINGS.spacing_300} ${SPACINGS.spacing_400} ${SPACINGS.spacing_300}`,
      },
    },
    imageContainer: {
      display: 'flex',
      justify_content: 'center',
      margin_bottom: SPACINGS.spacing_300,
    },
    imageHeader: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      height: SIZES.size_modal_icon,
      width: SIZES.size_modal_icon,
    },
    content: {
      ...commonProps.content,
      [DeviceBreakpointsType.DESKTOP]: {
        margin_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_450,
      },
      [DeviceBreakpointsType.TABLET]: {
        margin_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_400,
        padding_right: SPACINGS.spacing_400,
      },
      [DeviceBreakpointsType.MOBILE]: {
        margin_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_300,
        padding_right: SPACINGS.spacing_300,
      },
    },
    footer: {
      [DeviceBreakpointsType.DESKTOP]: {
        border_top_width: BORDERS.border_50,
        border_top_color: COLORS.NEUTRAL.color_neutral_border_200,
        width: `calc(${SPACINGS.spacing_100_percent} - (${SPACINGS.spacing_450} + ${SPACINGS.spacing_450}))`,
      },
      [DeviceBreakpointsType.TABLET]: {
        border_top_width: BORDERS.border_50,
        border_top_color: COLORS.NEUTRAL.color_neutral_border_200,
        width: `calc(${SPACINGS.spacing_100_percent} - (${SPACINGS.spacing_400} + ${SPACINGS.spacing_400}))`,
      },
      [DeviceBreakpointsType.MOBILE]: {
        border_top_width: BORDERS.border_50,
        border_top_color: COLORS.NEUTRAL.color_neutral_border_200,
        width: `calc(${SPACINGS.spacing_100_percent} - (${SPACINGS.spacing_400} + ${SPACINGS.spacing_400}))`,
      },
    },
  },
  [ModalVariantType.DEFAULT_ABSOLUTE]: {
    ...commonProps,
    popoverVariant: PopoverVariantType.MODAL_ABSOLUTE,
    container: {
      ...commonProps.container,
      [DeviceBreakpointsType.DESKTOP]: {
        min_width: '37.5rem',
        min_height: '15rem',
      },
      [DeviceBreakpointsType.TABLET]: {
        min_width: '48rem',
        min_height: '16rem',
      },
    },
    headerContainer: {
      ...commonProps.headerContainer,
      [DeviceBreakpointsType.DESKTOP]: {
        padding: SPACINGS.spacing_400,
      },
      [DeviceBreakpointsType.TABLET]: {
        padding: `${SPACINGS.spacing_300} ${SPACINGS.spacing_400} ${SPACINGS.spacing_400}`,
      },
      [DeviceBreakpointsType.MOBILE]: {
        padding: `${SPACINGS.spacing_300} ${SPACINGS.spacing_300} ${SPACINGS.spacing_400} ${SPACINGS.spacing_300}`,
      },
    },
    imageContainer: {
      display: 'flex',
      justify_content: 'center',
      margin_bottom: SPACINGS.spacing_300,
    },
    imageHeader: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      height: SIZES.size_modal_icon,
      width: SIZES.size_modal_icon,
    },
    content: {
      ...commonProps.content,
      [DeviceBreakpointsType.DESKTOP]: {
        margin_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_450,
      },
      [DeviceBreakpointsType.TABLET]: {
        margin_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_400,
        padding_right: SPACINGS.spacing_400,
      },
      [DeviceBreakpointsType.MOBILE]: {
        margin_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_300,
        padding_right: SPACINGS.spacing_300,
      },
    },
    footer: {
      [DeviceBreakpointsType.DESKTOP]: {
        border_top_width: BORDERS.border_50,
        border_top_color: COLORS.NEUTRAL.color_neutral_border_200,
        width: `calc(${SPACINGS.spacing_100_percent} - (${SPACINGS.spacing_450} + ${SPACINGS.spacing_450}))`,
      },
      [DeviceBreakpointsType.TABLET]: {
        border_top_width: BORDERS.border_50,
        border_top_color: COLORS.NEUTRAL.color_neutral_border_200,
        width: `calc(${SPACINGS.spacing_100_percent} - (${SPACINGS.spacing_400} + ${SPACINGS.spacing_400}))`,
      },
      [DeviceBreakpointsType.MOBILE]: {
        border_top_width: BORDERS.border_50,
        border_top_color: COLORS.NEUTRAL.color_neutral_border_200,
        width: `calc(${SPACINGS.spacing_100_percent} - (${SPACINGS.spacing_400} + ${SPACINGS.spacing_400}))`,
      },
    },
  },
  [ModalVariantType.DEFAULT_ABSOLUTE_TINY]: {
    ...commonProps,
    popoverVariant: PopoverVariantType.MODAL_ABSOLUTE,
    container: {
      ...commonProps.container,
      background_color: COLORS.NEUTRAL.color_neutral_bg_200,
    },
    headerContainer: {
      ...commonProps.headerContainer,
      [DeviceBreakpointsType.DESKTOP]: {
        padding: SPACINGS.spacing_400,
      },
      [DeviceBreakpointsType.TABLET]: {
        padding: `${SPACINGS.spacing_300} ${SPACINGS.spacing_400} ${SPACINGS.spacing_400}`,
      },
      [DeviceBreakpointsType.MOBILE]: {
        padding: `${SPACINGS.spacing_300} ${SPACINGS.spacing_300} ${SPACINGS.spacing_400} ${SPACINGS.spacing_300}`,
      },
    },
    imageContainer: {
      display: 'flex',
      justify_content: 'center',
      margin_bottom: SPACINGS.spacing_300,
    },
    imageHeader: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      height: SIZES.size_modal_icon,
      width: SIZES.size_modal_icon,
    },
    content: {
      ...commonProps.content,
      [DeviceBreakpointsType.DESKTOP]: {
        margin_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_450,
      },
      [DeviceBreakpointsType.TABLET]: {
        margin_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_400,
        padding_right: SPACINGS.spacing_400,
      },
      [DeviceBreakpointsType.MOBILE]: {
        margin_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_300,
        padding_right: SPACINGS.spacing_300,
      },
    },
    footer: {
      [DeviceBreakpointsType.DESKTOP]: {
        border_top_width: BORDERS.border_50,
        border_top_color: COLORS.NEUTRAL.color_neutral_border_200,
        width: `calc(${SPACINGS.spacing_100_percent} - (${SPACINGS.spacing_450} + ${SPACINGS.spacing_450}))`,
      },
      [DeviceBreakpointsType.TABLET]: {
        border_top_width: BORDERS.border_50,
        border_top_color: COLORS.NEUTRAL.color_neutral_border_200,
        width: `calc(${SPACINGS.spacing_100_percent} - (${SPACINGS.spacing_400} + ${SPACINGS.spacing_400}))`,
      },
      [DeviceBreakpointsType.MOBILE]: {
        border_top_width: BORDERS.border_50,
        border_top_color: COLORS.NEUTRAL.color_neutral_border_200,
        width: `calc(${SPACINGS.spacing_100_percent} - (${SPACINGS.spacing_400} + ${SPACINGS.spacing_400}))`,
      },
    },
  },
};
