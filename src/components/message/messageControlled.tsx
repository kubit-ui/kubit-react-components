import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useGenericComponents } from '@/lib/provider/genericComponentsProvider/genericComponentsProvider';

import type { MessageProps } from './types/message';

import { MessageStandAlone } from './messageStandAlone';

/**
 * MessageControlled component for displaying notification messages.
 *
 * This component renders styled messages with icons, close buttons, and optional
 * action links. Useful for alerts, notifications, success/error messages, and
 * informational banners. State is controlled externally via props.
 *
 * @example
 * ```tsx
 * <MessageControlled
 *   variant="success"
 *   title="Success!"
 *   description="Your changes have been saved."
 *   onClose={() => {}}
 * />
 * ```
 */
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
