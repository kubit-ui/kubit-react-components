import type { CardVariantStyles } from '@/components/card/types/cardTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { CardStateType, CardVariants } from './variants';

type CardVariantTypes = keyof typeof CardVariants;

export const CARD: CardVariantStyles<CardVariantTypes> = {
  _content: {
    padding: cssVars.spacings_spacing_400,
  },
  _footer: {
    padding: cssVars.spacings_spacing_400,
    padding_top: cssVars.spacings_spacing_0,
  },
  _header: {
    padding: cssVars.spacings_spacing_400,
    padding_bottom: cssVars.spacings_spacing_0,
  },
  border_radius: cssVars.radius_00,
  border_style: 'solid',
  border_width: cssVars.borders_border_50,
  [CardVariants.DEFAULT]: {
    $attributes: {
      'data-state': {
        [CardStateType.SELECTED]: {
          border_color: cssVars.colors_brand_color_border_100,
          box_shadow: cssVars.shadow_10,
        },
      },
    },
    $pseudoClasses: {
      hover: {
        box_shadow: cssVars.shadow_10,
        transform: 'translateY(-2px)',
      },
    },
    _content: {
      ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXTENDED],
    },
    _footer: {
      ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
      color: cssVars.colors_neutral_color_icon_50,
    },
    _header: {
      ...TEXT[TextVariantType.HEADING_H4_EXTENDED],
      font_weight: cssVars.font_weight_600,
    },
    background_color: cssVars.colors_neutral_color_bg_250,
    border_color: cssVars.colors_neutral_color_border_50,
  },
  cursor: 'default',
  display: 'flex',
  flex_direction: 'column',
  overflow: 'hidden',
  transition: 'all 0.2s ease-in-out',
};
