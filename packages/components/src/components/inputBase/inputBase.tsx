import { forwardRef, useId } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { InputBaseProps } from './types/inputBase';

import { InputBaseStandAlone } from './inputBaseStandAlone';
import { getState } from './utils/state';

/**
 * InputBase component for basic text input functionality.
 *
 * This is a low-level input component that provides the foundation for more
 * complex input components. It manages states (focused, filled, error, disabled)
 * and applies appropriate styling and ARIA attributes.
 *
 * @example
 * ```tsx
 * <InputBase
 *   placeholder="Enter text"
 *   error={hasError}
 *   filled={!!value}
 *   focused={isFocused}
 * />
 * ```
 */
export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    { additionalClasses, error, filled, focused, id, variant, ...props },
    ref,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'INPUT_BASE',
      variant,
    });

    const reactId = useId();
    const uniqueId = `inputbase-${reactId.replace(/:/g, '')}`;
    const inputId = id ?? uniqueId;

    const state = getState({
      disabled: props.disabled,
      error: error,
      filled: filled,
      focused: focused,
    });

    return (
      <InputBaseStandAlone
        ref={ref}
        {...props}
        aria-invalid={error}
        cssClasses={cssClasses}
        data-state={state}
        data-testid="input-base"
        data-truncate={props.truncate}
        id={inputId}
      />
    );
  },
);
