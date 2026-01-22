import type { PageControlStyles } from '@/components/pageControl/types/pageControlTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { ArrowsControlVariant, PageControlVariant } from './variants';

type PageControlVariants = keyof typeof PageControlVariant;
type ArrowsControlVariants = keyof typeof ArrowsControlVariant;

export const PAGE_CONTROL: PageControlStyles<
  PageControlVariants,
  ArrowsControlVariants
> = {
  _dotsContainer: {
    align_items: 'center',
    display: 'flex',
    gap: cssVars.spacings_spacing_150,
    justify_content: 'center',
  },
  _icon: {
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  _leftArrowControlContainer: {
    line_height: cssVars.spacings_spacing_0,
    margin_right: cssVars.spacings_spacing_150,
  },
  _leftButtonControl: {
    line_height: cssVars.spacings_spacing_0,
  },
  _pageDot: {
    padding: cssVars.spacings_spacing_0,
  },
  _rightArrowControlContainer: {
    line_height: cssVars.spacings_spacing_0,
    margin_left: cssVars.spacings_spacing_150,
  },
  _rightButtonControl: {
    line_height: cssVars.spacings_spacing_0,
  },
  align_items: 'center',
  [ArrowsControlVariant.DEFAULT]: {
    _icon: {
      $attributes: {
        'data-state': {
          ['active']: {
            color: cssVars.colors_accent_color_default_icon_100,
          },
        },
      },
      color: cssVars.colors_neutral_color_icon_100,
    },
  },
  display: 'flex',
  justify_content: 'center',
  [PageControlVariant.BULLETS]: {
    _dotsContainer: {
      flex: 'none',
    },
    _pageDot: {
      $attributes: {
        'data-state': {
          ['current']: {
            background_color: cssVars.colors_accent_color_default_icon_100,
          },
          ['default']: {
            background_color: cssVars.colors_neutral_color_icon_150,
          },
          ['last']: {
            background_color: cssVars.colors_neutral_color_icon_150,
          },
        },
      },
      background_color: cssVars.colors_secondary_color_icon_100,
      border_radius: cssVars.radius_50,
      flex: 'none',
      height: cssVars.spacings_spacing_150,
      position: 'relative',
      width: cssVars.spacings_spacing_300,
    },
  },
  width: 'auto',
};
