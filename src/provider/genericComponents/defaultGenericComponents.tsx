import React from 'react';

import { IGenericImage, IGenericLink } from './genericComponents.type';

const Link = React.forwardRef(function Link(props: IGenericLink, ref: unknown) {
  return (
    <a
      ref={ref as React.LegacyRef<HTMLAnchorElement> | undefined}
      aria-describedby={props['aria-describedby']}
      aria-disabled={props['aria-disabled']}
      aria-label={props['aria-label']}
      className={props.className}
      data-testid={props.dataTestId}
      draggable={props.draggable}
      href={props.url}
      role={props.role}
      target={props.target}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </a>
  );
});

const Image = React.forwardRef(function Image(props: IGenericImage, ref: unknown) {
  return (
    <img
      ref={ref as React.LegacyRef<HTMLImageElement> | undefined}
      {...props}
      alt={props.alt || ''}
    />
  );
});

export const defaultGenericComponents = {
  LINK: Link,
  IMAGE: Image,
};
