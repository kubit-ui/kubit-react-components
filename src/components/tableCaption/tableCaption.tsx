import { type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { TableCaptionStandAlone } from './tableCaptionStandAlone';
import type { TableCaptionProps } from './types/tableCaption';

export const TableCaption = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableCaptionProps>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TABLE_CAPTION',
    variant,
  });

  return (
    <TableCaptionStandAlone ref={ref} cssClasses={cssClasses} {...props} />
  );
});
