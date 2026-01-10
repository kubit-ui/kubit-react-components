import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { CardStandAlone } from './cardStandAlone';
import type { CardProps } from './types/card';

/**
 * Card component for displaying content in a structured container.
 *
 * This component wraps content in a styled card with optional header, content, and footer sections.
 * It is useful for organizing information, displaying items in a list, or creating selectable cards.
 * Supports interactive states (hover, selected) and custom theming via variants.
 *
 * All sections (header, content, footer) are optional and can accept either text or any React node.
 * The card can respond to user interaction through onClick, onMouseEnter, and onMouseLeave handlers.
 *
 * Internally, it computes CSS classes using a custom hook and delegates rendering to {@link CardStandAlone}.
 *
 * This component accepts a generic type parameter `<Variant extends string>` to allow for custom variant values,
 * enabling flexible theming and styling.
 *
 * @example
 * ```tsx
 * <Card
 *   header={{ content: "Card Title" }}
 *   content="This is the card content"
 *   footer={{ content: "Footer information" }}
 * />
 *
 * // With a custom variant type:
 * type MyVariant = "primary" | "secondary";
 * <Card<MyVariant>
 *   header="Primary Card"
 *   content={<div>Custom content</div>}
 *   variant="primary"
 *   state="selected"
 * />
 * ```
 */
export const Card = forwardRef(
  <Variant extends string = string>(
    { additionalClasses, variant, ...props }: CardProps<Variant>,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'CARD',
      variant,
    });

    return <CardStandAlone ref={ref} {...props} cssClasses={cssClasses} />;
  },
);
