import { TableCellStylesType } from '@/components';

import { COLORS, FONT_WEIGHT, PARAGRAPH, SPACINGS } from '../../foundations';
import { TableCellVariantType } from './variants';

export const TABLE_CELL_STYLES: TableCellStylesType<TableCellVariantType> = {
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
    },
  },
  [TableCellVariantType.HEADER_CELL_SECONDARY]: {
    container: {
      display: 'table-cell',
      transition: 'box-shadow 200ms',
      padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      font_family: 'Nunito Sans',
      color: COLORS.NEUTRAL.color_neutral_font_50,
      font_weight: FONT_WEIGHT.font_weight_600,
      line_height: PARAGRAPH.MEDIUM.DESKTOP.font_size,
      font_size: PARAGRAPH.MEDIUM.DESKTOP.font_size,
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
    },
  },
};
