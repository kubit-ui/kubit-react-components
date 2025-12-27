import type { ListOptionsVariantStyles } from '@/components/listOptions/types/listOptionsTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { ListOptionsVariantType } from './variants';

type ListOptionsVariant = keyof typeof ListOptionsVariantType;

export const LIST_OPTIONS: ListOptionsVariantStyles<ListOptionsVariant> = {
  _optionsContainer: {
    display: 'flex',
    flex_direction: 'column',
  },
  _title: {
    padding: cssVars.spacings_spacing_0,
  },
  _titleContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  [ListOptionsVariantType.CODE_VIEWER_SUBTHEME]: {},
  [ListOptionsVariantType.DEFAULT]: {
    _title: {
      ...TEXT[TextVariantType.HEADING_H4_EXTENDED],
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_600,
    },
    _titleContainer: {
      padding: `${cssVars.spacings_spacing_0} ${cssVars.spacings_spacing_150} ${cssVars.spacings_spacing_0} ${cssVars.spacings_spacing_150}`,
    },
  },
  [ListOptionsVariantType.DROPDOWN_SELECTED_SECTION]: {
    $mediaQueries: {
      mobile: {
        gap: cssVars.spacings_spacing_150,
      },
      tablet: {
        gap: cssVars.spacings_spacing_150,
      },
    },
    _optionsContainer: {
      gap: cssVars.spacings_spacing_150,
      padding: `${cssVars.spacings_spacing_100} ${cssVars.spacings_spacing_0}`,
    },
  },
  [ListOptionsVariantType.INPUT_DROPDOWN_DEFAULT]: {},
  [ListOptionsVariantType.INPUT_DROPDOWN_SECTION]: {},
  [ListOptionsVariantType.INPUT_SEARCH]: {},
  [ListOptionsVariantType.SIDE_MENU_SECTION]: {
    _optionsContainer: {
      gap: cssVars.spacings_spacing_100,
    },
    _title: {
      ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
    },
    _titleContainer: {
      border_bottom: `${cssVars.borders_border_50} solid ${cssVars.colors_neutral_color_border_200}`,
      margin: `${cssVars.spacings_spacing_0} ${cssVars.spacings_spacing_300} ${cssVars.spacings_spacing_100} ${cssVars.spacings_spacing_0}`,
      padding: `${cssVars.spacings_spacing_150} ${cssVars.spacings_spacing_300} ${cssVars.spacings_spacing_150} calc(${cssVars.spacings_spacing_300} + ${cssVars.borders_border_200})`,
    },
  },
  padding: cssVars.spacings_spacing_0,
};
