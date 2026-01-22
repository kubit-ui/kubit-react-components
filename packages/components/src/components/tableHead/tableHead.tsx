import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableHeadProps } from './types/tableHead';

import { TableHeadStandAlone } from './tableHeadStandAlone';

/**
 * TableHead component for rendering table header sections.
 *
 * This component wraps the thead element with consistent styling and variant support.
 * Use it as a container for TableRow components with header cells within a Table.
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableHead variant="default">
 *     <TableRow>
 *       <TableCell>Header 1</TableCell>
 *     </TableRow>
 *   </TableHead>
 * </Table>
 * ```
 */
export const TableHead = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableHeadProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_HEAD',
    variant,
  });

  return <TableHeadStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
});
