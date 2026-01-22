import type { ListOptionsVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';

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

  padding: cssVars.spacings_spacing_0,
};
