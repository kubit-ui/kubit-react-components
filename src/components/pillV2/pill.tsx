import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { PillStandAlone } from './pillStandAlone';
import { IPill, PillVariantPropsStylesType } from './types';
import { getPillState } from './utils';

const PillComponent = (
  { variant, size, ctv, selected = false, disabled = false, ...props }: IPill,
  ref: React.LegacyRef<HTMLDivElement> | undefined
) => {
  const variantStyles = useStylesV2<PillVariantPropsStylesType>({
    styleName: STYLES_NAME.PILL_V2,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  const state = getPillState({ selected, disabled });

  // Size prop is optional, else select the first size from the variantStyles
  const styles = size
    ? variantStyles?.[size]?.[state]
    : variantStyles?.[Object.keys(variantStyles)[0]]?.[state];

  return (
    <PillStandAlone ref={ref} disabled={disabled} selected={selected} styles={styles} {...props} />
  );
};

export const Pill = React.forwardRef(PillComponent);
