import React from 'react';

import { useCheckbox } from '@/hooks/useCheckbox/useCheckbox';

import { CheckboxWithLabelControlled } from './checkboxWithLabelControlled';
import type { ICheckboxWithLabelUncontrolled } from './types/checkboxWithLabel';

const CheckboxWithLabelUncontrolledComponent = <V extends string | unknown>(
  { initialChecked = false, disabled = false, ...props }: ICheckboxWithLabelUncontrolled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const { isChecked, handleToggleIsChecked } = useCheckbox({ initialChecked, disabled });

  return (
    <CheckboxWithLabelControlled
      ref={ref}
      checked={isChecked}
      disabled={disabled}
      onChange={handleToggleIsChecked}
      {...props}
    />
  );
};

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release. Will include all this on the CheckBox component
 */
const CheckboxWithLabelUncontrolled = React.forwardRef(CheckboxWithLabelUncontrolledComponent) as <
  V extends string | unknown,
>(
  props: ICheckboxWithLabelUncontrolled<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { CheckboxWithLabelUncontrolled };

export { CheckboxWithLabelUncontrolled as CheckboxWithLabel };
