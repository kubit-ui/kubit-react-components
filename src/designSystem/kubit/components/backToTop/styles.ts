// types
import { BackToTopVariantStyles } from '@/components/backToTop/types/backToTopTheme';
import { BackToTopStateType } from '@/components/backToTop/types/state';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

//constants
import { COLORS } from '../../foundations/colors';
import { SHADOW } from '../../foundations/shadow';
import { SIZES } from '../../foundations/sizes';
import { SPACINGS } from '../../foundations/spacings';
import { Z_INDEX } from '../../foundations/zIndex';
import { BackToTopVariantsType } from './variants';

export const BACK_TO_TOP_STYLES: BackToTopVariantStyles<BackToTopVariantsType> = {
  [BackToTopVariantsType.DEFAULT]: {
    [BackToTopStateType.DEFAULT]: {
      container: {
        box_shadow: SHADOW.shadow_10,
        background_color: COLORS.ACCENT.color_accent_default_bg_100,
        padding: SPACINGS.spacing_250,
        right: SPACINGS.spacing_450,
        z_index: Z_INDEX.FLOATING,
        [DeviceBreakpointsType.MOBILE]: {
          right: SPACINGS.spacing_300,
        },
      },
      icon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
    },
    [BackToTopStateType.HOVER]: {
      container: {
        background_color: COLORS.HOVER.color_accent_hover_bg_50,
        padding: SPACINGS.spacing_250,
        right: SPACINGS.spacing_450,
        z_index: Z_INDEX.FLOATING,
        [DeviceBreakpointsType.MOBILE]: {
          right: SPACINGS.spacing_300,
        },
      },
      icon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
    },
    [BackToTopStateType.PRESSED]: {
      container: {
        background_color: COLORS.PRESSED.color_accent_pressed_bg_50,
        padding: SPACINGS.spacing_250,
        right: SPACINGS.spacing_450,
        z_index: Z_INDEX.FLOATING,
        [DeviceBreakpointsType.MOBILE]: {
          right: SPACINGS.spacing_300,
        },
      },
      icon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
        color: COLORS.PRESSED.color_accent_pressed_icon_250,
      },
    },
  },
};
