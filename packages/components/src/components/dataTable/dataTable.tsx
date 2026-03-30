import { forwardRef, useImperativeHandle, useRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { DataTableProps } from './types/dataTable';

import { DataTableStandAlone } from './dataTableStandAlone';
import { useDataTableHasScroll } from './hooks/useDataTableHasScroll';
import { useDataTableShadow } from './hooks/useDataTableShadow';
import { useDataTableStickyDividers } from './hooks/useDataTableStickyDividers';
import { useDataTableStickyLeftColumns } from './hooks/useDataTableStickyLeftColumns';
import { useDataTableStickyRightColumns } from './hooks/useDataTableStickyRightColumns';

/**
 * DataTable component for displaying structured data in a table format.
 *
 * This component provides advanced table functionality including sticky columns,
 * scrollable content, shadow effects, and divider management. It handles complex
 * table behaviors automatically through internal hooks.
 *
 * @example
 * ```tsx
 * <DataTable variant="striped">
 *   <TableHead>...</TableHead>
 *   <TableBody>...</TableBody>
 * </DataTable>
 * ```
 */
export const DataTable = forwardRef<HTMLDivElement, DataTableProps>(
  ({ additionalClasses, variant, ...props }, ref) => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'DATA_TABLE',
      variant,
    });

    const innerRef = useRef<HTMLDivElement>(null);

    // Expose the innerRef to the parent via the forwarded ref
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement, []);

    // Hooks for managing table behavior
    const { hasScroll } = useDataTableHasScroll({ ref: innerRef });
    useDataTableStickyRightColumns({ ref: innerRef });
    useDataTableStickyLeftColumns({ ref: innerRef });
    useDataTableStickyDividers({ ref: innerRef });
    useDataTableShadow({
      headBoxShadow: cssClasses.headboxshadow,
      leftBoxShadow: cssClasses.leftboxshadow,
      ref: innerRef,
      rightBoxShadow: cssClasses.rightboxshadow,
    });

    return (
      <DataTableStandAlone
        ref={innerRef}
        cssClasses={cssClasses}
        hasScroll={hasScroll}
        {...props}
      />
    );
  },
);
