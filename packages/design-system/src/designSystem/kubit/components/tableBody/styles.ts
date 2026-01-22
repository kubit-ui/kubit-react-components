import type { TableBodyVariantStyles } from '@/components/tableBody/types/tableBodyTheme';

import { TableBodyVariantType } from './variants';

type TableBodyVariant = keyof typeof TableBodyVariantType;

export const TABLE_BODY: TableBodyVariantStyles<TableBodyVariant> = {
  display: 'table-row-group',
  [TableBodyVariantType.DEFAULT]: {},
};
