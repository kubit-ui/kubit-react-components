//vendors
import * as React from 'react';

import { States, useManageState } from '@/hooks';
//hooks
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { ButtonType } from '../button/types';
//components
import { QuickButtonStandAlone } from './quickButtonStandAlone';
import {
  IQuickButton,
  IQuickButtonStandAlone,
  QuickButtonState,
  QuickButtonVariantStylesType,
} from './types';

//types

const QUICK_BUTTON_STYLES = 'QUICK_BUTTON_STYLES';

const QuickButtonComponent = React.forwardRef(
  <V extends string | unknown>(
    { type = ButtonType.BUTTON, disabled = false, ctv, ...props }: IQuickButton<V>,
    ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<QuickButtonVariantStylesType, V>(
      QUICK_BUTTON_STYLES,
      props.variant,
      ctv
    );

    const { state, setRef } = useManageState({
      states: Object.values(QuickButtonState) as States,
      ref: ref as React.ForwardedRef<HTMLElement> | undefined | null,
      disabled,
    });

    return (
      <QuickButtonStandAlone
        {...props}
        ref={setRef as React.ForwardedRef<HTMLButtonElement>}
        state={state as unknown as QuickButtonState}
        styles={styles}
        type={type}
      />
    );
  }
);
QuickButtonComponent.displayName = 'QuickButtonComponent';

const QuickButtonBoundary = <V extends string | unknown>(
  props: IQuickButton<V>,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <QuickButtonStandAlone {...(props as unknown as IQuickButtonStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <QuickButtonComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * QuickButton component is a button component that can be used to create a button.
 * @param {React.PropsWithChildren<IQuickButton<V>>} props
 * @returns {JSX.Element}
 */
const QuickButton = React.forwardRef(QuickButtonBoundary) as <V>(
  props: React.PropsWithChildren<IQuickButton<V>> & {
    ref?: React.ForwardedRef<HTMLButtonElement> | undefined | null;
  }
) => ReturnType<typeof QuickButtonBoundary>;

export { QuickButton };
