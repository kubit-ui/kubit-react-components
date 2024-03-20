// types
import {
  ButtonStateType,
  ButtonStylesType,
  ButtonVariantStylesType,
} from '@/components/button/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
// constants
import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { ButtonSizeType, ButtonVariantType } from './variants';

const commonPropsDefault = {
  icon_size: SIZES.size_200,
  label_font_weight: FONT_WEIGHT.font_weight_600,
  radius_size: BORDERS.border_00,
};

const BUTTON_COMMON_TOKENS = (COLORS: {
  [key: string]: { [key: string]: string };
}): ButtonVariantStylesType => ({
  ...commonPropsDefault,
  altVariant: true,
  background_color: COLORS.NEUTRAL.color_neutral_bg_250,
  color: COLORS.ACCENT.color_accent_default_font_50,
  icon: {
    color: COLORS.ACCENT.color_accent_default_font_50,
  },
  border_width: BORDERS.border_50,
  border_style: 'solid',
  border_color: COLORS.SECONDARY.color_secondary_border_50,
  ...transformShadow(RADIUS.radius_300),
  ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
});

export const getButtonStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): ButtonStylesType<ButtonVariantType, ButtonSizeType> => {
  return {
    [ButtonSizeType.LARGE]: {
      padding: `${SPACINGS.spacing_400} ${SPACINGS.spacing_300}`,
      icon: {
        height: SIZES.size_300,
        width: SIZES.size_300,
      },
    },
    [ButtonSizeType.MEDIUM]: {
      padding: `${SPACINGS.spacing_200} ${SPACINGS.spacing_300}`,
      icon: {
        height: SIZES.size_300,
        width: SIZES.size_300,
      },
    },
    [ButtonVariantType.PRIMARY]: {
      [ButtonStateType.DEFAULT]: {
        ...BUTTON_COMMON_TOKENS(COLORS),
      },
      [ButtonStateType.PRESSED]: {
        ...BUTTON_COMMON_TOKENS(COLORS),
      },
      [ButtonStateType.HOVER]: {
        ...BUTTON_COMMON_TOKENS(COLORS),
      },
    },
  };
};
