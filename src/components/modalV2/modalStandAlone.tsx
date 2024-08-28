import * as React from 'react';

import { useId } from '@/hooks';

import { Footer } from '../footer';
import { Popover, PopoverComponentType, PopoverPositionVariantType } from '../popover';
import { ModalHeader } from './fragments';
import { ModalContentStyled, ModalFooterStyled, ModalStyled } from './modal.styled';
import { IModalStandAlone } from './types';
import { onlyDesktopSize } from './utils';

const ModalStandAloneComponent = <V extends string | unknown>(
  {
    dataTestId = 'modalDataTestId',
    scrollableRef,
    shadowRef,
    customHeightAllDevices = false,
    customWidthAllDevices = false,
    ...props
  }: IModalStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const uniqueModalId = useId('modal');
  const modalId = props.id ?? uniqueModalId;
  const uniqueTitleId = useId('modal-title');
  const titleIdFinal = props.title?.id ?? uniqueTitleId;
  const modalRef = React.useRef<HTMLDivElement | null>(null);
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
        $minHeight={
          customHeightAllDevices ? props.minHeight : onlyDesktopSize(props.device, props.minHeight)
        }
        $minWidth={
          customWidthAllDevices ? props.minWidth : onlyDesktopSize(props.device, props.minWidth)
        }
        $styles={props.styles}
        data-testid={dataTestId}
        hasFooter={!!props.footer?.content}
        onKeyDown={event => props.onKeyDown?.(event)}
      >
        {/* Header Section */}
        <ModalHeader
          ref={shadowRef}
          blocked={props.blocked}
          closeButton={props.closeButton}
          closeIcon={props.closeIcon}
          dataTestId={dataTestId}
          styles={props.styles}
          title={props.title}
          titleIdFinal={titleIdFinal}
        />
        {/* Content Section */}
        <ModalContentStyled
          ref={ref => {
            scrollableRef(ref);
          }}
          $minContentHeight={props.minContentHeight}
          $styles={props.styles}
          data-testid={`${dataTestId}Content`}
        >
          {props.content}
        </ModalContentStyled>
        {/* Footer Section */}
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
