import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { pickAriaProps } from '@/utils/aria/aria';

import { Text } from '../text';
// styles
import { LabelIconWrapper, TextStyledExtended } from './link.styled';
import { ILinkStandAlone, LinkStateType } from './types';

const LinkStandAloneComponent = (
  { url, ...props }: ILinkStandAlone,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element => {
  const ariaProps = pickAriaProps(props);

  return (
    <TextStyledExtended
      {...ariaProps}
      ref={ref}
      alignCenter={props.alignCenter}
      as={Text}
      color={props.color}
      component={props.component}
      dataTestId={props.dataTestId}
      decoration={props.decoration}
      draggable={props.draggable}
      isDisabled={props.state === LinkStateType.DISABLED}
      linkStyles={props.styles}
      target={props.target}
      textStyles={props.textStyles}
      weight={props.weight}
      //We have to make this because even it was disabled, you could access to onClick by arrows
      onClick={props.state !== LinkStateType.DISABLED ? props.onClick : undefined}
      {...(props.state !== LinkStateType.DISABLED && { url })}
      role={props.role}
    >
      {props.icon ? (
        <LabelIconWrapper iconPosition={props.iconPosition} styles={props.styles?.[props.state]}>
          {[
            <ElementOrIcon
              key="icon"
              color={props.styles?.[props.state]?.icon?.color}
              height={props.styles?.[props.state]?.icon?.height}
              width={props.styles?.[props.state]?.icon?.width}
              {...props.icon}
            />,
            props.children,
          ]}
        </LabelIconWrapper>
      ) : (
        props.children
      )}
    </TextStyledExtended>
  );
};

export const LinkStandAlone = React.forwardRef(LinkStandAloneComponent);
