import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { useGenericComponents } from '../../provider/genericComponents/genericComponentsProvider';
// styles
import { MessageStandAlone } from './messageStandAlone';
import { IMessageControlled, IMessageStandAlone } from './types/message';
import { MessagePropsThemeType } from './types/messageTheme';

const MessageControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { ctv, ...props }: IMessageControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<MessagePropsThemeType, V>(STYLES_NAME.MESSAGE, props.variant, ctv);

    const { LINK } = useGenericComponents();

    return <MessageStandAlone ref={ref} linkComponent={LINK} styles={styles} {...props} />;
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
