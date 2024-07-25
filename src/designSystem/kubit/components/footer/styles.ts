import { FooterStylesType } from '@/components/footer/types';
import { DeviceBreakpointsType } from '@/types';

import { COLORS, SPACINGS } from '../../foundations';
import { LineSeparatorLineVariantType } from '../variants';
import { FooterVariants } from './variants';

export const FOOTER_STYLES: FooterStylesType<FooterVariants> = {
  [FooterVariants.DEFAULT]: {
    rootContainer: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      gap: SPACINGS.spacing_400,
      flex_direction: 'row',
      [DeviceBreakpointsType.DESKTOP]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_0,
      },
      [DeviceBreakpointsType.TABLET]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_0,
      },
      [DeviceBreakpointsType.MOBILE]: {
        padding_top: SPACINGS.spacing_400,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_0,
        gap: SPACINGS.spacing_400,
        flex_direction: 'column',
      },
    },
    contentContainer: {
      gap: SPACINGS.spacing_50,
      [DeviceBreakpointsType.MOBILE]: {
        flex_direction: 'column',
        width: '100%',
      },
    },
    lineSeparator: {
      variant: LineSeparatorLineVariantType.LINE_DEFAULT,
    },
  },
  [FooterVariants.DEFAULT_ALTERNATIVE]: {
    rootContainer: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_50,
      flex_direction: 'row',
      [DeviceBreakpointsType.DESKTOP]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_0,
      },
      [DeviceBreakpointsType.TABLET]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_0,
      },
      [DeviceBreakpointsType.MOBILE]: {
        padding_top: SPACINGS.spacing_400,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_400,
        padding_left: SPACINGS.spacing_0,
        gap: SPACINGS.spacing_400,
        flex_direction: 'column',
      },
    },
    contentContainer: {
      gap: SPACINGS.spacing_50,
      [DeviceBreakpointsType.MOBILE]: {
        flex_direction: 'column',
        width: '100%',
      },
    },
    lineSeparator: {
      variant: LineSeparatorLineVariantType.LINE_DEFAULT,
    },
  },
  [FooterVariants.MODAL]: {
    rootContainer: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      flex_direction: 'row',
      [DeviceBreakpointsType.DESKTOP]: {
        padding_top: SPACINGS.spacing_250,
        padding_bottom: SPACINGS.spacing_250,
      },
      [DeviceBreakpointsType.TABLET]: {
        padding_top: SPACINGS.spacing_250,
        padding_bottom: SPACINGS.spacing_250,
      },
      [DeviceBreakpointsType.MOBILE]: {
        padding_top: SPACINGS.spacing_250,
        padding_bottom: SPACINGS.spacing_250,
        gap: SPACINGS.spacing_50,
        flex_direction: 'column',
      },
    },
    contentContainer: {
      gap: SPACINGS.spacing_50,
      [DeviceBreakpointsType.MOBILE]: {
        flex_direction: 'column',
        width: '100%',
      },
    },
    lineSeparator: {
      variant: LineSeparatorLineVariantType.LINE_DEFAULT,
    },
  },
  [FooterVariants.ALTERNATIVE]: {
    rootContainer: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      flex_direction: 'row',
      [DeviceBreakpointsType.DESKTOP]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_800,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_800,
      },
      [DeviceBreakpointsType.TABLET]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_0,
      },
      [DeviceBreakpointsType.MOBILE]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_0,
        gap: SPACINGS.spacing_50,
        flex_direction: 'column',
      },
    },
    contentContainer: {
      gap: SPACINGS.spacing_50,
      [DeviceBreakpointsType.MOBILE]: {
        flex_direction: 'column',
        width: '100%',
      },
    },
    lineSeparator: {
      variant: LineSeparatorLineVariantType.LINE_DEFAULT,
    },
  },
  [FooterVariants.REVERSE]: {
    rootContainer: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      flex_direction: 'row',
      [DeviceBreakpointsType.DESKTOP]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_800,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_800,
      },
      [DeviceBreakpointsType.TABLET]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_0,
      },
      [DeviceBreakpointsType.MOBILE]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_0,
        gap: SPACINGS.spacing_50,
        flex_direction: 'column',
      },
    },
    contentContainer: {
      gap: SPACINGS.spacing_50,
      [DeviceBreakpointsType.MOBILE]: {
        flex_direction: 'column-reverse',
        width: '100%',
      },
    },
    lineSeparator: {
      variant: LineSeparatorLineVariantType.LINE_DEFAULT,
    },
  },
  [FooterVariants.SECONDARY]: {
    rootContainer: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      flex_direction: 'row',
      [DeviceBreakpointsType.DESKTOP]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_150,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_150,
      },
      [DeviceBreakpointsType.TABLET]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_0,
      },
      [DeviceBreakpointsType.MOBILE]: {
        padding_top: SPACINGS.spacing_450,
        padding_right: SPACINGS.spacing_0,
        padding_bottom: SPACINGS.spacing_450,
        padding_left: SPACINGS.spacing_0,
        gap: SPACINGS.spacing_50,
        flex_direction: 'column',
      },
    },
    contentContainer: {
      gap: SPACINGS.spacing_450,
      [DeviceBreakpointsType.MOBILE]: {
        gap: SPACINGS.spacing_50,
        flex_direction: 'column',
        width: '100%',
      },
    },
    lineSeparator: {
      variant: LineSeparatorLineVariantType.LINE_DEFAULT,
    },
  },
};
