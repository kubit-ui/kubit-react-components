import type { DataTableVariantStyles } from '@/components/dataTable/types/dataTableTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TABLE } from '../table/styles';
import { TableVariantType } from '../table/variants';
import { TABLE_BODY } from '../tableBody/styles';
import { TableBodyVariantType } from '../tableBody/variants';
import { TABLE_CAPTION } from '../tableCaption/styles';
import { TableCaptionVariantType } from '../tableCaption/variants';
import { TABLE_CELL } from '../tableCell/styles';
import { TableCellVariantType } from '../tableCell/variants';
import { TABLE_HEAD } from '../tableHead/styles';
import { TableHeadVariantType } from '../tableHead/variants';
import { TABLE_ROW } from '../tableRow/styles';
import { TableRowVariantType } from '../tableRow/variants';
import { DataTableVariantType } from './variants';

type DataTableVariants = keyof typeof DataTableVariantType;

export const DATA_TABLE: DataTableVariantStyles<DataTableVariants> = {
  $foreign: {
    row_group_table: {
      component: TABLE,
      name: 'table',
      variant: TableVariantType.DEFAULT,
    },
    row_group_table_body: {
      component: TABLE_BODY,
      name: 'table_body',
      variant: TableBodyVariantType.DEFAULT,
    },
    row_group_table_body_cell: {
      component: TABLE_CELL,
      name: 'table_cell',
      variant: TableCellVariantType.BODY_CELL_DEFAULT,
    },
    row_group_table_body_row: {
      component: TABLE_ROW,
      name: 'table_row',
      variant: TableRowVariantType.BODY_ROW_DEFAULT,
    },
    row_group_table_caption: {
      component: TABLE_CAPTION,
      name: 'table_caption',
      variant: TableCaptionVariantType.DEFAULT,
    },
    row_group_table_head: {
      component: TABLE_HEAD,
      name: 'table_head',
      variant: TableHeadVariantType.DEFAULT,
    },
    row_group_table_head_cell: {
      component: TABLE_CELL,
      name: 'table_cell',
      variant: TableCellVariantType.HEADER_CELL_DEFAULT,
    },
    row_group_table_head_row: {
      component: TABLE_ROW,
      name: 'table_row',
      variant: TableRowVariantType.HEADER_ROW_DEFAULT,
    },
    table: {
      component: TABLE,
      name: 'table',
      variant: TableVariantType.DEFAULT,
    },
    table_body: {
      component: TABLE_BODY,
      name: 'table_body',
      variant: TableBodyVariantType.DEFAULT,
    },
    table_body_cell: {
      component: TABLE_CELL,
      name: 'table_cell',
      variant: TableCellVariantType.BODY_CELL_DEFAULT,
    },
    table_body_row: {
      component: TABLE_ROW,
      name: 'table_row',
      variant: TableRowVariantType.BODY_ROW_DEFAULT,
    },
    table_caption: {
      component: TABLE_CAPTION,
      name: 'table_caption',
      variant: TableCaptionVariantType.DEFAULT,
    },
    table_head: {
      component: TABLE_HEAD,
      name: 'table_head',
      variant: TableHeadVariantType.DEFAULT,
    },
    table_head_cell: {
      component: TABLE_CELL,
      name: 'table_cell',
      variant: TableCellVariantType.HEADER_CELL_DEFAULT,
    },
    table_head_row: {
      component: TABLE_ROW,
      name: 'table_row',
      variant: TableRowVariantType.HEADER_ROW_DEFAULT,
    },
  },
  _headBoxShadow: { box_shadow: '0 2px 4px 0 #d62c2c' },
  _leftBoxShadow: { box_shadow: 'rgb(214, 44, 44) 8px 0px 5px -7px inset' },
  _leftBoxShadowContainer: {
    bottom: '0',
    pointer_events: 'none',
    position: 'absolute',
    top: '0',
    transition: 'box-shadow 200ms',
    width: '5px',
    z_index: '2',
  },
  _rightBoxShadow: { box_shadow: 'rgb(214, 44, 44) -8px 0px 5px -7px inset' },
  _rightBoxShadowContainer: {
    bottom: '0',
    pointer_events: 'none',
    position: 'absolute',
    top: '0',
    transition: 'box-shadow 200ms',
    width: '5px',
    z_index: '2',
  },
  _scrollableContainer: {
    overflow: 'auto',
    width: '100%',
  },
  [DataTableVariantType.DEFAULT]: {},
  display: 'block',
  position: 'relative',
  width: cssVars.spacings_spacing_100_percent,
};
