import { SnackbarMessageType, SnackbarStylesType } from '@/components/snackbar/types';
import { TextDecorationType } from '@/components/text/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { POSITIONS } from '@/types';

import { BORDERS, FONT_WEIGHT, RADIUS, SHADOW, SIZES, SPACINGS } from '../../foundations';
import { PopoverVariantType, TextVariantType } from '../variants';
import { SnackbarVariant } from './variants';

const commonProps = COLORS => {
  return {
    container: {
      padding: SPACINGS.spacing_300,
      border_radius: RADIUS.radius_50,
      display: 'flex',
      gap: SPACINGS.spacing_100,
      align_items: 'flex-start',
      box_shadow: SHADOW.shadow_10,
      border_width: BORDERS.border_50,
      border_style: 'solid',
      border_color: COLORS.SECONDARY.color_secondary_border_50,
      ...transformShadow(RADIUS.radius_150),
      ...shadowAfterStyles(RADIUS.radius_150, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    },
    iconTitleContainer: {
      display: 'flex',
      flex_direction: 'row',
      gap: SPACINGS.spacing_100,
    },
    icon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.NEUTRAL.color_neutral_icon_50,
    },
    title: {
      font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_600,
      color: COLORS.NEUTRAL.color_neutral_font_50,
    },
    description: {
      font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.NEUTRAL.color_neutral_font_50,
    },
    closeIcon: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      width: SIZES.size_250,
      height: SIZES.size_250,
    },
    link: {
      variant: 'SECONDARY',
      decoration: TextDecorationType.UNDERLINE,
    },
  };
};

export const getSnackbarStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): SnackbarStylesType<SnackbarVariant, SnackbarMessageType> => {
  return {
    [SnackbarVariant.DEFAULT]: {
      [SnackbarMessageType.ERROR]: {
        ...commonProps(COLORS),
        container: {
          ...commonProps(COLORS).container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        popoverVariants: {
          [POSITIONS.TOP_CENTER_FIXED]: PopoverVariantType.SNACKBAR_TOP_FIXED,
          [POSITIONS.BOTTOM_CENTER_FIXED]: PopoverVariantType.SNACKBAR_BOTTOM,
        },
      },
      [SnackbarMessageType.INFORMATIVE]: {
        ...commonProps(COLORS),
        container: {
          ...commonProps(COLORS).container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        popoverVariants: {
          [POSITIONS.TOP_CENTER_FIXED]: PopoverVariantType.SNACKBAR_TOP_FIXED,
          [POSITIONS.BOTTOM_CENTER_FIXED]: PopoverVariantType.SNACKBAR_BOTTOM,
        },
      },
      [SnackbarMessageType.SUCCESS]: {
        ...commonProps(COLORS),
        container: {
          ...commonProps(COLORS).container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        popoverVariants: {
          [POSITIONS.TOP_CENTER_FIXED]: PopoverVariantType.SNACKBAR_TOP_FIXED,
          [POSITIONS.BOTTOM_CENTER_FIXED]: PopoverVariantType.SNACKBAR_BOTTOM,
        },
      },
      [SnackbarMessageType.WARNING]: {
        ...commonProps(COLORS),
        container: {
          ...commonProps(COLORS).container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        popoverVariants: {
          [POSITIONS.TOP_CENTER_FIXED]: PopoverVariantType.SNACKBAR_TOP_FIXED,
          [POSITIONS.BOTTOM_CENTER_FIXED]: PopoverVariantType.SNACKBAR_BOTTOM,
        },
      },
    },
  };
};
