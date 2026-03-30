import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { BreadcrumbsProps } from './types/breadcrumbs';

import { BreadcrumbsStandAlone } from './breadcrumbsStandAlone';

/**
 * Breadcrumbs component for displaying navigation paths.
 *
 * This component renders a breadcrumb navigation bar, allowing users to understand
 * and navigate the hierarchy of the current page. It is useful for improving
 * navigation and user experience in multi-level applications.
 *
 * Accepts a generic type parameter `<Variant extends string>` to allow for custom
 * variant values, enabling flexible theming and type safety for the `variant` prop.
 *
 * @example
 * ```tsx
 * <BreadCrumbs items={[{ label: "Home", href: "/" }, { label: "Section" }]} />
 *
 * // With a custom variant type:
 * type MyVariant = "primary" | "secondary";
 * <BreadCrumbs<MyVariant> variant="primary" items={[{ label: "Home" }]} />
 * ```
 *
 * Internally, this component delegates rendering to {@link BreadcrumbsStandAlone}.
 */
export const BreadCrumbs = forwardRef(
  <Variant extends string = string>(
    { additionalClasses, variant, ...props }: BreadcrumbsProps<Variant>,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'BREADCRUMBS',
      variant,
    });

    return (
      <BreadcrumbsStandAlone {...props} ref={ref} cssClasses={cssClasses} />
    );
  },
);
