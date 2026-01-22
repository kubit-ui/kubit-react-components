import type { ProgressBarStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';

import { ProgressBarSizeType, ProgressBarVariantType } from './variants';

type ProgressBarVariant = keyof typeof ProgressBarVariantType;
type ProgressBarSize = keyof typeof ProgressBarSizeType;

export const PROGRESS_BAR: ProgressBarStyles<
  ProgressBarVariant,
  ProgressBarSize
> = {
  _bar: {
    background_color: cssVars.colors_neutral_color_bg_100,
    border_radius: cssVars.radius_100,
    left: cssVars.spacings_spacing_0,
    position: 'absolute',
    top: cssVars.spacings_spacing_50_percent,
    width: 'inherit',
  },
  _barContainer: {
    position: 'relative',
    width: cssVars.spacings_spacing_100_percent,
  },
  _progressBar: {
    background_color: cssVars.colors_brand_color_bg_50,
    border_radius: cssVars.radius_100,
    left: cssVars.spacings_spacing_0,
    position: 'absolute',
    top: cssVars.spacings_spacing_50_percent,
    width: cssVars.spacings_spacing_0,
  },
  display: 'flex',
  gap: cssVars.spacings_spacing_100,
  [ProgressBarSizeType.MEDIUM]: {
    _bar: {
      height: cssVars.spacings_spacing_150,
    },
    _progressBar: {
      height: cssVars.spacings_spacing_150,
    },
  },
  [ProgressBarSizeType.SMALL]: {
    _bar: {
      height: cssVars.spacings_spacing_100,
    },
    _progressBar: {
      height: cssVars.spacings_spacing_100,
    },
  },
  [ProgressBarVariantType.DEFAULT]: {},
  width: 'inherit',
};
