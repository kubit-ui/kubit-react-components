import { TableFootStylesType } from '@/components';

import { TableFootVariantType } from './variants';

export const TABLE_FOOT_STYLES: TableFootStylesType<TableFootVariantType> = {
  [TableFootVariantType.DEFAULT]: {
    container: {
      display: 'table-footer-group',
    },
  },
};
