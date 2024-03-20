import { PillSelectorThemeType } from '@/components/pillSelector/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, RADIUS, SPACINGS } from '../../foundations';
import { PillSelectorVariant } from './variants';

export const getPillSelectorStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): PillSelectorThemeType<PillSelectorVariant> => {
  return {
    [PillSelectorVariant.DEFAULT]: {
      container: {
        display: 'flex',
        flex_direction: 'row',
        max_width: 'fit-content',
        border_style: 'solid',
        border_color: COLORS.NEUTRAL.color_neutral_border_100,
        border_width: BORDERS.border_50,
        ...transformShadow(RADIUS.radius_300),
        ...shadowAfterStyles(
          RADIUS.radius_300,
          COLORS.BRAND.color_brand_bg_50,
          SPACINGS.spacing_50
        ),
      },
      pill: {
        border_left: BORDERS.border_00,
        border_right: BORDERS.border_00,
      },
      firstPill: {
        border_right: BORDERS.border_00,
        border_top_left_radius: RADIUS.radius_300,
        border_bottom_left_radius: RADIUS.radius_300,
      },
      lastPill: {
        border_left: BORDERS.border_00,
        border_top_right_radius: RADIUS.radius_300,
        border_bottom_right_radius: RADIUS.radius_300,
      },
    },
  };
};
