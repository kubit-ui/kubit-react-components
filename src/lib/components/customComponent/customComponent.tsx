import { forwardRef } from 'react';

import type { CustomComponentProps } from './types/customComponent';

/**
 * Flexible custom component for rendering any HTML element or React component.
 *
 * This component allows you to render any valid HTML tag or custom React component,
 * making it useful for building polymorphic UI elements with consistent props and ref forwarding.
 * It supports custom class names and data attributes for styling and testing.
 *
 * This component accepts a generic type parameter `<C extends React.ElementType = 'span'>`
 * to allow for custom component types, enabling flexible polymorphic usage.
 *
 * @example
 * ```tsx
 * <CustomComponent className="my-class">Text</CustomComponent>
 *
 * // Render as a button:
 * <CustomComponent<'button'> component="button" type="button">
 *   Click me
 * </CustomComponent>
 * ```
 */

export const CustomComponent = forwardRef(
  <C extends React.ElementType = 'span'>(
    { children, className, component, ...props }: CustomComponentProps<C>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.ForwardedRef<any>,
  ) => {
    const Component = component || 'span';

    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  },
);
