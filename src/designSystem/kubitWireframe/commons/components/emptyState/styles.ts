// constants
import { EmptyStateStylesType } from '@/components/emptyState/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';

import { BORDERS, FONT_WEIGHT, RADIUS, SPACINGS, TEXT_ALIGN } from '../../foundations';
// types
import { TextVariantType } from '../text';
import { ButtonSizeType } from '../variants';
import { EmptyStateStateType, EmptyStateVariantType } from './variants';

const commonProps = COLORS => {
  return {
    buttonSize: ButtonSizeType.MEDIUM,
    container: {
      padding: SPACINGS.spacing_400,
      border_width: BORDERS.border_50,
      border_style: 'solid',
      border_color: COLORS.SECONDARY.color_secondary_border_50,
      ...transformShadow(RADIUS.radius_300),
      ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    },
    titleContainer: {
      margin_bottom: SPACINGS.spacing_150,
      text_align: TEXT_ALIGN.center,
    },
    titleAndSubTitleContainer: {
      padding: `${SPACINGS.spacing_400} 0`,
    },
    buttonLinkContainer: {
      margin_top: SPACINGS.spacing_400,
      border_top_width: BORDERS.border_100,
      border_top_style: 'solid',
      border_top_color: COLORS.SECONDARY.color_secondary_border_50,
      padding: `${SPACINGS.spacing_400}`,
      gap: SPACINGS.spacing_400,
    },
    title: {
      font_variant: TextVariantType.HEADING_H4_EXPANDED,
      color: COLORS.NEUTRAL.color_neutral_font_50,
      font_weight: FONT_WEIGHT.font_weight_500,
    },
    subtitle: {
      color: COLORS.NEUTRAL.color_neutral_font_150,
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      text_align: TEXT_ALIGN.center,
    },
    illustration: {
      width: '4rem',
      height: '4rem',
    },
  };
};

export const getEmptyStateStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): EmptyStateStylesType<EmptyStateVariantType, EmptyStateStateType> => {
  return {
    [EmptyStateVariantType.DEFAULT]: {
      [EmptyStateStateType.DEFAULT]: {
        ...commonProps(COLORS),
      },
    },
  };
};
