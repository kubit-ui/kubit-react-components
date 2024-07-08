import { TableDividerStylesTypeV2 } from '@/components';

import { TableDividerVariantType } from './variants';

export const getTableDividerStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TableDividerStylesTypeV2<TableDividerVariantType> => {
  return {
    [TableDividerVariantType.DEFAULT]: {
      container: {
        width: '100%',
      },
    },
  };
};
