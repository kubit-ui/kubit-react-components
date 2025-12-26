import type { TableFootVariantStyles } from '@/components/tableFoot/types/tableFootTheme';

import { TableFootVariantType } from './variants';

type TableFootVariants = keyof typeof TableFootVariantType;

export const TABLE_FOOT: TableFootVariantStyles<TableFootVariants> = {
  display: 'table-footer-group',
  [TableFootVariantType.DEFAULT]: {},
};
