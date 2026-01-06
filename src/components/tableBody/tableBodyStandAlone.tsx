import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TableBodyStandAloneProps } from './types/tableBody';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

/**
 * Standalone table body component for rendering the tbody element.
 *
 * This component renders the body section of a table containing data rows.
 *
 * @example
 * ```tsx
 * <TableBodyStandAlone>
 *   <tr><td>Data</td></tr>
 * </TableBodyStandAlone>
 * ```
 */
export const TableBodyStandAlone = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableBodyStandAloneProps>
>(({ children, component = 'tbody', cssClasses, id, ...props }, ref) => {
  const customProps = pickCustomAttributes(props);
  return (
    <CustomComponent
      ref={ref}
      className={cssClasses?.table_body}
      component={component}
      data-testid="table-body"
      {...customProps}
      id={id}
    >
      {children}
    </CustomComponent>
  );
});
