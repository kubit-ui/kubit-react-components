import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

// styles
import { MessageStandAlone } from './messageStandAlone';
import { IMessageControlled, IMessageStandAlone, MessagePropsThemeType } from './types';

const MessageControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { ctv, ...props }: IMessageControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<MessagePropsThemeType, V>(STYLES_NAME.MESSAGE, props.variant, ctv);

    return <MessageStandAlone ref={ref} styles={styles} {...props} />;
  }
);
MessageControlledComponent.displayName = 'MessageControlledComponent';

const MessageBoundary = <V extends string | unknown>(
  props: IMessageControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <MessageStandAlone {...(props as unknown as IMessageStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <MessageControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const MessageControlled = React.forwardRef(MessageBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IMessageControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof MessageBoundary>;

export { MessageControlled };
