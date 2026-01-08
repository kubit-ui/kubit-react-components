import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableDividerProps } from './types/tableDivider';

import { TableDividerStandAlone } from './tableDividerStandAlone';

/**
 * TableDivider component for rendering visual separators in tables.
 *
 * This component creates visual dividers or separators between table sections.
 * Useful for organizing complex tables with multiple logical groups of data.
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableBody>
 *     <TableRow>...</TableRow>
 *     <TableDivider variant="default" />
 *     <TableRow>...</TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export const TableDivider = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableDividerProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_DIVIDER',
    variant,
  });

  return (
    <TableDividerStandAlone ref={ref} cssClasses={cssClasses} {...props} />
  );
});
