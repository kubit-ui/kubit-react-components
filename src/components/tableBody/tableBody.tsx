import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { TableBodyStandAlone } from './tableBodyStandAlone';
import type { TableBodyProps } from './types/tableBody';

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableBodyProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_BODY',
    variant,
  });

  return <TableBodyStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
});
