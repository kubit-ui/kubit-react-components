import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableHeadProps } from './types/tableHead';

import { TableHeadStandAlone } from './tableHeadStandAlone';

export const TableHead = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableHeadProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_HEAD',
    variant,
  });

  return <TableHeadStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
});
