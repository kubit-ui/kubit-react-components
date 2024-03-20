import {
  IconHighlightedSizeType,
  IconHighlightedStylesType,
} from '@/components/iconHighlighted/types';

import { RADIUS, SIZES } from '../../foundations';
import { IconHighlightedVariantType } from './variants';

export const ICON_HIGHLIGHTED_STYLES: IconHighlightedStylesType<IconHighlightedVariantType> = {
  [IconHighlightedVariantType.SQUARE]: {
    [IconHighlightedSizeType.EXTRA_SMALL]: {
      container: {
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
      icon: {
        width: SIZES.size_150,
        height: SIZES.size_150,
      },
    },
    [IconHighlightedSizeType.SMALL]: {
      container: {
        width: SIZES.size_300,
        height: SIZES.size_300,
      },
      icon: {
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
    },
    [IconHighlightedSizeType.MEDIUM]: {
      container: {
        width: SIZES.size_400,
        height: SIZES.size_400,
      },
      icon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
      },
    },
    [IconHighlightedSizeType.LARGE]: {
      container: {
        width: SIZES.size_450,
        height: SIZES.size_450,
      },
      icon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
      },
    },
    [IconHighlightedSizeType.EXTRA_LARGE]: {
      container: {
        width: SIZES.size_500,
        height: SIZES.size_500,
      },
      icon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
      },
    },
  },
  [IconHighlightedVariantType.ROUND]: {
    [IconHighlightedSizeType.EXTRA_SMALL]: {
      container: {
        width: SIZES.size_250,
        height: SIZES.size_250,
        border_radius: RADIUS.radius_100,
      },
      icon: {
        width: SIZES.size_150,
        height: SIZES.size_150,
      },
    },
    [IconHighlightedSizeType.SMALL]: {
      container: {
        width: SIZES.size_300,
        height: SIZES.size_300,
        border_radius: RADIUS.radius_100,
      },
      icon: {
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
    },
    [IconHighlightedSizeType.MEDIUM]: {
      container: {
        width: SIZES.size_400,
        height: SIZES.size_400,
        border_radius: RADIUS.radius_100,
      },
      icon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
      },
    },
    [IconHighlightedSizeType.LARGE]: {
      container: {
        width: SIZES.size_450,
        height: SIZES.size_450,
        border_radius: RADIUS.radius_100,
      },
      icon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
      },
    },
    [IconHighlightedSizeType.EXTRA_LARGE]: {
      container: {
        width: SIZES.size_500,
        height: SIZES.size_500,
        border_radius: RADIUS.radius_100,
      },
      icon: {
        width: SIZES.size_300,
        height: SIZES.size_300,
      },
    },
  },
};
