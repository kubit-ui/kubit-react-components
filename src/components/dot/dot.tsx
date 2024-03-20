import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { DotStandAlone } from './dotStandAlone';
import { DotSizePropsType, DotVariantStylesType } from './types';
import { IDot, IDotStandAlone } from './types/dot';

const DotComponent = React.forwardRef(
  <
    V = undefined extends string | unknown ? string | undefined : string | unknown,
    S = undefined extends string | unknown ? string | undefined : string | unknown,
  >(
    props: IDot<V, S>,
    ref?: React.ForwardedRef<HTMLSpanElement> | undefined | null
  ): JSX.Element => {
    const { size, variant, number, maxNumber } = props;
    const styles = useStyles<DotVariantStylesType, V>(STYLES_NAME.DOT, variant, props.ctv);
    const sizeStyles = useStyles<DotSizePropsType, S>(STYLES_NAME.DOT, size, props.cts);

    const formattedNumber =
      number && maxNumber && number > maxNumber ? `+${maxNumber}` : number?.toString();

    return (
      <DotStandAlone
        {...props}
        ref={ref}
        formatedNumber={size !== 'SMALL' ? formattedNumber : undefined}
        sizeStyles={sizeStyles}
        styles={styles}
      />
    );
  }
);
DotComponent.displayName = 'DotComponent';

const DotBoundary = <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: IDot<V, S>,
  ref?: React.ForwardedRef<HTMLSpanElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <DotStandAlone {...(props as unknown as IDotStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <DotComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Dot = React.forwardRef(DotBoundary) as <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: React.PropsWithChildren<IDot<V, S>> & {
    ref?: React.ForwardedRef<HTMLSpanElement> | undefined | null;
  }
) => ReturnType<typeof DotBoundary>;

/**
 * @description
 * Dot component is a component that can be used to display a dot.
 * It can be used to display a notification dot or a dot to indicate a status.
 * @param {IDot<V, S>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Dot variant="primary" size="SMALL" number={1} maxNumber={99} />
 */
export { Dot };
