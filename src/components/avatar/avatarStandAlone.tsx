import React from 'react';

import { Dot } from '@/components/dot/dot';
import { Link } from '@/components/link/link';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { pickAriaProps } from '@/utils/aria/aria';

import { ButtonType } from '../button/types/type';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { AvatarDotStyled, AvatarLinkStyled, AvatarStyled } from './avatar.styled';
import { IAvatarStandAlone } from './types/avatar';
import { AvatarBackgroundColor, AvatarContentType } from './types/content';

export const AvatarStandAloneComponent = (
  {
    contentType,
    backgroundColor = AvatarBackgroundColor.COLOR_DEFAULT,
    image,
    onClick,
    styles,
    dataTestId = 'avatar',
    maxLengthInitials = 2,
    ...props
  }: IAvatarStandAlone,
  ref: React.ForwardedRef<HTMLDivElement | HTMLButtonElement>
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  const drawContent = () => (
    <>
      {props.dot?.number && (
        <AvatarDotStyled>
          <Dot {...props.dot} />
        </AvatarDotStyled>
      )}
      {contentType === AvatarContentType.WITH_ICON && (
        <ElementOrIcon
          color={styles?.containerBackgroundColor?.[backgroundColor]?.contentColor}
          customIconStyles={styles?.avatar}
          {...props.icon}
        />
      )}
      {contentType === AvatarContentType.WITH_INITIALS && (
        <Text
          aria-hidden={true}
          color={styles?.containerBackgroundColor?.[backgroundColor]?.contentColor}
          component={TextComponentType.SPAN}
          customTypography={styles?.initials}
          {...props.initials}
        >
          {props.initials?.content?.substring(0, maxLengthInitials)}
        </Text>
      )}
    </>
  );
  return props.link ? (
    <AvatarLinkStyled
      ref={ref as React.ForwardedRef<HTMLDivElement>}
      backgroundColor={backgroundColor}
      data-testid={dataTestId}
      image={image}
      styles={styles}
    >
      <Link aria-label={props['aria-label']} {...props.link}>
        {drawContent()}
      </Link>
    </AvatarLinkStyled>
  ) : (
    <AvatarStyled
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      as={onClick ? 'button' : 'div'}
      backgroundColor={backgroundColor}
      data-testid={dataTestId}
      image={image}
      styles={styles}
      type={onClick && ButtonType.BUTTON}
      onClick={onClick}
      {...ariaProps}
    >
      {drawContent()}
    </AvatarStyled>
  );
};

export const AvatarStandAlone = React.forwardRef(AvatarStandAloneComponent);
