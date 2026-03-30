import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useGenericComponents } from '@/lib/provider/genericComponentsProvider/genericComponentsProvider';

import type { AvatarProps } from './types/avatar';
import type { AvatarContentType } from './types/content';

import { AvatarStandAlone } from './avatarStandAlone';

/**
 * Avatar component for displaying a customizable user avatar.
 *
 * The `Avatar` component determines its content type (icon, initials, or image) based on the provided props.
 * It supports custom sizes via a generic type parameter, and can be themed or extended as needed.
 * Use this component to represent users or entities visually in your application.
 *
 * This component accepts a generic type parameter `<Size extends string | undefined>` to allow for custom size values,
 * enabling flexible sizing and theming. For example:
 *
 * @example
 * ```tsx
 * <Avatar image="user.jpg" size="md" />
 *
 * // With a custom size type:
 * type MySize = "xs" | "md" | "xl";
 * <Avatar<MySize> initials="AB" size="xl" />
 * ```
 */
export const Avatar = forwardRef(
  <Size extends string | undefined>(
    {
      additionalClasses,
      icon,
      image,
      initials,
      size,
      ...props
    }: AvatarProps<Size>,
    ref: ForwardedRef<HTMLDivElement | HTMLButtonElement>,
  ): JSX.Element => {
    const { LINK } = useGenericComponents();

    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'AVATAR',
      variant: size,
    });

    const contentType: AvatarContentType = image
      ? 'with-images'
      : initials
        ? 'with-initials'
        : 'with-icon';

    return (
      <AvatarStandAlone
        {...props}
        ref={ref}
        contentType={contentType}
        cssClasses={cssClasses}
        icon={icon}
        image={image}
        initials={initials}
        linkComponent={LINK}
      />
    );
  },
);
