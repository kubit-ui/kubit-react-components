import React from 'react';

import { Button } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text, TextComponentType } from '@/components/text';
import { DeviceBreakpointsType } from '@/types';

import {
  DraggableIcon,
  ModalCloseButtonStyled,
  ModalHeaderStyled,
  TitleHiddenContainer,
} from '../modal.styled';
import { IModalStandAlone } from '../types';

type PickedProps =
  | 'styles'
  | 'dataTestId'
  | 'blocked'
  | 'closeIcon'
  | 'closeButton'
  | 'title'
  | 'dragIcon'
  | 'dragIconRef'
  | 'device';
type ModalHeaderProps = Pick<IModalStandAlone, PickedProps> & {
  titleIdFinal: string;
};

const ModalHeaderComponent = (
  props: ModalHeaderProps,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const isMobile = props.device === DeviceBreakpointsType.MOBILE;

  return (
    <ModalHeaderStyled ref={ref} $styles={props.styles}>
      {isMobile && !props.blocked && props.dragIcon && (
        <DraggableIcon ref={props.dragIconRef} $styles={props.styles}>
          <ElementOrIcon customIconStyles={props.styles?.dragIcon} {...props.dragIcon} />
        </DraggableIcon>
      )}
      {!props.blocked && props.closeIcon?.icon && (
        <ModalCloseButtonStyled $styles={props.styles}>
          <ElementOrIcon
            customIconStyles={props.styles?.closeButtonIcon}
            dataTestId={`${props.dataTestId}CloseIcon`}
            {...props.closeIcon}
          />
        </ModalCloseButtonStyled>
      )}
      {!props.blocked &&
        props.closeButton?.content &&
        (props.styles.closeButton?.buttonVariant || props.closeButton?.variant) && (
          <Button variant={props.styles.closeButton?.buttonVariant} {...props.closeButton}>
            {props.closeButton.content}
          </Button>
        )}
      {props.title?.visible === undefined || props.title.visible ? (
        <>
          <Text
            component={TextComponentType.H1}
            customTypography={props.styles.title}
            dataTestId={`${props.dataTestId}Title`}
            id={props.titleIdFinal}
            {...props.title}
          >
            {props.title?.content}
          </Text>
        </>
      ) : (
        <TitleHiddenContainer id={props.titleIdFinal}>{props.title?.content}</TitleHiddenContainer>
      )}
    </ModalHeaderStyled>
  );
};

export const ModalHeader = React.forwardRef(ModalHeaderComponent);
