import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { TableFootStandAlone } from './tableFootStandAlone';
import type { TableFootProps } from './types/tableFoot';

export const TableFoot = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableFootProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_FOOT',
    variant,
  });

  return <TableFootStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
});
