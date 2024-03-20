import { PillSelectorThemeType } from '@/components/pillSelector/types';

import { BORDERS } from '../../foundations';
import { PillSelectorVariant } from './variants';

export const PILL_SELECTOR_STYLES: PillSelectorThemeType<PillSelectorVariant> = {
  [PillSelectorVariant.DEFAULT]: {
    container: {
      display: 'flex',
      flex_direction: 'row',
      max_width: 'fit-content',
    },
    pill: {
      border_left: BORDERS.border_00,
      border_right: BORDERS.border_00,
    },
    firstPill: {
      border_right: BORDERS.border_00,
    },
    lastPill: {
      border_left: BORDERS.border_00,
    },
  },
};
