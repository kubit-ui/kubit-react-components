import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { TableCellStandAlone } from './tableCellStandAlone';
import type { TableCellProps } from './types/tableCell';

export const TableCell = forwardRef<
  HTMLTableCellElement,
  PropsWithChildren<TableCellProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_CELL',
    variant,
  });

  return <TableCellStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
});
