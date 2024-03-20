// vendors
// types
import { css } from 'styled-components';

import {
  LineSeparatorPositionType,
  LineSeparatorStylesType,
} from '@/components/lineSeparator/types';

// fundations
import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS, TEXT_ALIGN } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { LineSeparatorLabelVariantType, LineSeparatorLineVariantType } from './variants';

const lineSeparatorStyledBuild =
  ({ border_color, border_weight }: { border_color: string; border_weight?: string }) =>
  (position?: LineSeparatorPositionType) => {
    const commonCss = css`
      border-width: ${border_weight};
      border-color: ${border_color};
    `;
    switch (position) {
      case LineSeparatorPositionType.BOTTOM:
        return css`
          border-bottom-style: solid;
          ${commonCss}
        `;
      case LineSeparatorPositionType.LEFT:
        return css`
          border-left-style: solid;
          ${commonCss}
        `;
      case LineSeparatorPositionType.RIGHT:
        return css`
          border-right-style: solid;
          ${commonCss}
        `;
      default:
        return css`
          border-top-style: solid;
          ${commonCss}
        `;
    }
  };

export const getLineSeparatorStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): LineSeparatorStylesType<LineSeparatorLabelVariantType, LineSeparatorLineVariantType> => {
  return {
    [LineSeparatorLabelVariantType.LABEL_DEFAULT]: {
      labelContainer: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_radius: RADIUS.radius_00,
        height: SIZES.size_400,
        gap: SPACINGS.spacing_300,
      },
      label: {
        font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
        text_align: TEXT_ALIGN.center,
      },
    },
    [LineSeparatorLabelVariantType.LABEL_TABLE]: {
      labelContainer: {
        position: 'relative',
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_radius: RADIUS.radius_00,
        border_bottom: 'solid',
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
        border_width: BORDERS.border_50,
        padding: SPACINGS.spacing_100,
      },
      label: {
        font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
        text_align: TEXT_ALIGN.center,
      },
    },
    [LineSeparatorLineVariantType.LINE_DEFAULT]: {
      buildLineStyles: lineSeparatorStyledBuild({
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
        border_weight: BORDERS.border_50,
      }),
    },
    [LineSeparatorLineVariantType.NONE_LINE]: {
      buildLineStyles: lineSeparatorStyledBuild({
        border_color: COLORS.BRAND.color_brand_border_50,
        border_weight: BORDERS.border_00,
      }),
    },
  };
};
