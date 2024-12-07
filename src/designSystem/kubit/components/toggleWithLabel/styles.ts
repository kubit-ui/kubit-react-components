import { ToggleWithLabelStylesType } from '@/components/toggleWithLabel/types/toggleWithLabelTheme';

import { COLORS } from '../../foundations/colors';
import { SPACINGS } from '../../foundations/spacings';
import { FONT_WEIGHT } from '../../foundations/typography';
import { TextVariantType } from '../text/variants';
import { ToggleWithLabelVariantType } from './variants';

export const TOGGLE_WITH_LABEL_STYLES: ToggleWithLabelStylesType<ToggleWithLabelVariantType> = {
  [ToggleWithLabelVariantType.DEFAULT]: {
    container: {
      display: 'flex',
      width: 'fit-content',
      margin_top: SPACINGS.spacing_200,
      margin_bottom: SPACINGS.spacing_200,
      align_items: 'center',
      gap: SPACINGS.spacing_200,
      text_align: 'center',
    },
    legendContainer: {
      margin_bottom: SPACINGS.spacing_200,
      cursor: 'pointer',
    },
    rowLegendContainer: {
      display: 'contents',
      margin_bottom: SPACINGS.spacing_0,
    },
    legend: {
      font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      font_weight: FONT_WEIGHT.font_weight_400,
    },
  },
};
