import { TextCountStylesType } from '@/components/textCount/types/textCountTheme';
import { RADIUS } from '@/designSystem/kubitWireframe/commons/foundations/borders';
import { FONT_WEIGHT } from '@/designSystem/kubitWireframe/commons/foundations/typography';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';

import { TextCountVariantType } from './variants';

export const getTextCountStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TextCountStylesType<TextCountVariantType> => {
  return {
    [TextCountVariantType.DEFAULT]: {
      wrapper: {
        width: 'fit-content',
        height: 'auto',
        ...transformShadow(RADIUS.radius_100),
        ...shadowAfterStyles(
          RADIUS.radius_100,
          COLORS.ACCENT.color_accent_default_bg_100,
          '2px',
          '15%'
        ),
      },
      letfText: {
        font_weight: FONT_WEIGHT.font_weight_500,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      rightText: {
        font_weight: FONT_WEIGHT.font_weight_300,
        color: COLORS.NEUTRAL.color_neutral_font_150,
      },
    },
  };
};
