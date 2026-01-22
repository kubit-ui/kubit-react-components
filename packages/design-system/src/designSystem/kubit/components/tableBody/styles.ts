import type { TableBodyVariantStyles } from '@kubit-ui-web/react-components';

import { TableBodyVariantType } from './variants';

type TableBodyVariant = keyof typeof TableBodyVariantType;

export const TABLE_BODY: TableBodyVariantStyles<TableBodyVariant> = {
  display: 'table-row-group',
  [TableBodyVariantType.DEFAULT]: {},
};
