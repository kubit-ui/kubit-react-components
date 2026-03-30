import { forwardRef, isValidElement } from 'react';

import { Text } from '@/components/text/text';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { CardStandAloneProps } from './types/card';

/**
 * Standalone card component for rendering a section with optional header, content and footer areas.
 *
 * This component displays a styled card container with three optional sections:
 * - header: Can be text or any React node
 * - content: Can be text or any React node
 * - footer: Can be text or any React node
 *
 * Supports interactive states like hover and selected, making it useful for
 * selectable cards, clickable items, or informational panels.
 *
 * This component accepts a generic type parameter `<Variant extends string>` to allow for custom variant values,
 * enabling flexible theming and styling of the card.
 *
 * @example
 * ```tsx
 * <CardStandAlone
 *   header={{ content: "Card Title" }}
 *   content="Card content goes here"
 *   footer={{ content: "Footer text" }}
 * />
 *
 * // With a custom variant type:
 * type MyVariant = "primary" | "secondary";
 * <CardStandAlone<MyVariant>
 *   header="Primary Card"
 *   content={<div>Custom content</div>}
 *   variant="primary"
 *   state="selected"
 * />
 * ```
 */
export const CardStandAlone = forwardRef(
  (
    {
      content,
      cssClasses,
      footer,
      header,
      onClick,
      onMouseEnter,
      onMouseLeave,
      state,
      ...props
    }: CardStandAloneProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const customAttributes = { 'data-state': state };
    const customProps = pickCustomAttributes(props);

    const renderSection = (
      section: CardStandAloneProps['header'],
      className?: string,
    ) => {
      if (!section) {
        return null;
      }

      if (isValidElement(section)) {
        return <div className={className}>{section}</div>;
      }

      return (
        <div className={className}>
          <Text
            additionalClasses={{ text: className }}
            {...processTextProp(section)}
          />
        </div>
      );
    };

    const isInteractive = Boolean(onClick);

    const cardProps = isInteractive
      ? {
          onClick,
          onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>);
            }
          },
          onMouseEnter,
          onMouseLeave,
          role: 'button' as const,
          tabIndex: 0,
        }
      : {
          onMouseEnter,
          onMouseLeave,
        };

    return (
      <div
        ref={ref}
        className={cssClasses?.card}
        data-testid="card"
        {...customAttributes}
        {...customProps}
        {...cardProps}
      >
        {renderSection(header, cssClasses?.header)}
        {renderSection(content, cssClasses?.content)}
        {renderSection(footer, cssClasses?.footer)}
      </div>
    );
  },
);
