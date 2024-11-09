import React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { ConfirmationMessageStandAlone } from './confirmationMessageStandAlone';
import { IConfirmationMessage, IConfirmationMessageStandAlone } from './types/confirmationMessage';
import { ConfirmationMessagePropsStateStylesType } from './types/confirmationMessageTheme';
import { ConfirmationMessageStateType } from './types/state';

const CONFIRMATION_MESSAGE_STYLES = 'CONFIRMATION_MESSAGE_STYLES';

const ConfirmationMessageComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      state = ConfirmationMessageStateType.SUCCESS,
      variant,
      ctv,
      ...props
    }: IConfirmationMessage<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<ConfirmationMessagePropsStateStylesType, V>(
      CONFIRMATION_MESSAGE_STYLES,
      variant,
      ctv
    );

    return <ConfirmationMessageStandAlone {...props} ref={ref} stylesState={styles[state]} />;
  }
);
ConfirmationMessageComponent.displayName = 'ConfirmationMessageComponent';

const ConfirmationMessageBoundary = <V extends string | unknown>(
  props: IConfirmationMessage<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ConfirmationMessageStandAlone
          {...(props as unknown as IConfirmationMessageStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <ConfirmationMessageComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release.
 */
const ConfirmationMessage = React.forwardRef(ConfirmationMessageBoundary) as <
  V extends string | unknown,
>(
  props: IConfirmationMessage<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { ConfirmationMessage };
