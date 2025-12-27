import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TableFootStandAloneProps } from './types/tableFoot';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

export const TableFootStandAlone = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableFootStandAloneProps>
>(({ children, component = 'tfoot', cssClasses, id, ...props }, ref) => {
  const customProps = pickCustomAttributes(props);

  return (
    <CustomComponent
      ref={ref}
      className={cssClasses?.table_foot}
      component={component}
      data-testid="table-foot"
      id={id}
      {...customProps}
    >
      {children}
    </CustomComponent>
  );
});
