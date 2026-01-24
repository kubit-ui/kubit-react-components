import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableCellProps } from './types/tableCell';

import { TableCellStandAlone } from './tableCellStandAlone';

/**
 * TableCell component for rendering individual table cells.
 *
 * This component wraps td or th elements with consistent styling and variant support.
 * Use it within TableRow components to display data or headers in a table.
 *
 * @example
 * ```tsx
 * <TableRow>
 *   <TableCell variant="default">Cell content</TableCell>
 *   <TableCell>Another cell</TableCell>
 * </TableRow>
 * ```
 */
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
