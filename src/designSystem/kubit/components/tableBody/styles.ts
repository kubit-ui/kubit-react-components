import { TableCellStylesType } from '@/components/tableCell/types/tableCellTheme';

import { TableBodyVariantType } from './variants';

export const TABLE_BODY_STYLES: TableCellStylesType<TableBodyVariantType> = {
  [TableBodyVariantType.DEFAULT]: {
    container: {
      display: 'table-row-group',
    },
  },
};
