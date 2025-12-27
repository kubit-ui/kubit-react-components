import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TableDividerStandAloneProps } from './types/tableDivider';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

export const TableDividerStandAlone = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableDividerStandAloneProps>
>(({ children, component = 'div', cssClasses, id, ...props }, ref) => {
  const customProps = pickCustomAttributes(props);

  return (
    <CustomComponent
      ref={ref}
      className={cssClasses?.table_divider}
      component={component}
      data-table-divider={true}
      data-testid="table-divider"
      id={id}
      {...customProps}
    >
      {children}
    </CustomComponent>
  );
});
