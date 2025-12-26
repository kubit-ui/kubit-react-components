import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { TextCountStandAlone } from './textCountStandAlone';
import type { TextCountProps } from './types/textCount';

const TEXT_COUNT = 'TEXT_COUNT';

/**
 * A component that creates a counter of characters.
 * It supports custom CSS classes and forwards a ref to the inner div.
 *
 * @param {ForwardedRef<HTMLDivElement>} ref - The forwarded ref for the inner div.
 * @returns {JSX.Element} The rendered text count component.
 */
export const TextCount = forwardRef<HTMLDivElement, TextCountProps>(
  ({ additionalClasses, variant, ...props }, ref): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: TEXT_COUNT,
      variant,
    });
    return <TextCountStandAlone {...props} ref={ref} cssClasses={cssClasses} />;
  },
);
