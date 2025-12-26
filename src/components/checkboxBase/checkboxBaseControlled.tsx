import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { getCheckboxState } from '../checkbox/utils/state.utils';
import { CheckboxBaseStandAlone } from './checkboxBaseStandAlone';
import type { CheckboxBaseControlledProps } from './types/checkboxBase';

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
        cssClasses={cssClasses}
        required={true}
        {...props}
        aria-invalid={error}
        data-state={state}
        data-testid="checkboxBase"
      />
    );
  },
);
