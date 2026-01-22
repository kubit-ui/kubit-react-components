import { type CSSProperties, type RefObject, forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { LinkStandAloneProps } from './types/link';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

/**
 * Standalone link component for rendering customizable hyperlinks or link-style elements.
 *
 * This component renders a link with optional icon, custom color, decoration, and states.
 * It can be rendered as an anchor, button, or text element depending on configuration.
 *
 * @example
 * ```tsx
 * <LinkStandAlone
 *   href="/page"
 *   icon={<LinkIcon />}
 *   color="primary"
 * >
 *   Click here
 * </LinkStandAlone>
 * ```
 */
export const LinkStandAlone = forwardRef<HTMLElement, LinkStandAloneProps>(
  (
    {
      children,
      color,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component = Text as any,
      cssClasses,
      cssTextClasses,
      decoration,
      disabled,
      draggable,
      icon,
      iconPosition,
      id,
      onClick,
      rel,
      role,
      target,
      url,
      weight,
      ...props
    },
    ref,
  ) => {
    const handleClick = disabled ? undefined : onClick;
    const linkUrl = disabled ? undefined : url;
    const containerClassName = classNames(
      cssClasses?.link,
      cssTextClasses?.text,
    );
    const iconContainerStyle: CSSProperties = {
      color,
      flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
      fontWeight: weight,
      textDecoration: decoration,
    };
    const style: CSSProperties = {
      color,
      fontWeight: weight,
      textDecoration: decoration,
    };

    const customProps = pickCustomAttributes(props);

    return (
      <CustomComponent
        ref={ref as unknown as RefObject<HTMLElement>}
        className={containerClassName}
        component={component}
        data-testid="link"
        disabled={disabled}
        draggable={draggable}
        id={id}
        rel={rel}
        role={role}
        style={style}
        target={target}
        url={linkUrl}
        onClick={handleClick}
        {...customProps}
      >
        {icon ? (
          <span
            className={cssClasses?.labelandiconcontainer}
            style={iconContainerStyle}
          >
            <ElementOrIcon key="icon" className={cssClasses?.icon} {...icon} />
            {children}
          </span>
        ) : (
          <span
            // className={cssClasses?.childrencontainer}
            style={iconContainerStyle}
          >
            {children}
          </span>
        )}
      </CustomComponent>
    );
  },
);
