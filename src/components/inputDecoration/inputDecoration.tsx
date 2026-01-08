import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { InputDecorationProps } from './types/inputDecoration';

import { InputDecorationStandAlone } from './inputDecorationStandAlone';
import { getState } from './utils/state';

/**
 * InputDecoration component for wrapping and decorating input fields.
 *
 * This component provides a styled container for input elements with support
 * for labels, icons, helper text, and various visual states. It manages the
 * state representation (focused, filled, error, disabled) for consistent styling.
 *
 * @example
 * ```tsx
 * <InputDecoration
 *   label="Email"
 *   error={hasError}
 *   helperText="Enter a valid email"
 * >
 *   <input type="email" />
 * </InputDecoration>
 * ```
 */
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
