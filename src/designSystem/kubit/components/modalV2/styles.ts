import { ModalStylesType as ModalStylesTypeV2 } from '@/components/modalV2/types/modalTheme';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import { BORDERS, RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SIZES } from '../../foundations/sizes';
import { SPACINGS } from '../../foundations/spacings';
import { FONT_WEIGHT, TEXT_ALIGN } from '../../foundations/typography';
import { FooterVariants } from '../footer/variants';
import { PopoverVariantType } from '../popover/variants';
import { TextVariantType } from '../text/variants';
import { ModalVariantTypeV2 } from './variants';

const commonTokens = {
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
    gap: SPACINGS.spacing_150,
  },
  headerContentContainer: {
    display: 'flex',
    flex_direction: 'row-reverse',
    align_items: 'center',
  },
  dragIconContainer: {
    display: 'flex',
    align_items: 'center',
    justify_content: 'center',
  },
  title: {
    font_weight: FONT_WEIGHT.font_weight_600,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    text_align: TEXT_ALIGN.center,
    font_variant: TextVariantType.HEADING_H4_EXPANDED,
  },
  titleContainer: {
    // styles for centering the title in the header
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  closeButtonIcon: {
    color: COLORS.NEUTRAL.color_neutral_icon_50,
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
  closeButtonContainer: {
    display: 'flex',
    justify_content: 'end',
    width: '100%',
  },
  content: {
    margin_top: SPACINGS.spacing_0,
    width: SPACINGS.spacing_100_percent,
    flex: 'auto',
    overflow_y: 'auto',
  },
};

export const MODAL_STYLES_V2: ModalStylesTypeV2<ModalVariantTypeV2> = {
  [ModalVariantTypeV2.DEFAULT]: {
    ...commonTokens,
    footerVariant: FooterVariants.DEFAULT,
    container: {
      ...commonTokens.container,
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
      ...commonTokens.headerContainer,
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
    content: {
      ...commonTokens.content,
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
  [ModalVariantTypeV2.DEFAULT_ABSOLUTE]: {
    ...commonTokens,
    popoverVariant: PopoverVariantType.MODAL_ABSOLUTE,
    container: {
      ...commonTokens.container,
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
      ...commonTokens.headerContainer,
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
    content: {
      ...commonTokens.content,
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
  [ModalVariantTypeV2.DEFAULT_ABSOLUTE_TINY]: {
    ...commonTokens,
    popoverVariant: PopoverVariantType.MODAL_ABSOLUTE,
    container: {
      ...commonTokens.container,
      background_color: COLORS.NEUTRAL.color_neutral_bg_200,
    },
    headerContainer: {
      ...commonTokens.headerContainer,
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
    content: {
      ...commonTokens.content,
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
