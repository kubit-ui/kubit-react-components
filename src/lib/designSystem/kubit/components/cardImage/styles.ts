import type { CardImageVariantStyles } from '@/components/cardImage/types/cardImageTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { CardImageStateVariantType } from './variants';

type CardImageVariants = keyof typeof CardImageStateVariantType;

export const CARD_IMAGE: CardImageVariantStyles<CardImageVariants> = {
  _content: {
    display: 'flex',
    flex_direction: 'column',
    height: cssVars.spacings_spacing_100_percent,
    justify_content: 'space-between',
    padding: cssVars.spacings_spacing_150,
  },
  _description: {
    color: cssVars.colors_neutral_color_bg_100,
    font_weight: cssVars.font_weight_400,
    text_align: cssVars.text_align_left,
  },
  _descriptionContainer: {
    margin_bottom: cssVars.spacings_spacing_150,
  },
  _imageContainer: {
    background_position: `${cssVars.spacings_spacing_50_percent} ${cssVars.spacings_spacing_50_percent}`,
    background_size: 'auto',
    border_top_left_radius: cssVars.radius_50,
    border_top_right_radius: cssVars.radius_50,
    flex: '1',
    height: '12rem',
    max_height: '12rem',
    min_height: '12rem',
  },
  _linkContainer: {
    display: 'flex',
    justify_content: cssVars.text_align_left,
  },
  _textContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  _title: {
    ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXPANDED],
    color: cssVars.colors_neutral_color_bg_100,
    font_weight: cssVars.font_weight_600,
  },
  _titleContainer: {
    margin_bottom: cssVars.spacings_spacing_150,
  },
  [CardImageStateVariantType.ALTERNATIVE]: {
    background_color: cssVars.colors_neutral_color_bg_100,
    border_radius: cssVars.radius_50,
  },
  [CardImageStateVariantType.DEFAULT]: {
    _description: {
      ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXPANDED],
    },
    background_color: cssVars.colors_neutral_color_bg_100,
    border_radius: cssVars.radius_50,
    box_shadow: cssVars.shadow_10,
  },
  cursor: 'pointer',
  display: 'flex',
  flex_direction: 'column',
};
