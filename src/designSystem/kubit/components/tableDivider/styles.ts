import { TableDividerStylesTypeV2 } from '@/components';

import { TableDividerVariantType } from './variants';

export const TABLE_DIVIDER_STYLES: TableDividerStylesTypeV2<TableDividerVariantType> = {
  [TableDividerVariantType.DEFAULT]: {
    container: {
      width: '100%',
    },
  },
};
