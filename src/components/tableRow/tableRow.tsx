import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableRowProps } from './types/tableRow';

import { TableRowStandAlone } from './tableRowStandAlone';

/**
 * TableRow component for rendering table rows.
 *
 * This component wraps the tr element with consistent styling and variant support.
 * Use it as a container for TableCell components within TableHead or TableBody sections.
 *
 * @example
 * ```tsx
 * <TableBody>
 *   <TableRow variant="default">
 *     <TableCell>Data 1</TableCell>
 *     <TableCell>Data 2</TableCell>
 *   </TableRow>
 * </TableBody>
 * ```
 */
export const TableRow = forwardRef<
  HTMLTableRowElement,
  PropsWithChildren<TableRowProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_ROW',
    variant,
  });

  return <TableRowStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
});
