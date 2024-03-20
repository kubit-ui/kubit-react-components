import { DividerEmbebed, DividerStylesType } from '@/components/divider/types';

import { FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { TooltipVariantType } from '../variants';
import { DividerVariantType } from './variants';

export const getDividerStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): DividerStylesType<DividerVariantType> => {
  return {
    [DividerVariantType.DEFAULT]: {
      container: {
        display: 'flex',
        flex_direction: 'column',
        width: SPACINGS.spacing_100_percent,
        height: SPACINGS.spacing_100_percent,
        border_radius: RADIUS.radius_50,
        padding: `${SPACINGS.spacing_200} ${SPACINGS.spacing_300}`,
        gap: SPACINGS.spacing_100,
        background_color: COLORS.NEUTRAL.color_neutral_bg_50,
      },
      row: {
        display: 'flex',
        justify_content: 'space-between',
        align_items: 'center',
      },
      labelIconContainer: {
        display: 'flex',
        align_items: 'center',
        gap: SPACINGS.spacing_100,
      },
      label: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
      icon: {
        color: COLORS.NEUTRAL.color_neutral_icon_250,
        height: SIZES.size_200,
        width: SIZES.size_200,
      },
      tooltipVariant: TooltipVariantType.DEFAULT,
      embebed: {
        [DividerEmbebed.TOP]: {
          border_radius: `${RADIUS.radius_50} ${RADIUS.radius_50} 0 0`,
        },
        [DividerEmbebed.BOTTOM]: {
          border_radius: `0 0 ${RADIUS.radius_50} ${RADIUS.radius_50}`,
        },
        [DividerEmbebed.WITHOUT]: { border_radius: RADIUS.radius_00 },
      },
    },
  };
};
