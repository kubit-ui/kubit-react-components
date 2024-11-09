import { TextCountStylesType } from '@/components/textCount/types/textCountTheme';

import { COLORS } from '../../foundations/colors';
import { FONT_WEIGHT } from '../../foundations/typography';
import { TextCountVariantType } from './variants';

export const TEXT_COUNT_STYLES: TextCountStylesType<TextCountVariantType> = {
  [TextCountVariantType.DEFAULT]: {
    wrapper: {
      width: 'fit-content',
      height: 'auto',
    },
    letfText: {
      font_weight: FONT_WEIGHT.font_weight_500,
      color: COLORS.NEUTRAL.color_neutral_font_150,
    },
    rightText: {
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.NEUTRAL.color_neutral_font_150,
    },
  },
};
