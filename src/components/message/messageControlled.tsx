import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useGenericComponents } from '@/lib/provider/genericComponentsProvider/genericComponentsProvider';

import type { MessageProps } from './types/message';

import { MessageStandAlone } from './messageStandAlone';

export const MessageControlled = forwardRef<
  HTMLDivElement,
  MessageProps<string>
>(({ additionalClasses, variant, ...props }, ref) => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'MESSAGE',
    variant,
  });

  const { LINK } = useGenericComponents();

  return (
    <MessageStandAlone
      ref={ref}
      cssClasses={cssClasses}
      linkComponent={LINK}
      {...props}
    />
  );
});
