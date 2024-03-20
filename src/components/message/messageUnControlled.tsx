import * as React from 'react';

// styles
import { MessageControlled } from './messageControlled';
import { IMessageUnControlled } from './types';

const MessageUnControlledComponent = <V extends string | unknown>(
  { defaultOpen = true, ...props }: IMessageUnControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [open, setOpen] = React.useState(defaultOpen);

  const handleCloseButton = () => {
    setOpen(false);
  };

  return (
    <MessageControlled
      {...props}
      ref={ref}
      closeIcon={{ ...props.closeIcon, onClick: handleCloseButton }}
      open={open}
    />
  );
};

const MessageUnControlled = React.forwardRef(MessageUnControlledComponent) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<IMessageUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof MessageUnControlledComponent>;

export { MessageUnControlled };
