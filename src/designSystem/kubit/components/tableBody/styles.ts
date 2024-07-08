import { TableCellStylesType } from '@/components';

import { TableBodyVariantType } from './variants';

export const TABLE_BODY_STYLES: TableCellStylesType<TableBodyVariantType> = {
  [TableBodyVariantType.DEFAULT]: {
    container: {
      display: 'table-row-group',
    },
  },
};
