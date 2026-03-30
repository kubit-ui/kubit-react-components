import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableCaptionProps } from './types/tableCaption';

import { TableCaptionStandAlone } from './tableCaptionStandAlone';

/**
 * TableCaption component for providing titles or descriptions for tables.
 *
 * This component renders a caption element for tables, helping users understand
 * the table's purpose or contents. Important for accessibility and SEO.
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableCaption variant="default">
 *     Sales Report for Q4 2024
 *   </TableCaption>
 *   <TableHead>...</TableHead>
 * </Table>
 * ```
 */
export const TableCaption = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableCaptionProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_CAPTION',
    variant,
  });

  return (
    <TableCaptionStandAlone ref={ref} cssClasses={cssClasses} {...props} />
  );
});
