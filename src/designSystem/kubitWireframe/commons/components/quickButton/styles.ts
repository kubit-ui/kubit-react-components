import {
  QuickButtonState,
  QuickButtonStatePropsStyles,
  QuickButtonStylesType,
} from '@/components/quickButton/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS, TEXT_ALIGN } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { QuickButtonVariantType } from './variants';

const QUICK_BUTTON_TOKENS = (COLORS: {
  [key: string]: { [key: string]: string };
}): QuickButtonStatePropsStyles => ({
  container: {
    display: 'flex',
    flex_direction: 'column',
    align_items: 'center',
    gap: SPACINGS.spacing_100,
  },
  label: {
    font_family: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_50,
    text_align: TEXT_ALIGN.center,
  },
  icon: {
    width: SIZES.size_200,
    height: SIZES.size_200,
    color: COLORS.ACCENT.color_accent_default_icon_50,
  },
  button: {
    border_radius: RADIUS.radius_250,
    padding: SPACINGS.spacing_300,
    display: 'flex',
    align_items: 'center',
    justify_content: 'center',
    border: `${BORDERS.border_100} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    ...transformShadow(RADIUS.radius_250),
    ...shadowAfterStyles(RADIUS.radius_250, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
  },
});

export const getQuickButtonStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): QuickButtonStylesType<QuickButtonVariantType> => {
  return {
    [QuickButtonVariantType.PRIMARY]: {
      [QuickButtonState.DEFAULT]: {
        ...QUICK_BUTTON_TOKENS(COLORS),
      },
      [QuickButtonState.HOVER]: {
        ...QUICK_BUTTON_TOKENS(COLORS),
      },
      [QuickButtonState.PRESSED]: {
        ...QUICK_BUTTON_TOKENS(COLORS),
      },
      [QuickButtonState.DISABLED]: {
        ...QUICK_BUTTON_TOKENS(COLORS),
      },
    },
  };
};
