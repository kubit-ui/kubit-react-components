import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TableHeadStandAloneProps } from './types/tableHead';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

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
