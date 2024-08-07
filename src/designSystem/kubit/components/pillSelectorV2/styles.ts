import {
  PillSelectorPropsStylesType,
  PillSelectorStylesType,
} from '@/components/pillSelectorV2/types';

import { BORDERS, COLORS } from '../../foundations';
import { PillSizeTypeV2, PillVariantTypeV2 } from '../variants';
import { PillSelectorSizeTypeV2, PillSelectorVariantTypeV2 } from './variants';

const commonProps: PillSelectorPropsStylesType = {
  rootContainer: {
    display: 'flex',
    flex_direction: 'row',
    max_width: 'fit-content',
    border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_100}`,
  },
  pill: {
    variant: PillVariantTypeV2.PILL_SELECTOR,
  },
};

export const PILL_SELECTOR_STYLES_V2: PillSelectorStylesType = {
  [PillSelectorVariantTypeV2.DEFAULT]: {
    [PillSelectorSizeTypeV2.LARGE]: {
      ...commonProps,
      pill: {
        ...commonProps.pill,
        size: PillSizeTypeV2.LARGE,
      },
    },
    [PillSelectorSizeTypeV2.SMALL]: {
      ...commonProps,
      pill: {
        ...commonProps.pill,
        size: PillSizeTypeV2.SMALL,
      },
    },
  },
};
