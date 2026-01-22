import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { AlertProps } from './types/alert';

import { AlertStandAlone } from './alertStandAlone';

/**
 * Alert component for displaying notification messages.
 *
 * This component renders styled alerts.
 * Useful for notifications, success/error messages, and informational banners.
 * Always visible - no open/close functionality.
 *
 * @example
 * ```tsx
 * <Alert
 *   variant="success"
 *   content={{ content: "Your changes have been saved." }}
 * />
 * ```
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps<string>>(
  ({ additionalClasses, variant, ...props }, ref) => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'ALERT',
      variant,
    });

    return <AlertStandAlone ref={ref} cssClasses={cssClasses} {...props} />;
  },
);
