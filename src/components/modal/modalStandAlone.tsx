import * as React from 'react';

import { Button } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { ElementOrIllustration } from '@/components/elementOrIllustration';
import { Footer } from '@/components/footer';
import { PopoverControlled as Popover } from '@/components/popover';
import { PopoverComponentType, PopoverPositionVariantType } from '@/components/popover/types';
import { Text, TextComponentType } from '@/components/text';
import { useId } from '@/hooks';
import { DeviceBreakpointsType } from '@/types';

import {
  ModalCloseButtonStyled,
  ModalContentStyled,
  ModalFooterStyled,
  ModalHeaderStyled,
  ModalImageStyled,
  ModalStyled,
  TitleHiddenContainer,
} from './modal.styled';
import { IModalStandAlone } from './types';

// eslint-disable-next-line complexity
const ModalStandAloneComponent = (
  {
    dataTestId = 'modalDataTestId',
    scrollableRef,
    resizeRef,
    shadowRef,
    zoomRef,
    zoomRefChild,
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
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  React.useImperativeHandle(ref, () => {
    zoomRef(modalRef.current);
    return modalRef.current as HTMLDivElement;
  });

  const buildIconOrIllustration = () => {
    if (props.imageIllustrationHeader?.illustration) {
      return (
        <ModalImageStyled $styles={props.styles} data-testid={`${dataTestId}ImageHeader`}>
          <ElementOrIllustration
            ref={resizeRef}
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
      component={PopoverComponentType.DIALOG}
      dataTestId={`${dataTestId}Popover`}
      hasBackDrop={true}
      id={modalId}
      open={props.open}
      positionVariant={PopoverPositionVariantType.FIXED}
      trapFocusInsideModal={true}
      variant={props.styles.popoverVariant}
      {...props.popover}
    >
      <ModalStyled
        ref={modalRef}
        $maxHeight={props.maxHeight}
        $maxWidth={props.maxWidth}
        $minHeight={customHeightAllDevices ? props.minHeight : onlyDesktopSize(props.minHeight)}
        $minWidth={customWidthAllDevices ? props.minWidth : onlyDesktopSize(props.minWidth)}
        $styles={props.styles}
        data-testid={dataTestId}
        hasFooter={!!props.footer?.content}
        onKeyDown={event => props.onKeyDown?.(event)}
      >
        <ModalHeaderStyled ref={shadowRef} $styles={props.styles}>
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
          ref={ref => {
            scrollableRef(ref);
            zoomRefChild(ref);
          }}
          $minContentHeight={props.minContentHeight}
          $styles={props.styles}
          data-testid={`${dataTestId}Content`}
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
