import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { NavBarStandAlone } from './navBarStandAlone';
import type { NavBarProps } from './types/navBar';

/**
 * A component that renders a navigation bar, which can be used as a header, footer, or standalone navigation.
 * It supports custom CSS classes and forwards a ref to the inner navigation container.
 *
 * @param {INavBarControlled} props - The props for the navigation bar component.
 * @param {ForwardedRef<HTMLDivElement>} ref - The forwarded ref for the inner navigation container.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export const NabVar = forwardRef<HTMLDivElement, NavBarProps>(
  ({ additionalClasses, variant, ...props }, ref): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'NAVBAR',
      variant,
    });
    return <NavBarStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
  },
);
