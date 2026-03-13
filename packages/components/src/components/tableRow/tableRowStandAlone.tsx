import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TableRowStandAloneProps } from './types/tableRow';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

/**
 * Standalone table row component for rendering tr elements.
 *
 * This component renders a table row with support for active state, hover effects,
 * and click interactions.
 *
 * @example
 * ```tsx
 * <TableRowStandAlone
 *   active={true}
 *   onClick={() => {}}
 * >
 *   <td>Row content</td>
 * </TableRowStandAlone>
 * ```
 */
export const TableRowStandAlone = forwardRef<
  HTMLTableRowElement,
  PropsWithChildren<TableRowStandAloneProps>
>(
  (
    {
      active,
      children,
      component = 'tr',
      cssClasses,
      hoverable = true,
      id,
      onClick,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref,
  ) => {
    const customProps = pickCustomAttributes(props);

    return (
      <CustomComponent
        ref={ref}
        data-table-row
        className={cssClasses?.table_row}
        component={component}
        data-active={active}
        data-hoverable={hoverable}
        data-testid="table-row"
        id={id}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...customProps}
      >
        {children}
      </CustomComponent>
    );
  },
);
