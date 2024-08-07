import {
  PillSelectorPropsStylesType,
  PillSelectorStylesType,
} from '@/components/pillSelectorV2/types';

import { SPACINGS } from '../../foundations';
import { PillSizeTypeV2, PillVariantTypeV2 } from '../variants';
import { PillSelectorSizeTypeV2, PillSelectorVariantTypeV2 } from './variants';

type ColorType = {
  [key: string]: { [key: string]: string };
};

const buildCommonProps = (COLORS: ColorType): PillSelectorPropsStylesType => ({
  rootContainer: {
    display: 'flex',
    flex_direction: 'row',
    max_width: 'fit-content',
    gap: SPACINGS.spacing_100,
  },
  pill: {
    variant: PillVariantTypeV2.DEFAULT,
  },
});

export const getPillSelectorStylesV2 = (COLORS: ColorType): PillSelectorStylesType => {
  const commonProps = buildCommonProps(COLORS);
  return {
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
};
