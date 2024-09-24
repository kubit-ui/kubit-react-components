import { ProgressBarStylesType } from '@/components/progressBar';

import { COLORS, RADIUS, SPACINGS } from '../../foundations';
import { SliderVariantType } from '../variants';
import { ProgressBarSizeType, ProgressBarVariantType } from './variants';

const containerProps = {
  width: 'inherit',
  display: 'flex',
  gap: SPACINGS.spacing_100,
};

const barContainerProps = {
  position: 'relative',
  width: '100%',
};

const progressBarProps = {
  position: 'absolute',
  top: '50%',
  left: '0',
  width: '0',
  border_radius: RADIUS.radius_100,
  background: COLORS.BRAND.color_brand_bg_50,
};

const barProps = {
  position: 'absolute',
  top: '50%',
  left: '0',
  width: 'inherit',
  border_radius: RADIUS.radius_100,
  background: COLORS.NEUTRAL.color_neutral_bg_100,
};

const commonProps = {
  container: {
    ...containerProps,
  },
  barContainer: {
    ...barContainerProps,
  },
  bar: {
    ...barProps,
  },
  progressBar: {
    ...progressBarProps,
  },
};

export const PROGRESS_BAR_STYLES: ProgressBarStylesType<
  ProgressBarVariantType,
  ProgressBarSizeType
> = {
  [ProgressBarVariantType.DEFAULT]: {
    ...commonProps,
  },
  [ProgressBarVariantType.INTERACTIVE]: {
    ...commonProps,
    useAsSlider: true,
    sliderVariant: SliderVariantType.PRIMARY,
    barContainer: {
      ...barContainerProps,
      cursor: 'pointer',
    },
  },
  [ProgressBarSizeType.SMALL]: {
    progressBar: {
      height: SPACINGS.spacing_100,
    },
    bar: {
      height: SPACINGS.spacing_100,
    },
  },
  [ProgressBarSizeType.MEDIUM]: {
    progressBar: {
      height: SPACINGS.spacing_150,
    },
    bar: {
      height: SPACINGS.spacing_150,
    },
  },
};
