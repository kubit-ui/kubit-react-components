import { type ForwardedRef, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { AvatarStandAloneProps } from './types/avatar';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import { DrawContent } from './fragments/drawContent';

/**
 * Standalone avatar component for displaying a user or entity avatar with flexible content.
 *
 * `AvatarStandAlone` supports rendering an icon, initials, or image as the avatar content.
 * It can be rendered as a link, button, or div, and supports custom background colors, status dots, and accessibility features.
 * Use this component when you need a low-level, highly customizable avatar element, or as the base for higher-level avatar components.
 *
 * @example
 * ```tsx
 * <AvatarStandAlone initials="AB" />
 * ```
 */
export const AvatarStandAlone = forwardRef<
  HTMLDivElement | HTMLButtonElement,
  AvatarStandAloneProps
>(
  (
    {
      backgroundColor = 'color-default',
      contentType,
      cssClasses,
      dot,
      icon,
      image,
      initials,
      link,
      linkComponent = 'a',
      maxLengthInitials = 2,
      onClick,
      ...props
    },
    ref,
  ): JSX.Element => {
    const customAttributes = {
      'data-background-type': backgroundColor,
      'data-content-type': contentType,
    };
    const customProps = pickCustomAttributes({
      ...props,
      ...customAttributes,
    });
    const avatarStyle = image
      ? { backgroundImage: `url(${image})` }
      : undefined;

    if (link) {
      return (
        <CustomComponent
          ref={ref as ForwardedRef<HTMLDivElement>}
          className={cssClasses?.avatar}
          component={linkComponent}
          data-testid="avatar"
          style={avatarStyle}
          {...customProps}
          {...link}
        >
          <DrawContent
            contentType={contentType}
            cssClasses={cssClasses}
            customAttributes={customAttributes}
            dot={dot}
            icon={icon}
            initials={initials}
            maxLengthInitials={maxLengthInitials}
          />
        </CustomComponent>
      );
    }
    return (
      <CustomComponent
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={cssClasses?.avatar}
        component={onClick ? 'button' : 'div'}
        data-testid="avatar"
        style={avatarStyle}
        type={onClick && 'button'}
        onClick={onClick}
        {...customProps}
      >
        <DrawContent
          contentType={contentType}
          cssClasses={cssClasses}
          customAttributes={customAttributes}
          dot={dot}
          icon={icon}
          initials={initials}
          maxLengthInitials={maxLengthInitials}
        />
      </CustomComponent>
    );
  },
);
