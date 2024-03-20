import * as React from 'react';

import { STYLES_NAME } from '@/constants/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { ChipStandAlone } from './chipStandAlone';
import { IChipControlled, IChipStandAlone } from './types/chip';
import { ChipPropsStateStylesType } from './types/chipTheme';
import { ChipStateType } from './types/state';

const ChipComponent = React.forwardRef(
  <V extends string | unknown>(
    { state = ChipStateType.DEFAULT, ctv, ...props }: IChipControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<ChipPropsStateStylesType, V>(STYLES_NAME.CHIP, props.variant, ctv);
    return <ChipStandAlone {...props} ref={ref} state={state} styles={styles[state]} />;
  }
);
ChipComponent.displayName = 'ChipComponent';

const ChipBoundary = <V extends string | unknown>(
  props: IChipControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ChipStandAlone {...(props as unknown as IChipStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <ChipComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Chip = React.forwardRef(ChipBoundary) as <V extends string>(
  props: React.PropsWithChildren<IChipControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ChipBoundary>;

/**
 * @description
 * Chip component is a selector.
 * @param {React.PropsWithChildren<IChipControlled<V>>} props
 * @returns {JSX.Element}
 */
export { Chip };
