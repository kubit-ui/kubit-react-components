import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { BadgeStandAlone } from './badgeStandAlone';
import { BadgeState } from './types';
import { IBadge, IBadgeStandAlone } from './types/badge';
import { BadgeSizePropsType, BadgeVariantStylesType } from './types/badgeTheme';

const BadgeComponent = React.forwardRef(
  <
    V = undefined extends string | unknown ? string | undefined : string | unknown,
    S = undefined extends string | unknown ? string | undefined : string | unknown,
  >(
    { hasDot = true, ctv, cts, ...props }: IBadge<V, S>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const [active, setActive] = React.useState<boolean>(false);

    const styles = useStyles<BadgeVariantStylesType, V>(STYLES_NAME.BADGE_V2, props.variant, ctv);
    const stateStyles = styles[active ? BadgeState.ACTIVE : BadgeState.DEFAULT];
    const sizeStyles = useStyles<BadgeSizePropsType, S>(STYLES_NAME.BADGE_V2, props.size, cts);

    const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onClick?.(e);
      setActive(!active);
    };

    const handleOnBadgeBlur: React.FocusEventHandler<HTMLDivElement> = event => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setActive(false);
      }
    };

    return (
      <BadgeStandAlone
        {...props}
        ref={ref}
        active={active}
        hasDot={hasDot}
        sizeStyles={sizeStyles}
        styles={stateStyles}
        onBadgeBlur={handleOnBadgeBlur}
        onClick={handleIconClick}
      />
    );
  }
);
BadgeComponent.displayName = 'BadgeComponent';

const BagdeBoundary = <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: IBadge<V, S>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <BadgeStandAlone {...(props as unknown as IBadgeStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <BadgeComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * Badge component is a component that shows a badge with a number or a dot.
 * @param {React.PropsWithChildren<IBadge<V>>} props
 * @returns {JSX.Element}
 */
const Badge = React.forwardRef(BagdeBoundary) as <
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
>(
  props: React.PropsWithChildren<IBadge<V, S>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { Badge };
