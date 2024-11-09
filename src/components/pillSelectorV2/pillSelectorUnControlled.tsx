import React from 'react';

import { PillSelectorControlled } from './pillSelectorControlled';
import { IPillSelectorUnControlled } from './types/pillSelector';
import { PillSelectorType } from './types/pillSelectorType';

const PillSelectorUnControlledComponent = (
  {
    type = PillSelectorType.SELECTOR_MULTIPLE,
    defaultValue,
    onChange,
    ...props
  }: IPillSelectorUnControlled,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (newValue: string | number | Array<string | number>) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <PillSelectorControlled
      ref={ref}
      type={type}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

export const PillSelectorUnControlled = React.forwardRef(PillSelectorUnControlledComponent);

export { PillSelectorUnControlled as PillSelectorV2 };
