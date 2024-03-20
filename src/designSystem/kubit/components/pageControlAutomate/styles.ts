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
    height: SPACINGS.spacing_250,
    column_gap: SPACINGS.spacing_50,
    [DeviceBreakpointsType.DESKTOP]: {
      width: '100%',
    },
    [DeviceBreakpointsType.TABLET]: {
      width: '100%',
    },
    [DeviceBreakpointsType.MOBILE]: {
      width: '20.5rem',
    },
  },
  indicatorsContainer: {
    display: 'flex',
    width: '100%',
    column_gap: SPACINGS.spacing_150,
  },
  mediaButton: {
    iconSize: MediaButtonSizeType.SMALL,
  },
  leftArrowIcon: {
    width: SIZES.size_150,
    height: SIZES.size_150,
    disabled: {
      width: SIZES.size_150,
      height: SIZES.size_150,
      color: COLORS.ACCENT.color_accent_default_bg_100,
    },
  },
  rightArrowIcon: {
    width: SIZES.size_150,
    height: SIZES.size_150,
    disabled: {
      width: SIZES.size_150,
      height: SIZES.size_150,
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
