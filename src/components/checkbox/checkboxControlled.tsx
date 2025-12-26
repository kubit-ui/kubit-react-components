import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { CheckboxStandAlone } from './checkboxStandAlone';
import type { CheckboxControlledProps } from './types/checkbox';
import { getCheckboxState } from './utils/state.utils';

export const CheckboxControlled = forwardRef(
  <Variant extends string = string>(
    { additionalClasses, variant, ...props }: CheckboxControlledProps<Variant>,
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'CHECKBOX',
      variant,
    });

    const state = getCheckboxState(props.checked, props.disabled, props.error);

    return (
      <CheckboxStandAlone
        ref={ref}
        cssClasses={cssClasses}
        {...props}
        data-state={state}
        data-testid="checkbox"
      />
    );
  },
);
