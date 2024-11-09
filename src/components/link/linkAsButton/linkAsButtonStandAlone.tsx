import React from 'react';

import { ButtonStyled } from '@/components/button/button.styled';
import { ButtonStandAloneStructure } from '@/components/button/buttonStandAlone';
import { Text } from '@/components/text/text';

import { ButtonStateType } from '../../button/types/state';
import { TextDecorationType } from '../../text/types/decoration';
import { ILinkAsButtonStandAlone } from '../types/link';
import { LinkAsButtonWrapperStyled } from './linkAsButton.styled';

export const LinkAsButtonStandAloneComponent = (
  {
    dataTestId = 'link-as-button',
    children,
    url,
    component,
    target,
    role,
    onClick,
    ...props
  }: ILinkAsButtonStandAlone,
  ref: React.ForwardedRef<HTMLElement> | undefined
): JSX.Element => {
  return (
    // Apply button border radius to the link when focus-visible
    <LinkAsButtonWrapperStyled
      $fullWidth={props.fullWidth}
      $sizeStyles={props.sizeStyles}
      $state={props.state}
      $styles={props.styles}
      data-testid={dataTestId}
    >
      <Text
        ref={ref}
        aria-label={props['aria-label']}
        component={component}
        decoration={TextDecorationType.NONE}
        isDisabled={props.state === ButtonStateType.DISABLED}
        role={role}
        target={target}
        url={url}
        onClick={onClick}
      >
        <ButtonStyled
          as="span"
          {...props}
          $fullWidth={props.fullWidth}
          $iconPosition={props.iconPosition}
          $sizeStyles={props.sizeStyles}
          $state={props.state}
          $styles={props.styles}
          aria-label=""
        >
          <ButtonStandAloneStructure {...props}>{children}</ButtonStandAloneStructure>
        </ButtonStyled>
      </Text>
    </LinkAsButtonWrapperStyled>
  );
};

export const LinkAsButtonStandAlone = React.forwardRef(LinkAsButtonStandAloneComponent);
