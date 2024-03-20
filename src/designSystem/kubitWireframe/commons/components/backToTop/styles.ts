import {
  BackToTopStateType,
  BackToTopStylesType,
  BackToTopVariantStyles,
} from '@/components/backToTop/types';
import { DeviceBreakpointsType } from '@/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, RADIUS, SIZES, SPACINGS, Z_INDEX } from '../../foundations';
import { BackToTopVariantsType } from './variants';

const BACK_TO_TOP_TOKENS = (COLORS: {
  [key: string]: { [key: string]: string };
}): BackToTopStylesType => ({
  container: {
    ...transformShadow(RADIUS.radius_250),
    ...shadowAfterStyles(RADIUS.radius_250, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border_radius: RADIUS.radius_250,
    padding: SPACINGS.spacing_300,
    right: SPACINGS.spacing_450,
    z_index: Z_INDEX.FLOATING,
    border: `${BORDERS.border_100} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
    position: 'fixed',
    [DeviceBreakpointsType.MOBILE]: {
      right: SPACINGS.spacing_300,
    },
  },
  icon: {
    width: SIZES.size_200,
    height: SIZES.size_200,
    color: COLORS.ACCENT.color_accent_default_icon_50,
  },
});

export const getBackTopStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): BackToTopVariantStyles<BackToTopVariantsType> => {
  return {
    [BackToTopVariantsType.DEFAULT]: {
      [BackToTopStateType.DEFAULT]: {
        ...BACK_TO_TOP_TOKENS(COLORS),
      },
      [BackToTopStateType.HOVER]: {
        ...BACK_TO_TOP_TOKENS(COLORS),
      },
      [BackToTopStateType.PRESSED]: {
        ...BACK_TO_TOP_TOKENS(COLORS),
      },
    },
  };
};
