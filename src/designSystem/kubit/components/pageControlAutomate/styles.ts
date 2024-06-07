import { MediaButtonSizeType } from '@/components/mediaButton';
import { PageControlAutomateStylesType } from '@/components/pageControlAutomate';
import { DeviceBreakpointsType } from '@/types/breakpoints';

import { COLORS, SIZES, SPACINGS } from '../../foundations';
import { MediaProgressBarVariantType } from '../mediaProgressBar';
import { PageControlAutomateVariant } from './variants';

const commonProps = {
  container: {
    display: 'flex',
    align_items: 'center',
    width: 'auto',
    [DeviceBreakpointsType.DESKTOP]: {
      height: SPACINGS.spacing_400,
      max_height: SPACINGS.spacing_450,
    },
    [DeviceBreakpointsType.TABLET]: {
      height: SPACINGS.spacing_550,
    },
    [DeviceBreakpointsType.MOBILE]: {
      height: SPACINGS.spacing_550,
    },
  },
  indicatorsContainer: {
    display: 'flex',
  },
  mediaButtonContainer: {
    margin_right: SPACINGS.spacing_300,
  },
  mediaButton: {
    iconSize: MediaButtonSizeType.SMALL,
  },
  leftArrowContainer: {
    [DeviceBreakpointsType.DESKTOP]: {
      margin_right: SPACINGS.spacing_300,
    },
    [DeviceBreakpointsType.TABLET]: {
      margin_right: SPACINGS.spacing_150,
    },
    [DeviceBreakpointsType.MOBILE]: {
      margin_right: SPACINGS.spacing_150,
    },
  },
  rightArrowContainer: {
    [DeviceBreakpointsType.DESKTOP]: {
      margin_left: SPACINGS.spacing_300,
    },
    [DeviceBreakpointsType.TABLET]: {
      margin_left: SPACINGS.spacing_150,
    },
    [DeviceBreakpointsType.MOBILE]: {
      margin_left: SPACINGS.spacing_150,
    },
  },
  leftArrowIcon: {
    width: SIZES.size_250,
    height: SIZES.size_250,
    disabled: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.ACCENT.color_accent_default_bg_100,
    },
  },
  rightArrowIcon: {
    width: SIZES.size_250,
    height: SIZES.size_250,
    disabled: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.ACCENT.color_accent_default_bg_100,
    },
  },
};

export const PAGE_CONTROL_AUTOMATE_STYLES: PageControlAutomateStylesType<PageControlAutomateVariant> =
  {
    [PageControlAutomateVariant.DEFAULT]: {
      ...commonProps,
      leftArrowIcon: {
        ...commonProps.leftArrowIcon,
        color: COLORS.BRAND.color_brand_bg_50,
      },
      rightArrowIcon: {
        ...commonProps.rightArrowIcon,
        color: COLORS.BRAND.color_brand_bg_50,
      },
      mediaButton: {
        ...commonProps.mediaButton,
        variant: MediaProgressBarVariantType.DEFAULT,
      },
      mediaProgressBarVariant: MediaProgressBarVariantType.DEFAULT,
    },
    [PageControlAutomateVariant.ALTERNATIVE]: {
      ...commonProps,
      leftArrowIcon: {
        ...commonProps.leftArrowIcon,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      rightArrowIcon: {
        ...commonProps.rightArrowIcon,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      mediaButton: {
        ...commonProps.mediaButton,
        variant: MediaProgressBarVariantType.DEFAULT,
      },
      mediaProgressBarVariant: MediaProgressBarVariantType.DEFAULT,
    },
  };
