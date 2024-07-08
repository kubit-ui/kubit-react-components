import { TableCellStylesType } from '@/components';

import { FONT_WEIGHT, PARAGRAPH, SPACINGS } from '../../foundations';
import { TableCellVariantType } from './variants';

export const getTableCellStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TableCellStylesType<TableCellVariantType> => {
  return {
    [TableCellVariantType.HEADER_CELL_DEFAULT]: {
      container: {
        display: 'table-cell',
        transition: 'box-shadow 200ms',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        background_color: COLORS.SECONDARY.color_secondary_bg_150,
        font_family: 'Nunito Sans',
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
        line_height: PARAGRAPH.MEDIUM.DESKTOP.font_size,
        font_size: PARAGRAPH.MEDIUM.DESKTOP.font_size,
        // When using borders and sticky positions, border are not shown properly, they are shown in the wrong position or transparent
        // Fell free to improve this
        // border_width: BORDERS.border_50,
        // border_color: COLORS.NEUTRAL.color_neutral_border_50,
        // border_style: 'solid',
        box_shadow: `inset 1px 0 0 0 ${COLORS.NEUTRAL.color_neutral_border_50}, inset 0 1px 0 0 ${COLORS.NEUTRAL.color_neutral_border_50}`,
      },
    },
    [TableCellVariantType.BODY_CELL_DEFAULT]: {
      container: {
        display: 'table-cell',
        transition: 'box-shadow 200ms',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_300,
        line_height: PARAGRAPH.MEDIUM.DESKTOP.font_size,
        font_size: PARAGRAPH.MEDIUM.DESKTOP.font_size,
        // When using borders and sticky positions, border are not shown properly, they are shown in the wrong position or transparent
        // Fell free to improve this
        // border_width: BORDERS.border_50,
        // border_color: COLORS.NEUTRAL.color_neutral_border_50,
        // border_style: 'solid',
        box_shadow: `inset 1px 0 0 0 ${COLORS.NEUTRAL.color_neutral_border_50}, inset 0 1px 0 0 ${COLORS.NEUTRAL.color_neutral_border_50}`,
      },
    },
  };
};
