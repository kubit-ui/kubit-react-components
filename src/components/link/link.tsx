/* eslint-disable complexity */
import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { States, useManageState } from '@/hooks/useManageState/useManageState';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { useStylesV2 } from '@/hooks/useStyles/useStylesV2';
import { useGenericComponents } from '@/provider/genericComponents/genericComponentsProvider';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { TextDecorationType } from '../text/types/decoration';
import { TextVariantStylesType } from '../text/types/textTheme';
import { disabledLink } from './helpers/disabled';
import { LinkStandAlone } from './linkStandAlone';
import { LinkActionType } from './types/action';
import { ILink, ILinkStandAlone } from './types/link';
import { LinkPropsStylesType } from './types/linkTheme';
import { LinkStateType } from './types/state';

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
