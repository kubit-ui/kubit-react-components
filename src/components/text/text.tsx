import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { TextStandAlone } from './textStandAlone';
import type { TextProps } from './types/text';

/**
 * Text is a versatile component that renders text content with consistent styling.
 * It supports custom CSS classes and forwards a ref to the inner paragraph element.
 *
 * @template V - The type of the variant for the text component.
 * @returns {JSX.Element | null} The rendered text component or null if no children are provided.
 */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    { additionalClasses, children, variant, ...props },
    ref,
  ): JSX.Element | null => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'TEXT',
      variant,
    });

    if (!children) {
      return null;
    }

    return (
      <TextStandAlone {...props} ref={ref} cssClasses={cssClasses}>
        {children}
      </TextStandAlone>
    );
  },
);
