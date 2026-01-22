import type { BreadcrumbProps } from '../../types/breadcrumbs';

/**
 * Utility function to truncate breadcrumb names based on character limit and overflow state.
 *
 * This function returns a new breadcrumb object with its `name` property truncated and an ellipsis appended
 * if the name exceeds the specified character limit and the breadcrumb should be modified (e.g., when overflowing).
 * It helps ensure breadcrumb navigation remains readable and compact in limited space scenarios.
 *
 * @example
 * ```typescript
 * const crumb = { name: "VeryLongBreadcrumbName", href: "/" };
 * const result = crumbMaxCharName(crumb, 10, true, false);
 * // result.name === "VeryLongBr..."
 * ```
 *
 * @param crumb - Breadcrumb object to process.
 * @param charLimit - Maximum number of characters allowed for the breadcrumb name.
 * @param overflow - Whether the breadcrumb bar is overflowing.
 * @param lastCrumb - Whether this is the last breadcrumb in the list.
 * @returns A new breadcrumb object with the name truncated if necessary.
 */
export function crumbMaxCharName(
  crumb: BreadcrumbProps,
  charLimit: number,
  overflow: boolean,
  lastCrumb: boolean,
): BreadcrumbProps {
  const shouldModify = !lastCrumb || (lastCrumb && overflow);

  if (crumb.name.length > charLimit && shouldModify) {
    return {
      ...crumb,
      name: crumb.name.slice(0, charLimit) + '...',
    };
  }
  return crumb;
}
