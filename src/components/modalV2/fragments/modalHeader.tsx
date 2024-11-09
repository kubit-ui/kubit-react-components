import React from 'react';

import { Text } from '@/components/text/text';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import { Button } from '../../button/button';
import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import { TextComponentType } from '../../text/types/component';
import {
  DraggableIcon,
  ModalCloseButtonStyled,
  ModalHeaderStyled,
  TitleHiddenContainer,
} from '../modal.styled';
import { IModalStandAlone } from '../types/modal';

type PickedProps =
  | 'styles'
  | 'blocked'
  | 'closeIcon'
  | 'closeButton'
  | 'title'
  | 'dragIcon'
  | 'device';
type ModalHeaderProps = Pick<IModalStandAlone, PickedProps> & {
  titleIdFinal: string;
};

export const ModalHeader = (props: ModalHeaderProps): JSX.Element => {
  const isMobile = props.device === DeviceBreakpointsType.MOBILE;

  return (
    <ModalHeaderStyled data-modal-header $styles={props.styles}>
      {isMobile && !props.blocked && props.dragIcon && (
        <DraggableIcon data-modal-draggable-icon $styles={props.styles}>
          <ElementOrIcon customIconStyles={props.styles?.dragIcon} {...props.dragIcon} />
        </DraggableIcon>
      )}
      {!props.blocked && props.closeIcon?.icon && (
        <ModalCloseButtonStyled $styles={props.styles}>
          <ElementOrIcon customIconStyles={props.styles?.closeButtonIcon} {...props.closeIcon} />
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
