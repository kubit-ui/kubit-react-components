//vendors
import React from 'react';

import { OptionType } from '@/types/option/option';

import { RadioButtonGroupControlled } from './radioButtonGroupControlled';
import { IRadioButtonGroupUncontrolled } from './types/radioButtonGroup';

const RadioButtonGroupUnControlledComponent = (
  { defaultSelectedOption, onChange, ...props }: IRadioButtonGroupUncontrolled,
  ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<OptionType | undefined>(
    defaultSelectedOption
  );

  const selectOption = e => {
    const {
      currentTarget: { value },
    } = e;

    onChange && onChange(e);
    setSelectedOption(props.options.find(o => o.value === value));
  };

  return (
    <RadioButtonGroupControlled
      {...props}
      ref={ref}
      selectedOption={selectedOption}
      onChange={selectOption}
    />
  );
};

export const RadioButtonGroupUnControlled = React.forwardRef(RadioButtonGroupUnControlledComponent);

export { RadioButtonGroupUnControlled as RadioButtonGroup };
