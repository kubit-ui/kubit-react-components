import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableRowProps } from './types/tableRow';

import { TableRowStandAlone } from './tableRowStandAlone';

export const TableRow = forwardRef<
  HTMLTableRowElement,
  PropsWithChildren<TableRowProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_ROW',
    variant,
  });

  return <TableRowStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
});
