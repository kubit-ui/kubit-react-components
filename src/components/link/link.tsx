import * as React from 'react';

import { TextDecorationType, TextVariantStylesType } from '@/components/text/types';
import { STYLES_NAME } from '@/constants';
import { States, useManageState, useStylesV2 } from '@/hooks';
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
      textVariant,
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
    const textStyles = useStylesV2<TextVariantStylesType>({
      styleName: STYLES_NAME.TEXT,
      variantName: textVariant,
      isOptional: true,
    });
    const styles = (variant && actionStyles?.[variant]) || {};

    const isInline = action === LinkActionType.INLINE;
    const textDecoration = isInline ? TextDecorationType.UNDERLINE : decoration;
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
        textStyles={textStyles}
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
