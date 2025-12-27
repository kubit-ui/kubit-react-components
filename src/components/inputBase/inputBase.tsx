import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useId } from '@/lib/hooks/useId/useId';

import type { InputBaseProps } from './types/inputBase';

import { InputBaseStandAlone } from './inputBaseStandAlone';
import { getState } from './utils/state';

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

    const uniqueId = useId('inputBase');
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
