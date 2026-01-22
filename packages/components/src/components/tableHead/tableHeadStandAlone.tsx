import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TableHeadStandAloneProps } from './types/tableHead';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

/**
 * Standalone table head component for rendering the thead element.
 *
 * This component renders the header section of a table with optional sticky
 * positioning and hidden visibility.
 *
 * @example
 * ```tsx
 * <TableHeadStandAlone sticky={true}>
 *   <tr><th>Column</th></tr>
 * </TableHeadStandAlone>
 * ```
 */
export const TableHeadStandAlone = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableHeadStandAloneProps>
>(
  (
    { children, component = 'thead', cssClasses, hidden, id, sticky, ...props },
    ref,
  ) => {
    const customProps = pickCustomAttributes(props);

    return (
      <CustomComponent
        ref={ref}
        className={cssClasses?.table_head}
        component={component}
        data-hidden={hidden}
        data-sticky={sticky}
        data-table-head={true}
        data-testid="table-head"
        id={id}
        {...customProps}
      >
        {children}
      </CustomComponent>
    );
  },
);
