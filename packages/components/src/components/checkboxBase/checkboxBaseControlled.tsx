import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { CheckboxBaseControlledProps } from './types/checkboxBase';

import { getCheckboxState } from '../checkbox/utils/state.utils';
import { CheckboxBaseStandAlone } from './checkboxBaseStandAlone';

/**
 * CheckboxBaseControlled component for managed checkbox state.
 *
 * This is a low-level checkbox component where the checked state is controlled
 * externally. It handles error states, required validation, and applies appropriate
 * styling based on the checkbox state (checked, unchecked, indeterminate, disabled).
 *
 * @example
 * ```tsx
 * <CheckboxBaseControlled
 *   checked={isChecked}
 *   onChange={(e) => setIsChecked(e.target.checked)}
 *   error={hasError}
 * />
 * ```
 */
export const CheckboxBaseControlled = forwardRef(
  <Variant extends string = string>(
    {
      additionalClasses,
      error = false,
      required = false,
      variant,
      ...props
    }: CheckboxBaseControlledProps<Variant>,
    ref?: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'CHECKBOX_BASE',
      variant,
    });

    const state = getCheckboxState(
      props.checked,
      props.disabled,
      error,
    ).toLocaleLowerCase();

    return (
      <CheckboxBaseStandAlone
        ref={ref}
        required
        cssClasses={cssClasses}
        {...props}
        aria-invalid={error}
        data-state={state}
        data-testid="checkboxBase"
      />
    );
  },
);
