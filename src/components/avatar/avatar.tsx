import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { AvatarStandAlone } from './avatarStandAlone';
import { AvatarContentType, AvatarSizeStylesType, IAvatar, IAvatarStandAlone } from './types/';

const AvatarComponent = React.forwardRef(
  <S extends string | undefined>(
    { icon, initials, image, size, cts, ...props }: IAvatar<S>,
    ref: React.ForwardedRef<HTMLDivElement | HTMLButtonElement>
  ): JSX.Element => {
    const styles = useStyles<AvatarSizeStylesType, S>(STYLES_NAME.AVATAR, size, cts);

    let contentType = AvatarContentType.WITH_ICON;

    if (icon) {
      contentType = AvatarContentType.WITH_ICON;
    }
    if (initials) {
      contentType = AvatarContentType.WITH_INITIALS;
    }
    if (image) {
      contentType = AvatarContentType.WITH_IMAGE;
    }

    const contentStyles = styles[contentType];

    return (
      <AvatarStandAlone
        {...props}
        ref={ref}
        contentType={contentType}
        icon={icon}
        image={image}
        initials={initials}
        styles={contentStyles}
      />
    );
  }
);
AvatarComponent.displayName = 'AvatarComponent';

const AvatarBoundary = <S extends string | undefined>(
  props: IAvatar<S>,
  ref: React.ForwardedRef<HTMLDivElement | HTMLButtonElement>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <AvatarStandAlone {...(props as unknown as IAvatarStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <AvatarComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * Avatar component is a component that shows an icon, image or initials.
 * @param {React.PropsWithChildren<IAvatar<S>>} props
 * @returns {JSX.Element}
 * @example
 * <Avatar
 *  dataTestId="avatar"
 * icon={<Icon name="user" />}
 * initials="JD"
 * image="https://www.w3schools.com/howto/img_avatar.png"
 * size="M"
 * />
 */
const Avatar = React.forwardRef(AvatarBoundary) as <S extends string | unknown>(
  props: React.PropsWithChildren<IAvatar<S>> & {
    ref?: React.ForwardedRef<HTMLDivElement | HTMLButtonElement> | undefined | null;
  }
) => ReturnType<typeof AvatarBoundary>;

export { Avatar };
