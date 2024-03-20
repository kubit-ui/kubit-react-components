import {
  ValidationStatusState,
  ValidationStatusStylesType,
} from '@/components/validationStatus/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { ValidationStatusVariants } from './variants';

export const getValidationStatusStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): ValidationStatusStylesType<ValidationStatusVariants> => {
  return {
    [ValidationStatusVariants.DEFAULT]: {
      container: {
        display: 'flex',
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        flex_direction: 'column',
        width: SPACINGS.spacing_100_percent,
        height: 'auto',
        padding: SPACINGS.spacing_300,
        overflow_y: 'unset',
        border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        gap: SPACINGS.spacing_300,
        ...transformShadow(RADIUS.radius_00),
        ...shadowAfterStyles(RADIUS.radius_00, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
      },
      row: {
        display: 'flex',
        width: SPACINGS.spacing_100_percent,
        align_items: 'center',
        gap: SPACINGS.spacing_100,
      },
      [ValidationStatusState.DEFAULT]: {
        icon: {
          color: COLORS.NEUTRAL.color_neutral_icon_50,
          height: SIZES.size_250,
          width: SIZES.size_250,
        },
        explainText: {},
      },
      [ValidationStatusState.SUCCESS]: {
        icon: {
          color: COLORS.NEUTRAL.color_neutral_icon_50,
          height: SIZES.size_250,
          width: SIZES.size_250,
        },
        explainText: {},
      },
      [ValidationStatusState.ERROR]: {
        icon: {
          color: COLORS.NEUTRAL.color_neutral_icon_50,
          height: SIZES.size_250,
          width: SIZES.size_250,
        },
        explainText: {},
      },
    },
  };
};
