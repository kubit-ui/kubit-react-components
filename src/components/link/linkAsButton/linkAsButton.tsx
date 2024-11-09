import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { States, useManageState } from '@/hooks/useManageState/useManageState';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { useGenericComponents } from '@/provider/genericComponents/genericComponentsProvider';

import { ErrorBoundary } from '../../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../../provider/errorBoundary/fallbackComponent';
import { ButtonSizePropsType, ButtonStateKeyOfType } from '../../button/types/buttonTheme';
import { ButtonStateType } from '../../button/types/state';
import { ILinkAsButton, ILinkAsButtonStandAlone } from '../types/link';
import { LinkAsButtonStandAlone } from './linkAsButtonStandAlone';

export const LinkAsButtonComponent = React.forwardRef(
  (
    { variant, size, ...props }: ILinkAsButton,
    ref: React.ForwardedRef<HTMLElement> | undefined
  ): JSX.Element => {
    const styles = useStyles<ButtonStateKeyOfType>(STYLES_NAME.BUTTON, variant);
    const sizeStyles = useStyles<ButtonSizePropsType>(STYLES_NAME.BUTTON, size);
    const { LINK: genericLinkComponent } = useGenericComponents();

    const { state, setRef } = useManageState({
      states: Object.values(ButtonStateType) as States,
      ref,
      disabled: props.disabled,
    });

    return (
      <LinkAsButtonStandAlone
        {...props}
        ref={setRef}
        component={genericLinkComponent}
        sizeStyles={sizeStyles}
        state={state as unknown as ButtonStateType}
        styles={styles}
      />
    );
  }
);
LinkAsButtonComponent.displayName = 'LinkAsButtonComponent';

const LinkAsButtonBoundary = (
  props: ILinkAsButton,
  ref: React.ForwardedRef<HTMLElement> | undefined
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <LinkAsButtonStandAlone {...(props as unknown as ILinkAsButtonStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <LinkAsButtonComponent {...props} ref={ref} />
  </ErrorBoundary>
);

export const LinkAsButton = React.forwardRef(LinkAsButtonBoundary);
