import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStylesV2 } from '@/hooks/useStyles/useStylesV2';

import { PillStandAlone } from './pillStandAlone';
import { IPill } from './types/pill';
import { PillVariantPropsStylesType } from './types/pillTheme';
import { getPillState } from './utils/state';

const PillComponent = (
  { variant, size, ctv, selected = false, disabled = false, ...props }: IPill,
  ref: React.ForwardedRef<HTMLDivElement>
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

export { Pill as PillV2 };
