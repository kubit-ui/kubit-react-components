import { type LegacyRef, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type {
  GenericImageProps,
  GenericLinkProps,
} from './types/genericComponentsProvider';

/**
 * Default Link component implementation.
 * Renders a standard HTML anchor element with proper accessibility attributes.
 * Used as the fallback when no custom Link component is provided.
 *
 * @param props - Link component props
 * @param ref - Forwarded ref to the anchor element
 * @returns Standard anchor element with all provided props
 */
const Link = forwardRef(function Link(
  {
    children,
    className,
    draggable,
    id,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    rel,
    role,
    target,
    url,
    ...props
  }: GenericLinkProps,
  ref: unknown,
) {
  const customProps = pickCustomAttributes(props);
  return (
    <a
      {...customProps}
      ref={ref as LegacyRef<HTMLAnchorElement> | undefined}
      aria-current={props['aria-current']}
      aria-describedby={props['aria-describedby']}
      aria-disabled={props['aria-disabled']}
      aria-label={props['aria-label']}
      aria-labelledby={props['aria-labelledby']}
      className={className}
      data-testid={props['data-testid']}
      draggable={draggable}
      href={url}
      id={id}
      rel={rel}
      role={role}
      target={target}
      onClick={onClick}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {}
    </a>
  );
});

/**
 * Default Image component implementation.
 * Renders a standard HTML img element with proper accessibility.
 * Used as the fallback when no custom Image component is provided.
 *
 * @param props - Image component props (all standard img attributes)
 * @param ref - Forwarded ref to the img element
 * @returns Standard img element with all provided props and guaranteed alt attribute
 */
const Image = forwardRef(function Image(
  props: GenericImageProps,
  ref: unknown,
) {
  const { alt } = props;
  return (
    <img
      ref={ref as LegacyRef<HTMLImageElement> | undefined}
      {...props}
      alt={alt || ''}
    />
  );
});

/**
 * Default implementations for generic components.
 * Provides standard HTML-based Link and Image components.
 * These are used when the application doesn't provide custom implementations.
 *
 * @example
 * ```tsx
 * import { defaultGenericComponents } from './defaultGenericComponents';
 *
 * <GenericComponentsProvider value={defaultGenericComponents}>
 *   <App />
 * </GenericComponentsProvider>
 * ```
 */
export const defaultGenericComponents = {
  IMAGE: Image,
  LINK: Link,
};
