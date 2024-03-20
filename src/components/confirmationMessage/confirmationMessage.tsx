import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { ConfirmationMessageStandAlone } from './confirmationMessageStandAlone';
import {
  ConfirmationMessagePropsStateStylesType,
  ConfirmationMessageStateType,
  IConfirmationMessage,
  IConfirmationMessageStandAlone,
} from './types';

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

const ConfirmationMessage = React.forwardRef(ConfirmationMessageBoundary) as <
  V extends string | unknown,
>(
  props: IConfirmationMessage<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { ConfirmationMessage };
