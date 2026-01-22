import type { TableFootVariantStyles } from '@kubit-ui-web/react-components';

import { TableFootVariantType } from './variants';

type TableFootVariants = keyof typeof TableFootVariantType;

export const TABLE_FOOT: TableFootVariantStyles<TableFootVariants> = {
  display: 'table-footer-group',
  [TableFootVariantType.DEFAULT]: {},
};
