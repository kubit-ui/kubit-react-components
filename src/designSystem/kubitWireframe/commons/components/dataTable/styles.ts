import { DataTableStylesType } from '@/components';

import { SPACINGS, Z_INDEX } from '../../foundations';
import {
  TableBodyVariantType,
  TableCaptionVariantType,
  TableCellVariantType,
  TableHeadVariantType,
  TableRowVariantTypeV2,
  TableV2VariantType,
} from '../variants';
import { DataTableVariantType } from './variants';

export const getDataTableStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): DataTableStylesType<DataTableVariantType> => {
  return {
    [DataTableVariantType.DEFAULT]: {
      wrapper: {
        display: 'block',
        width: '100%',
        position: 'relative',
        box_shadow: `${SPACINGS.spacing_100} ${SPACINGS.spacing_100} ${SPACINGS.spacing_0} ${COLORS.BRAND.color_brand_bg_50}`,
      },
      scrollableContainer: {
        width: '100%',
        overflow: 'auto',
      },
      table: {
        variant: TableV2VariantType.DEFAULT_WITHOUT_SHADOW,
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
          variant: TableV2VariantType.DEFAULT_WITHOUT_SHADOW,
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
      headBoxShadow: `0 2px 4px 0 ${COLORS.BRAND.color_brand_bg_50}`,
      leftBoxShadow: `${COLORS.BRAND.color_brand_bg_50} 8px 0px 5px -7px inset`,
      rightBoxShadow: `${COLORS.BRAND.color_brand_bg_50} -8px 0px 5px -7px inset`,
    },
  };
};
