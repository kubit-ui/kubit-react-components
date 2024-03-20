import { OptionStateType, OptionStylesType } from '@/components/option/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';

import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { OptionVariantType } from './variants';

export const getOptionStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): OptionStylesType<OptionVariantType> => {
  const commonContainer = {
    display: 'flex',
    cursor: 'pointer',
    width: '100%',
    text_decoration: 'none',
  };

  const commonContainerSideMenuLevel1 = {
    ...commonContainer,
    padding_top: SPACINGS.spacing_150,
    padding_bottom: SPACINGS.spacing_150,
    padding_left: SPACINGS.spacing_300,
    padding_right: SPACINGS.spacing_300,
  };

  const commonLabelIconContainerSideMenuLevel1 = {
    display: 'flex',
    align_items: 'initial',
    gap: SPACINGS.spacing_150,
  };

  const commonLabelSideMenuLevel1 = {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  };

  const commonIconSideMenuLevel1 = {
    width: SIZES.size_250,
    height: SIZES.size_250,
  };

  const commonInputContainerTokens = {
    container: {
      ...commonContainerSideMenuLevel1,
      border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
      border_radius: RADIUS.radius_300,
      padding: SPACINGS.spacing_400,
      margin: `0 ${SPACINGS.spacing_300}`,
      width: 'auto',
      box_shadow: `${SPACINGS.spacing_100} ${SPACINGS.spacing_100} ${SPACINGS.spacing_0} ${COLORS.BRAND.color_brand_bg_50}`,
    },
  };

  const commonInputHighlightContainerTokens = {
    container: {
      ...commonContainerSideMenuLevel1,
      border_radius: RADIUS.radius_300,
      padding: SPACINGS.spacing_400,
    },
  };

  return {
    [OptionVariantType.DEFAULT]: {
      [OptionStateType.DEFAULT]: {
        container: {
          ...commonContainerSideMenuLevel1,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
          border_radius: RADIUS.radius_300,
          padding: SPACINGS.spacing_400,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, '2px'),
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.HOVER]: {
        container: {
          ...commonContainerSideMenuLevel1,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_200}`,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.SELECTED]: {
        container: {
          ...commonContainerSideMenuLevel1,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
          border_radius: RADIUS.radius_300,
          padding: SPACINGS.spacing_400,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, '2px'),
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.SELECTED_HOVER]: {
        container: {
          ...commonContainerSideMenuLevel1,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
          border_radius: RADIUS.radius_300,
          padding: SPACINGS.spacing_400,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, '2px'),
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.MULTIPLE_SELECTED]: {
        container: {
          ...commonContainerSideMenuLevel1,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
          border_radius: RADIUS.radius_300,
          padding: SPACINGS.spacing_400,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, '2px'),
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
        container: {
          ...commonContainerSideMenuLevel1,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
          border_radius: RADIUS.radius_300,
          padding: SPACINGS.spacing_400,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, '2px'),
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.DISABLED]: {
        container: {
          ...commonContainerSideMenuLevel1,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
          border_radius: RADIUS.radius_300,
          padding: SPACINGS.spacing_400,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, '2px'),
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_100,
        },
      },
      [OptionStateType.FILLING]: {
        container: {
          ...commonContainerSideMenuLevel1,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
    },
    [OptionVariantType.INPUT]: {
      [OptionStateType.DEFAULT]: {
        ...commonInputContainerTokens,
        container: {
          ...commonInputContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.HOVER]: {
        ...commonInputContainerTokens,
        container: {
          ...commonInputContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.SELECTED]: {
        ...commonInputContainerTokens,
        container: {
          ...commonInputContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.SELECTED_HOVER]: {
        ...commonInputContainerTokens,
        container: {
          ...commonInputContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.MULTIPLE_SELECTED]: {
        ...commonInputContainerTokens,
        container: {
          ...commonInputContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
        ...commonInputContainerTokens,
        container: {
          ...commonInputContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.DISABLED]: {
        ...commonInputContainerTokens,
        container: {
          ...commonInputContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_100,
        },
      },
      [OptionStateType.FILLING]: {
        ...commonInputContainerTokens,
        container: {
          ...commonInputContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
    },
    [OptionVariantType.INPUT_HIGHTLIGHTED]: {
      [OptionStateType.DEFAULT]: {
        ...commonInputHighlightContainerTokens,
        container: {
          ...commonInputHighlightContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.HOVER]: {
        ...commonInputHighlightContainerTokens,
        container: {
          ...commonInputHighlightContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.SELECTED]: {
        ...commonInputHighlightContainerTokens,
        container: {
          ...commonInputHighlightContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.SELECTED_HOVER]: {
        ...commonInputHighlightContainerTokens,
        container: {
          ...commonInputHighlightContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.MULTIPLE_SELECTED]: {
        ...commonInputHighlightContainerTokens,
        container: {
          ...commonInputHighlightContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
        ...commonInputHighlightContainerTokens,
        container: {
          ...commonInputHighlightContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_600,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [OptionStateType.DISABLED]: {
        ...commonInputHighlightContainerTokens,
        container: {
          ...commonInputHighlightContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_100,
        },
      },
      [OptionStateType.FILLING]: {
        ...commonInputHighlightContainerTokens,
        container: {
          ...commonInputHighlightContainerTokens.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
        labelIconContainer: {
          ...commonLabelIconContainerSideMenuLevel1,
        },
        label: {
          ...commonLabelSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_weight: FONT_WEIGHT.font_weight_400,
        },
        icon: {
          ...commonIconSideMenuLevel1,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
    },
  };
};
