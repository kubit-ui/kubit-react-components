import { type LegacyRef, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type {
  GenericImageProps,
  GenericLinkProps,
} from './types/genericComponentsProvider';

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
export const defaultGenericComponents = {
  IMAGE: Image,
  LINK: Link,
};
