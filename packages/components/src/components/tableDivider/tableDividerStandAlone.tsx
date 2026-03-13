import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TableDividerStandAloneProps } from './types/tableDivider';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

/**
 * Standalone table divider component for visual separation.
 *
 * This component renders a divider element to visually separate sections
 * within a table or table-like layout.
 *
 * @example
 * ```tsx
 * <TableDividerStandAlone>
 *   Divider content
 * </TableDividerStandAlone>
 * ```
 */
export const TableDividerStandAlone = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableDividerStandAloneProps>
>(({ children, component = 'div', cssClasses, id, ...props }, ref) => {
  const customProps = pickCustomAttributes(props);

  return (
    <CustomComponent
      ref={ref}
      data-table-divider
      className={cssClasses?.table_divider}
      component={component}
      data-testid="table-divider"
      id={id}
      {...customProps}
    >
      {children}
    </CustomComponent>
  );
});
