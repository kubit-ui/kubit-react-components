import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { ErrorMessageStandAlone } from './errorMessageStandAlone';
import type { ErrorMessageProps } from './types/errorMessage';

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
