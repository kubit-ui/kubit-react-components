import { DataTableStylesType } from '@/components';

import { Z_INDEX } from '../../foundations';
import {
  TableBodyVariantType,
  TableCaptionVariantType,
  TableCellVariantType,
  TableHeadVariantType,
  TableRowVariantTypeV2,
  TableV2VariantType,
} from '../variants';
import { DataTableVariantType } from './variants';

export const DATA_TABLE_STYLES: DataTableStylesType<DataTableVariantType> = {
  [DataTableVariantType.DEFAULT]: {
    wrapper: {
      display: 'block',
      width: '100%',
      position: 'relative',
    },
    scrollableContainer: {
      width: '100%',
      overflow: 'auto',
    },
    table: {
      variant: TableV2VariantType.DEFAULT,
      z_index: Z_INDEX.INTERN_1,
    },
    tableCaption: {
      variant: TableCaptionVariantType.DEFAULT,
    },
    tableHead: {
      variant: TableHeadVariantType.DEFAULT,
    },
    tableHeadRow: {
      variant: TableRowVariantTypeV2.HEADER_ROW_DEFAULT,
    },
    tableHeadCell: {
      variant: TableCellVariantType.HEADER_CELL_DEFAULT,
    },
    tableBody: {
      variant: TableBodyVariantType.DEFAULT,
    },
    tableBodyRow: {
      variant: TableRowVariantTypeV2.BODY_ROW_DEFAULT,
    },
    tableBodyCell: {
      variant: TableCellVariantType.BODY_CELL_DEFAULT,
    },
    rowGroup: {
      table: {
        variant: TableV2VariantType.DEFAULT,
      },
      tableCaption: {
        variant: TableCaptionVariantType.DEFAULT,
      },
      tableHead: {
        variant: TableHeadVariantType.DEFAULT,
      },
      tableHeadRow: {
        variant: TableRowVariantTypeV2.HEADER_ROW_DEFAULT,
      },
      tableHeadCell: {
        variant: TableCellVariantType.HEADER_CELL_DEFAULT,
      },
      tableBody: {
        variant: TableBodyVariantType.DEFAULT,
      },
      tableBodyRow: {
        variant: TableRowVariantTypeV2.BODY_ROW_DEFAULT,
      },
      tableBodyCell: {
        variant: TableCellVariantType.BODY_CELL_DEFAULT,
      },
    },
    leftBoxShadowContainer: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '5px',
      pointer_events: 'none',
      transition: 'box-shadow 200ms',
      z_index: Z_INDEX.INTERN_2,
    },
    rightBoxShadowContainer: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '5px',
      pointer_events: 'none',
      transition: 'box-shadow 200ms',
      z_index: Z_INDEX.INTERN_2,
    },
    // TODO When specified - update tokens
    headBoxShadow: '0 2px 4px 0 #d62c2c',
    leftBoxShadow: 'rgb(214, 44, 44) 8px 0px 5px -7px inset',
    rightBoxShadow: 'rgb(214, 44, 44) -8px 0px 5px -7px inset',
  },
};
