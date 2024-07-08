import { TableFootStylesType } from '@/components';

import { TableFootVariantType } from './variants';

export const getTableFootStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TableFootStylesType<TableFootVariantType> => {
  return {
    [TableFootVariantType.DEFAULT]: {
      container: {
        display: 'table-footer-group',
      },
    },
  };
};
