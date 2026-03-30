import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { ListOptionsProps } from './types/listOptions';

import { ListOptionsStandAlone } from './listOptionsStandAlone';

/**
 * ListOptions component for displaying a list of selectable options.
 *
 * This component renders a list container for options/items, commonly used
 * in dropdowns, select menus, or autocomplete interfaces. It manages styling
 * and provides a consistent container for option elements.
 *
 * @example
 * ```tsx
 * <ListOptions variant="default">
 *   <Option>Option 1</Option>
 *   <Option>Option 2</Option>
 * </ListOptions>
 * ```
 */
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
