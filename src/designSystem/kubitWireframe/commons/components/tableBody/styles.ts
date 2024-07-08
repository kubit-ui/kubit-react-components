import { TableCellStylesType } from '@/components';

import { TableBodyVariantType } from './variants';

export const getTableBodyStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TableCellStylesType<TableBodyVariantType> => {
  return {
    [TableBodyVariantType.DEFAULT]: {
      container: {
        display: 'table-row-group',
      },
    },
  };
};
