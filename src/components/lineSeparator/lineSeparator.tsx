import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { LineSeparatorStandAlone } from './lineSeparatorStandAlone';
import {
  ILineSeparator,
  ILineSeparatorStandAlone,
  LineSeparatorLabelPropsStylesType,
  LineSeparatorLinePropsStylesType,
} from './types';

const LINE_SEPARATOR_STYLES = 'LINE_SEPARATOR_STYLES';

const LineSeparatorComponent = React.forwardRef(
  <
    V = undefined extends string | unknown ? string | undefined : string | unknown,
    S = undefined extends string | unknown ? string | undefined : string | unknown,
  >(
    { labelVariant, lineVariant, ctv, extraCt, ...props }: ILineSeparator<V, S>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const labelStyles = useStyles<LineSeparatorLabelPropsStylesType, V>(
      LINE_SEPARATOR_STYLES,
      labelVariant,
      ctv
    );
    const lineStyles = useStyles<LineSeparatorLinePropsStylesType, S>(
      LINE_SEPARATOR_STYLES,
      lineVariant,
      extraCt
    );
    return (
      <LineSeparatorStandAlone
        {...props}
        ref={ref}
        labelStyles={labelStyles}
        lineStyles={lineStyles}
      />
    );
  }
);
LineSeparatorComponent.displayName = 'LineSeparatorComponent';

const LineSeparatorBoundary = <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: ILineSeparator<V, S>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <LineSeparatorStandAlone {...(props as unknown as ILineSeparatorStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <LineSeparatorComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const LineSeparator = React.forwardRef(LineSeparatorBoundary) as <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: React.PropsWithChildren<ILineSeparator<V, S>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof LineSeparatorBoundary>;

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release. Consider using an alternative component.
 *
 * LineSeparator component is a wrapper component that adds a line separator between two components.
 * @param {React.PropsWithChildren<ILineSeparator<V, S>>} props
 * @returns {JSX.Element}
 * @constructor
 */
export { LineSeparator };
