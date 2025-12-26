import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { InputDecorationStandAlone } from './inputDecorationStandAlone';
import type { InputDecorationProps } from './types/inputDecoration';
import { getState } from './utils/state';

export const InputDecoration = forwardRef<HTMLDivElement, InputDecorationProps>(
  ({ additionalClasses, variant, ...props }, ref): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'INPUT_DECORATION',
      variant,
    });

    const state = getState({
      disabled: props.disabled,
      error: props.error,
      filled: props.filled,
      focused: props.focused,
    });

    return (
      <InputDecorationStandAlone
        ref={ref}
        cssClasses={cssClasses}
        data-state={state}
        data-testid="input-decoration"
        {...props}
      />
    );
  },
);
