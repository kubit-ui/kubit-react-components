import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableFootProps } from './types/tableFoot';

import { TableFootStandAlone } from './tableFootStandAlone';

/**
 * TableFoot component for rendering table footer sections.
 *
 * This component wraps the tfoot element with consistent styling and variant support.
 * Use it to display summary rows, totals, or footer information in a table.
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableBody>...</TableBody>
 *   <TableFoot variant="default">
 *     <TableRow>
 *       <TableCell>Total</TableCell>
 *       <TableCell>$1,234</TableCell>
 *     </TableRow>
 *   </TableFoot>
 * </Table>
 * ```
 */
export const TableFoot = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableFootProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_FOOT',
    variant,
  });

  return <TableFootStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
});
