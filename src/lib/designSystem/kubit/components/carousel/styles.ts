import type { CarouselVariantStyles } from '@/components/carousel/types/carouselTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { CarouselVariantType } from './variants';

type CarouselVariants = keyof typeof CarouselVariantType;

export const CAROUSEL: CarouselVariantStyles<CarouselVariants> = {
  _content: {
    $advancedSelectors: [
      {
        child: {
          $target: '*',
          flex_shrink: '0',
        },
      },
    ],
    $attributes: {
      'data-center-mode': {
        $advancedSelectors: [
          {
            child: {
              $target: '*',
              transform: 'scale(0.85)',
              transition: 'transform 0.5s ease-out',
            },
          },
          {
            child: {
              $target: '*[data-highlighted]',
              transform: 'scale(1)',
            },
          },
        ],
      },
      'data-shifting': {
        transition: 'left 0.5s ease-out',
      },
    },
    align_items: 'stretch',
    display: 'flex',
    flex_direction: 'row',
    gap: cssVars.spacings_spacing_300,
    left: '0',
    position: 'relative',
  },
  _viewer: {
    $attributes: {
      'data-allow-modify-slice-width': {
        false: {
          width: '0px',
        },
        true: {
          width: '100%',
        },
      },
      'data-disabled': {
        true: {
          cursor: 'default',
        },
      },
    },
    cursor: 'grab',
    overflow: 'hidden',
    position: 'relative',
    padding: '0.5rem',
  },
  [CarouselVariantType.DEFAULT]: {},
  display: 'flex',
};
