import { forwardRef, isValidElement } from 'react';

import type { ElementOrIconProps } from './types/elementOrIcon';

import { IconBasic } from '../icon/icon';
import { IconHost as Icon } from '../icon/iconHost';

/**
 * Renders either an icon (by name) or a custom React element.
 *
 * This component is useful when you want to display an icon by its string name,
 * or render a custom React element (such as an SVG or a component) in its place.
 * If no icon is provided, it renders nothing.
 *
 * If the `basic` prop is true, it uses the {@link IconBasic} component for rendering.
 * Otherwise, it uses {@link IconHost}. If a React element is passed as `icon`, it is rendered directly.
 *
 * @example
 * ```tsx
 * // Render a named icon
 * <ElementOrIcon icon="check" />
 *
 * // Render a custom element
 * <ElementOrIcon icon={<MyCustomIcon />} />
 * ```
 */
export const ElementOrIcon = forwardRef<HTMLSpanElement, ElementOrIconProps>(
  ({ basic = false, icon, ...rest }, ref): JSX.Element | null => {
    if (!icon) {
      return null;
    }

    if (typeof icon === 'string') {
      return basic ? (
        <IconBasic {...rest} ref={ref} icon={icon} />
      ) : (
        <Icon {...rest} ref={ref} icon={icon} />
      );
    }

    // Only render valid React elements
    return isValidElement(icon) ? icon : null;
  },
);
