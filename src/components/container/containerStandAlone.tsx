import { type PropsWithChildren, forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processText } from '@/lib/utils/process/processText/processText';

import type { ContainerStandAloneProps } from './types/container';

/**
 * Standalone container component for rendering a section with a header and content area.
 *
 * This component displays a styled container with a header (title) and a content area for children.
 * It is useful for grouping related content, settings, or form sections in a visually consistent way.
 * Supports custom CSS classes for flexible theming and styling.
 *
 * This component accepts a generic type parameter `<Variant extends string>` to allow for custom variant values,
 * enabling flexible theming and styling of the container.
 *
 * @example
 * ```tsx
 * <ContainerStandAlone title={{ content: "Section Title" }}>
 *   Section content goes here.
 * </ContainerStandAlone>
 *
 * // With a custom variant type:
 * type MyVariant = "primary" | "secondary";
 * <ContainerStandAlone<MyVariant> title={{ content: "Primary Section" }} variant="primary">
 *   Primary section content.
 * </ContainerStandAlone>
 * ```
 */
export const ContainerStandAlone = forwardRef(
  (
    {
      children,
      cssClasses,
      title,
      ...props
    }: PropsWithChildren<ContainerStandAloneProps>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const customProps = pickCustomAttributes(props);

    return (
      <div
        className={cssClasses?.container}
        data-testid="container"
        {...customProps}
      >
        <div className={cssClasses?.header}>
          <Text
            additionalClasses={{ text: cssClasses?.title }}
            {...processText(title)}
          />
        </div>
        <div ref={ref} className={cssClasses?.content}>
          {children}
        </div>
      </div>
    );
  },
);
