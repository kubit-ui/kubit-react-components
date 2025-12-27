import { type ForwardedRef, type PropsWithChildren, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { ContainerProps } from './types/container';

import { ContainerStandAlone } from './containerStandAlone';

/**
 * Container component for grouping content with consistent styling and structure.
 *
 * This component wraps its children in a styled container, optionally displaying a header/title.
 * It is useful for organizing related content, settings, or sections in a visually consistent way.
 * Supports custom CSS classes and theming via variants.
 *
 * Internally, it computes CSS classes using a custom hook and delegates rendering to {@link ContainerStandAlone}.
 *
 * This component accepts a generic type parameter `<Variant extends string>` to allow for custom variant values,
 * enabling flexible theming and styling.
 *
 * @example
 * ```tsx
 * <Container title={{ content: "Section Title" }}>
 *   Section content goes here.
 * </Container>
 *
 * // With a custom variant type:
 * type MyVariant = "primary" | "secondary";
 * <Container<MyVariant> title={{ content: "Primary Section" }} variant="primary">
 *   Primary section content.
 * </Container>
 * ```
 */
export const Container = forwardRef(
  <Variant extends string = string>(
    {
      additionalClasses,
      children,
      variant,
      ...props
    }: PropsWithChildren<ContainerProps<Variant>>,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'CONTAINER',
      variant,
    });

    return (
      <ContainerStandAlone ref={ref} {...props} cssClasses={cssClasses}>
        {children}
      </ContainerStandAlone>
    );
  },
);
