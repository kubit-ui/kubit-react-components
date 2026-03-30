import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { CheckboxControlledProps } from './types/checkbox';

import { CheckboxStandAlone } from './checkboxStandAlone';
import { getCheckboxState } from './utils/state.utils';

/**
 * CheckboxControlled component for managed checkbox state.
 *
 * This component renders a checkbox where the checked state is controlled
 * externally via props. It handles checked, indeterminate, disabled, and
 * error states with appropriate styling and ARIA attributes.
 *
 * @example
 * ```tsx
 * <CheckboxControlled
 *   checked={isChecked}
 *   onChange={(e) => setIsChecked(e.target.checked)}
 *   label="Accept terms"
 * />
 * ```
 */
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
