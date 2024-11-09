import React from 'react';

import { Button } from '@/components/button/button';
import { ElementOrIllustration } from '@/components/elementOrIllustration/elementOrIllustration';
import { Footer } from '@/components/footer/footer';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks/useId/useId';

import { DeviceBreakpointsType } from '../../types/breakpoints/breakpoints';
import { ROLES } from '../../types/role/role';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { PopoverControlled as Popover } from '../popover/popoverControlled';
import { PopoverComponentType } from '../popover/types/component';
import { PopoverPositionVariantType } from '../popover/types/positionVariant';
import {
  DraggableIcon,
  ModalCloseButtonStyled,
  ModalContentStyled,
  ModalFooterStyled,
  ModalHeaderStyled,
  ModalImageStyled,
  ModalStyled,
  TitleHiddenContainer,
} from './modal.styled';
import { IModalStandAlone } from './types/modal';

// eslint-disable-next-line complexity
const ModalStandAloneComponent = (
  {
    dataTestId = 'modalDataTestId',
    customHeightAllDevices = false,
    customWidthAllDevices = false,
    ...props
  }: IModalStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): React.JSX.Element => {
  const uniqueModalId = useId('modal');
  const modalId = props.id ?? uniqueModalId;
  const uniqueTitleId = useId('modal-title');
  const titleIdFinal = props.title?.id ?? uniqueTitleId;

  const buildIconOrIllustration = () => {
    if (props.imageIllustrationHeader?.illustration) {
      return (
        <ModalImageStyled
          data-modal-ilustration-container
          $styles={props.styles}
          data-testid={`${dataTestId}ImageHeader`}
        >
          <ElementOrIllustration
            customIllustrationStyles={props.styles.imageIllustrationHeader}
            data-testid={`${dataTestId}ImageHeader`}
            {...props.imageIllustrationHeader}
          />
        </ModalImageStyled>
      );
    } else if (props.imageHeader?.icon) {
      return (
        <ModalImageStyled $styles={props.styles} data-testid={`${dataTestId}ImageHeader`}>
          <ElementOrIcon
            customIconStyles={props.styles.imageHeader}
            data-testid={`${dataTestId}ImageHeader`}
            {...props.imageHeader}
          />
        </ModalImageStyled>
      );
    }
    return null;
  };

  const onlyDesktopSize = value => {
    return props.device === DeviceBreakpointsType.DESKTOP ||
      props.device === DeviceBreakpointsType.LARGE_DESKTOP
      ? value
      : undefined;
  };

  const modalFooterVariant = props.footer?.variant ?? props.styles.footerVariant;

  return (
    <Popover
      aria-labelledby={titleIdFinal}
      aria-modal={props.open}
      clickOverlayClose={!props.blocked}
      component={PopoverComponentType.DIV}
      dataTestId={`${dataTestId}Popover`}
      hasBackDrop={true}
      id={modalId}
      open={props.open}
      positionVariant={PopoverPositionVariantType.FIXED}
      role={ROLES.DIALOG}
      trapFocusInsideModal={true}
      variant={props.styles.popoverVariant}
      onCloseInternally={props.onPopoverCloseInternally}
      {...props.popover}
    >
      <ModalStyled
        ref={ref}
        $maxHeight={props.maxHeight}
        $maxWidth={props.maxWidth}
        $minHeight={customHeightAllDevices ? props.minHeight : onlyDesktopSize(props.minHeight)}
        $minWidth={customWidthAllDevices ? props.minWidth : onlyDesktopSize(props.minWidth)}
        $styles={props.styles}
        data-testid={dataTestId}
        hasFooter={!!props.footer?.content}
        onKeyDown={event => props.onKeyDown?.(event)}
      >
        <ModalHeaderStyled data-modal-header $styles={props.styles}>
          {!props.blocked && props.dragIcon && (
            <DraggableIcon data-modal-draggable-icon $styles={props.styles}>
              <ElementOrIcon customIconStyles={props.styles?.dragIcon} {...props.dragIcon} />
            </DraggableIcon>
          )}
          {!props.blocked && props.closeIcon?.icon && (
            <ModalCloseButtonStyled $styles={props.styles}>
              <ElementOrIcon
                customIconStyles={props.styles?.closeButtonIcon}
                dataTestId={`${dataTestId}CloseIcon`}
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
          {buildIconOrIllustration()}
          {props.title?.visible === undefined || props.title.visible ? (
            <Text
              component={TextComponentType.H1}
              customTypography={props.styles.title}
              dataTestId={`${dataTestId}Title`}
              id={titleIdFinal}
              {...props.title}
            >
              {props.title?.content}
            </Text>
          ) : (
            <TitleHiddenContainer id={titleIdFinal}>{props.title?.content}</TitleHiddenContainer>
          )}
        </ModalHeaderStyled>
        <ModalContentStyled
          data-modal-content
          $minContentHeight={props.minContentHeight}
          $styles={props.styles}
          aria-label={props.contentHasScroll ? props.contentScrollArias?.['aria-label'] : undefined}
          aria-labelledby={
            props.contentHasScroll ? props.contentScrollArias?.['aria-labelledby'] : undefined
          }
          data-testid={`${dataTestId}Content`}
          role={props.contentHasScroll ? ROLES.REGION : undefined}
          tabIndex={props.contentHasScroll ? 0 : undefined}
        >
          {props.content}
        </ModalContentStyled>
        {modalFooterVariant && props.footer?.content && (
          <ModalFooterStyled $styles={props.styles}>
            <Footer
              dataTestId={`${dataTestId}Navbar`}
              variant={modalFooterVariant}
              {...props.footer}
            >
              {props.footer?.content}
            </Footer>
          </ModalFooterStyled>
        )}
      </ModalStyled>
    </Popover>
  );
};

export const ModalStandAlone = React.forwardRef(ModalStandAloneComponent);
