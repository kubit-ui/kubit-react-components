import React from 'react';

// styles
import { MessageControlled } from './messageControlled';
import { IMessageUnControlled } from './types/message';

const MessageUnControlledComponent = <V extends string | unknown>(
  { defaultOpen = true, ...props }: IMessageUnControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [open, setOpen] = React.useState(defaultOpen);

  const handleCloseButton: React.MouseEventHandler<HTMLButtonElement> = event => {
    setOpen(false);
    props.closeIcon?.onClick?.(event);
  };

  return (
    <MessageControlled
      {...props}
      ref={ref}
      closeIcon={props.closeIcon ? { ...props.closeIcon, onClick: handleCloseButton } : undefined}
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

export { MessageUnControlled as Message };
