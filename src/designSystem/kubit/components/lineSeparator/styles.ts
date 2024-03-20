// vendors
// types
import { css } from 'styled-components';

import {
  LineSeparatorPositionType,
  LineSeparatorStylesType,
} from '@/components/lineSeparator/types';

// fundations
import { BORDERS, COLORS, FONT_WEIGHT, SPACINGS, TEXT_ALIGN } from '../../foundations';
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

const commonLabelContainer = {
  display: 'flex',
  align_items: 'center',
  width: 'fit-content',
  position: 'relative',
  padding: `${SPACINGS.spacing_50} ${SPACINGS.spacing_150}`,
};
const commonLabelText = {
  font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
  font_weight: FONT_WEIGHT.font_weight_400,
  text_align: TEXT_ALIGN.center,
};

export const LINE_SEPARATOR_STYLES: LineSeparatorStylesType<
  LineSeparatorLabelVariantType,
  LineSeparatorLineVariantType
> = {
  [LineSeparatorLabelVariantType.LABEL_DEFAULT]: {
    labelContainer: {
      ...commonLabelContainer,
      background_color: COLORS.NEUTRAL.color_neutral_bg_200,
    },
    label: {
      ...commonLabelText,
      color: COLORS.NEUTRAL.color_neutral_font_50,
    },
  },
  [LineSeparatorLabelVariantType.LABEL_INFORMATIVE]: {
    labelContainer: {
      ...commonLabelContainer,
      background_color: COLORS.NEUTRAL.color_neutral_bg_100,
    },
    label: {
      ...commonLabelText,
      color: COLORS.NEUTRAL.color_neutral_font_250,
    },
  },
  [LineSeparatorLineVariantType.LINE_DEFAULT]: {
    buildLineStyles: lineSeparatorStyledBuild({
      border_color: COLORS.NEUTRAL.color_neutral_border_200,
      border_weight: BORDERS.border_50,
    }),
  },
  [LineSeparatorLineVariantType.LINE_INFORMATIVE]: {
    buildLineStyles: lineSeparatorStyledBuild({
      border_color: COLORS.NEUTRAL.color_neutral_border_150,
      border_weight: BORDERS.border_50,
    }),
  },
};
