import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableDividerProps } from './types/tableDivider';

import { TableDividerStandAlone } from './tableDividerStandAlone';

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
