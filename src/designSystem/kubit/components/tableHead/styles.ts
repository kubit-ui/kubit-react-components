import { TableHeadStylesType } from '@/components';

import { Z_INDEX } from '../../foundations';
import { TableHeadVariantType } from './variants';

export const TABLE_HEAD_STYLES: TableHeadStylesType<TableHeadVariantType> = {
  [TableHeadVariantType.DEFAULT]: {
    container: {
      display: 'table-header-group',
      transition: 'box-shadow 200ms',
      z_index: Z_INDEX.INTERN_1,
    },
  },
};
