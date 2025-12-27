import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { ListOptionsProps } from './types/listOptions';

import { ListOptionsStandAlone } from './listOptionsStandAlone';

export const ListOptions = forwardRef<HTMLDivElement, ListOptionsProps>(
  (
    { additionalClasses, variant, ...props }: ListOptionsProps,
    ref,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'LIST_OPTIONS',
      variant,
    });

    return (
      <ListOptionsStandAlone {...props} ref={ref} cssClasses={cssClasses} />
    );
  },
);
