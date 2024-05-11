/* eslint-disable complexity */
import * as React from 'react';

import { TextDecorationType } from '@/components/text/types';
import { STYLES_NAME } from '@/constants';
import { States, useManageState } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { useGenericComponents } from '@/provider/genericComponents/genericComponentsProvider';

import { disabledLink } from './helpers/disabled';
import { LinkStandAlone } from './linkStandAlone';
import {
  ILink,
  ILinkStandAlone,
  LinkActionType,
  LinkPropsStylesType,
  LinkStateType,
} from './types';

const LinkComponent = React.forwardRef(
  (
    {
      action = LinkActionType.NAVIGATION,
      decoration = TextDecorationType.AUTO,
      alignCenter = false,
      disabled = false,
      color: colorLinkProp,
      textVariant: textVariantProp,
      role: roleProp,
      variant,
      ctv,
      ...props
    }: ILink,
    ref: React.ForwardedRef<HTMLElement> | undefined | null
  ): JSX.Element => {
    const { LINK: genericLinkComponent } = useGenericComponents();
    const { role } = disabledLink(disabled, roleProp);
    const ariaDisabled = disabled || undefined;
    const actionStyles = useStyles<LinkPropsStylesType>(STYLES_NAME.LINK, action, ctv?.[action]);
    const styles = (variant && actionStyles?.[variant]) || {};

    const isInline = action === LinkActionType.INLINE;
    const textDecoration = isInline ? TextDecorationType.UNDERLINE : decoration;
    const textVariant = textVariantProp ?? styles.container?.font_variant;
    const weight = props.weight || styles.container?.font_weight;
    const color = colorLinkProp || styles.font_color || styles.container?.color;

    const { state, setRef } = useManageState({
      states: Object.values(LinkStateType) as States,
      ref,
      disabled,
    });

    return (
      <LinkStandAlone
        {...props}
        ref={setRef}
        action={action}
        alignCenter={alignCenter}
        aria-disabled={ariaDisabled}
        color={color}
        component={genericLinkComponent}
        decoration={textDecoration}
        role={role}
        state={state as unknown as LinkStateType}
        styles={styles}
        textVariant={textVariant}
        weight={weight}
      />
    );
  }
);
LinkComponent.displayName = 'LinkComponent';

const LinkBoundary = (
  props: ILink,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <LinkStandAlone {...(props as unknown as ILinkStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <LinkComponent {...props} ref={ref} />
  </ErrorBoundary>
);

export const Link = React.forwardRef(LinkBoundary);
