import type { TableCellVariantStyles } from '@/components/tableCell/types/tableCellTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { PARAGRAPH } from '../../foundations/typography';
import { TableCellVariantType } from './variants';

type TableCellVariant = keyof typeof TableCellVariantType;

const dynamicValues = [
  '$tdWidth',
  '$tdHeight',
  '$tdMinWidth',
  '$tdMaxWidth',
  '$tdTextAlign',
  '$tdVerticalAlign',
  '$tdAlignItems',
  '$tdJustifyContent',
  '$tdTop',
  '$tdLeft',
  '$tdRight',
  '$tdBottom',
];

export const TABLE_CELL: TableCellVariantStyles<TableCellVariant> = {
  $attributes: {
    'data-hidden': {
      true: {
        border: cssVars.spacings_spacing_0,
        clip_path: 'rect(0, 0, 0, 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: cssVars.spacings_spacing_0,
        position: 'absolute',
        width: '1px',
      },
    },
    'data-sticky': {
      LEFT: {
        position: 'sticky',
      },
      RIGHT: {
        position: 'sticky',
      },
    },
  },
  $dynamicValues: dynamicValues,
  align_items: '$tdAlignItems',
  bottom: '$tdBottom',
  color: cssVars.colors_neutral_color_font_50,
  display: 'table-cell',
  font_size: PARAGRAPH.MEDIUM.desktop.font_size,
  height: '$tdHeight',
  justify_content: '$tdJustifyContent',
  left: '$tdLeft',
  line_height: PARAGRAPH.MEDIUM.desktop.font_size,
  max_width: '$tdMaxWidth',
  min_width: '$tdMinWidth',
  padding: `${cssVars.spacings_spacing_250} ${cssVars.spacings_spacing_300}`,
  right: '$tdRight',
  [TableCellVariantType.BODY_CELL_DEFAULT]: {
    background_color: cssVars.colors_neutral_color_bg_250,
    font_weight: cssVars.font_weight_300,
  },
  [TableCellVariantType.HEADER_CELL_DEFAULT]: {
    background_color: cssVars.colors_secondary_color_bg_150,
    font_family: 'Nunito Sans',
    font_weight: cssVars.font_weight_600,
  },
  [TableCellVariantType.HEADER_CELL_SECONDARY]: {
    background_color: cssVars.colors_neutral_color_bg_250,
    font_family: 'Nunito Sans',
    font_weight: cssVars.font_weight_600,
  },
  text_align: '$tdTextAlign',
  top: '$tdTop',
  transition: 'box-shadow 200ms',
  vertical_align: '$tdVerticalAlign',
  width: '$tdWidth',
};
