import type { TableDividerVariantStyles } from '@/components/tableDivider/types/tableDividerTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TableDividerVariantType } from './variants';

type TableDividerVariants = keyof typeof TableDividerVariantType;

export const TABLE_DIVIDER: TableDividerVariantStyles<TableDividerVariants> = {
  [TableDividerVariantType.DEFAULT]: {},
  width: cssVars.spacings_spacing_100_percent,
};
