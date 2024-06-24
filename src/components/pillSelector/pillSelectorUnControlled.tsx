import * as React from 'react';

import { PillSelectorControlled } from './pillSelectorControlled';
import type { IPillSelectorUnControlled } from './types';

const PillSelectorUnControlledComponent = <V extends string | unknown>(
  { defaultSelected = [], multiSelect = false, ...props }: IPillSelectorUnControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [pillSelected, setPillSelected] = React.useState(defaultSelected);

  const onClickPill = (_checked?: boolean, value?: string | number) => {
    if (value === undefined) {
      return;
    }
    if (multiSelect) {
      // if already in the array, delete the item from the array
      if (pillSelected.some(item => item === value.toString())) {
        setPillSelected(pillSelected.filter(pill => pill !== value.toString()));
      } else {
        // add the item in te array
        pillSelected && setPillSelected([...pillSelected, value]);
      }
    } else {
      setPillSelected([value.toString()]);
    }
  };

  return (
    <PillSelectorControlled
      {...props}
      ref={ref}
      multiSelect={multiSelect}
      pillSelected={pillSelected}
      onPillChange={onClickPill}
    />
  );
};

const PillSelectorUnControlled = React.forwardRef(PillSelectorUnControlledComponent) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<IPillSelectorUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof PillSelectorUnControlledComponent>;

export { PillSelectorUnControlled };
