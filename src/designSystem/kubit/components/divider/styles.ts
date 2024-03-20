import { DividerEmbebed, DividerStylesType } from '@/components/divider/types';

import { COLORS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { TooltipVariantType } from '../variants';
import { DividerVariantType } from './variants';

const commonEmbebedTokens = {
  [DividerEmbebed.TOP]: {
    border_radius: `${RADIUS.radius_50} ${RADIUS.radius_50} 0 0`,
  },
  [DividerEmbebed.BOTTOM]: {
    border_radius: `0 0 ${RADIUS.radius_50} ${RADIUS.radius_50}`,
  },
  [DividerEmbebed.WITHOUT]: { border_radius: RADIUS.radius_00 },
};

const commonContainerTokens = {
  display: 'flex',
  flex_direction: 'column',
  width: '100%',
  height: '100%',
  border_radius: RADIUS.radius_50,
  padding: `${SPACINGS.spacing_200} ${SPACINGS.spacing_300}`,
  gap: SPACINGS.spacing_100,
};
const row = {
  display: 'flex',
  justify_content: 'space-between',
  align_items: 'center',
};
const labelIconContainer = {
  display: 'flex',
  align_items: 'center',
  gap: SPACINGS.spacing_100,
};
const commonLabelTokens = {
  font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
  font_weight: FONT_WEIGHT.font_weight_600,
};
const icon = {
  color: COLORS.NEUTRAL.color_neutral_icon_250,
  height: SIZES.size_200,
  width: SIZES.size_200,
};

export const DIVIDER_STYLES: DividerStylesType<DividerVariantType> = {
  [DividerVariantType.DEFAULT]: {
    container: {
      ...commonContainerTokens,
      background_color: COLORS.NEUTRAL.color_neutral_bg_50,
    },
    row,
    labelIconContainer,
    label: {
      ...commonLabelTokens,
      color: COLORS.NEUTRAL.color_neutral_font_250,
    },
    sublabel: {
      ...commonLabelTokens,
      color: COLORS.NEUTRAL.color_neutral_font_250,
    },
    icon,
    tooltipVariant: TooltipVariantType.DEFAULT,
    embebed: commonEmbebedTokens,
  },
  [DividerVariantType.SECONDARY]: {
    container: {
      ...commonContainerTokens,
      background_color: COLORS.NEUTRAL.color_neutral_bg_200,
    },
    row,
    labelIconContainer,
    label: {
      ...commonLabelTokens,
      color: COLORS.NEUTRAL.color_neutral_font_50,
    },
    sublabel: {
      ...commonLabelTokens,
      color: COLORS.NEUTRAL.color_neutral_font_50,
    },
    icon: {
      ...icon,
      color: COLORS.NEUTRAL.color_neutral_icon_50,
    },
    tooltipVariant: TooltipVariantType.DEFAULT,
    embebed: commonEmbebedTokens,
  },
};
