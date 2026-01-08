import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { ErrorMessageProps } from './types/errorMessage';

import { ErrorMessageStandAlone } from './errorMessageStandAlone';

/**
 * ErrorMessage component for displaying error messages.
 *
 * This component renders a styled error message with optional icons and
 * customizable variants. It uses the ErrorMessageStandAlone component
 * for rendering with CSS classes from the design system.
 *
 * @example
 * ```tsx
 * <ErrorMessage variant="default">
 *   Please enter a valid email address
 * </ErrorMessage>
 * ```
 */
export const ErrorMessage = forwardRef(
  <Variant extends string = string>(
    { additionalClasses, variant, ...props }: ErrorMessageProps<Variant>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'ERROR_MESSAGE',
      variant,
    });

    return (
      <ErrorMessageStandAlone
        ref={ref}
        cssClasses={cssClasses}
        {...props}
        data-testid="error-message"
      />
    );
  },
);
