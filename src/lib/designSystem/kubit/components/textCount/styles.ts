import type { TextCountStylesType } from '@/components/textArea/components/textCount/types/textCountTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TextCountVariantType } from './variants';

type TextCountVariants = keyof typeof TextCountVariantType;

export const TEXT_COUNT: TextCountStylesType<TextCountVariants> = {
  _letfText: {
    padding: cssVars.spacings_spacing_0,
  },
  _rightText: {
    padding: cssVars.spacings_spacing_0,
  },
  height: 'auto',
  [TextCountVariantType.DEFAULT]: {
    _letfText: {
      color: cssVars.colors_neutral_color_font_150,
      font_weight: cssVars.font_weight_500,
    },
    _rightText: {
      color: cssVars.colors_neutral_color_font_150,
      font_weight: cssVars.font_weight_400,
    },
  },
  width: 'fit-content',
};
