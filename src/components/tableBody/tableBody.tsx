import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableBodyProps } from './types/tableBody';

import { TableBodyStandAlone } from './tableBodyStandAlone';

/**
 * TableBody component for rendering table body sections.
 *
 * This component wraps the tbody element with consistent styling and variant support.
 * Use it as a container for TableRow components within a Table.
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableBody variant="default">
 *     <TableRow>...</TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export const TableBody = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableBodyProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_BODY',
    variant,
  });

  return <TableBodyStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
});
