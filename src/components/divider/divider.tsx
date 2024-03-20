import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { DividerStandAlone } from './dividerStandAlone';
import { DividerVariantStylesProps, IDivider, IDividerStandAlone } from './types';

const DividerComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: IDivider<V>,
    ref: React.ForwardedRef<HTMLDivElement> | null
  ): JSX.Element => {
    const styles = useStyles<DividerVariantStylesProps, V>(STYLES_NAME.DIVIDER, variant, ctv);

    return <DividerStandAlone {...props} ref={ref} styles={styles} />;
  }
);
DividerComponent.displayName = 'DividerComponent';

const DividerBoundary = <V extends string | unknown>(
  props: IDivider<V>,
  ref: React.ForwardedRef<HTMLDivElement> | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <DividerStandAlone {...(props as unknown as IDividerStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <DividerComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Divider = React.forwardRef(DividerBoundary) as <V extends string>(
  props: React.PropsWithChildren<IDivider<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | null;
  }
) => ReturnType<typeof DividerComponent>;

/**
 * @description
 * Divider component is a wrapper component that can be used to wrap other components.
 *
 * @param {React.PropsWithChildren<IDivider<V>>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Divider variant="divider" />
 * <Divider variant="divider" orientation="vertical" />
 *
 */
export { Divider };
