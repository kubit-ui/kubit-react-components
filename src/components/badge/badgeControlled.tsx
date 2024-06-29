import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { BadgeStandAlone } from './badgeStandAlone';
import { BadgeStatus } from './types';
import { IBadgeControlled, IBadgeStandAlone } from './types/badge';
import { BadgeSizePropsType, BadgeVariantStylesType } from './types/badgeTheme';

const BadgeControlledComponent = React.forwardRef(
  <
    V = undefined extends string | unknown ? string | undefined : string | unknown,
    S = undefined extends string | unknown ? string | undefined : string | unknown,
  >(
    { ctv, cts, ...props }: IBadgeControlled<V, S>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<BadgeVariantStylesType, V>(STYLES_NAME.BADGE, props.variant, ctv);
    const iconStyles = styles[props.open ? BadgeStatus.OPEN : BadgeStatus.CLOSE];
    const sizeStyles = useStyles<BadgeSizePropsType, S>(STYLES_NAME.BADGE, props.size, cts);

    return (
      <BadgeStandAlone
        {...props}
        ref={ref}
        iconStyles={iconStyles}
        sizeStyles={sizeStyles}
        styles={styles}
      />
    );
  }
);
BadgeControlledComponent.displayName = 'BadgeControlledComponent';

const BagdeBoundary = <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: IBadgeControlled<V, S>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <BadgeStandAlone {...(props as unknown as IBadgeStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <BadgeControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * Badge component is a component that shows a badge with a number or a dot.
 * @param {React.PropsWithChildren<IBadgeControlled<V>>} props
 * @returns {JSX.Element}
 */
const BadgeControlled = React.forwardRef(BagdeBoundary) as <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: React.PropsWithChildren<IBadgeControlled<V, S>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { BadgeControlled };
