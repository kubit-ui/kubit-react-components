import * as React from 'react';

import { useCheckbox } from '@/hooks';

import { CheckboxWithLabelControlled } from './checkboxWithLabelControlled';
import type { ICheckboxWithLabelUncontrolled } from './types';

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

const CheckboxWithLabelUncontrolled = React.forwardRef(CheckboxWithLabelUncontrolledComponent) as <
  V extends string | unknown,
>(
  props: ICheckboxWithLabelUncontrolled<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { CheckboxWithLabelUncontrolled };
