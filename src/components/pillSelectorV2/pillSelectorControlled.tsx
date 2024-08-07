import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { PillSelectorStandAlone } from './pillSelectorStandAlone';
import {
  IPillSelectorControlled,
  PillSelectorType,
  PillSelectorVariantPropsStylesType,
} from './types';

const PillSelectorControlledComponent = (
  {
    variant,
    size,
    ctv,
    type = PillSelectorType.SELECTOR_MULTIPLE,
    ...props
  }: IPillSelectorControlled,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const variantStyles = useStylesV2<PillSelectorVariantPropsStylesType>({
    styleName: STYLES_NAME.PILL_SELECTOR_V2,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  // Size prop is optional, else select the first size from the variantStyles
  const styles = size ? variantStyles?.[size] : variantStyles?.[Object.keys(variantStyles)[0]];

  const handlePillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!props.onChange) {
      return;
    }
    if (type === PillSelectorType.SELECTOR_SIMPLE) {
      props.onChange(event.target.value);
      return;
    }
    // SELECTOR MULTIPLE
    if (Array.isArray(props.value)) {
      const valueIncluded = props.value.includes(event.target.value);
      const newValue = valueIncluded
        ? props.value.filter(v => v !== event.target.value)
        : [...props.value, event.target.value];
      props.onChange(newValue);
      return;
    }
    // When value === undefined or value is not array
    props.onChange([event.target.value]);
  };

  return (
    <PillSelectorStandAlone
      ref={ref}
      styles={styles}
      type={type}
      onPillChange={handlePillChange}
      {...props}
    />
  );
};

export const PillSelectorControlled = React.forwardRef(PillSelectorControlledComponent);
