import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { TableDividerStandAlone } from './tableDividerStandAlone';
import type { TableDividerProps } from './types/tableDivider';

export const TableDivider = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableDividerProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_DIVIDER',
    variant,
  });

  return (
    <TableDividerStandAlone ref={ref} cssClasses={cssClasses} {...props} />
  );
});
