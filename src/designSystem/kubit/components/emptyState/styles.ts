// constants
import { EmptyStateStylesType } from '@/components/emptyState/types';

import { COLORS, FONT_WEIGHT, SPACINGS, TEXT_ALIGN } from '../../foundations';
// types
import { TextVariantType } from '../text';
import { ButtonSizeType } from '../variants';
import { EmptyStateStateType, EmptyStateVariantType } from './variants';

const commonProps = {
  titleContainer: {
    margin_top: SPACINGS.spacing_400,
    margin_bottom: SPACINGS.spacing_150,
    text_align: TEXT_ALIGN.center,
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
  icon: {
    width: '4rem',
    height: '4rem',
  },
  illustration: {
    width: '4rem',
    height: '4rem',
  },
  buttonLinkContainer: {
    gap: SPACINGS.spacing_400,
  },
  buttonContainer: {
    margin_top: SPACINGS.spacing_400,
  },
  buttonSize: ButtonSizeType.LARGE,
};
export const EMPTY_STATE_STYLES: EmptyStateStylesType<EmptyStateVariantType, EmptyStateStateType> =
  {
    [EmptyStateVariantType.DEFAULT]: {
      [EmptyStateStateType.DEFAULT]: {
        ...commonProps,
      },
    },
  };
