import React from 'react';

import { useId } from '@/hooks/useId/useId';

import { ROLES } from '../../types/role/role';
import { Footer } from '../footer/footer';
import { PopoverControlled } from '../popover/popoverControlled';
import { PopoverComponentType } from '../popover/types/component';
import { PopoverPositionVariantType } from '../popover/types/positionVariant';
import { ModalHeader } from './fragments/modalHeader';
import { ModalContentStyled, ModalFooterStyled, ModalStyled } from './modal.styled';
import { IModalStandAlone } from './types/modal';
import { onlyDesktopSize } from './utils/onlyDesktopSize';

// eslint-disable-next-line complexity
const ModalStandAloneComponent = <V extends string | unknown>(
  {
    dataTestId = 'modal',
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
  const modalFooterVariant = props.footer?.variant ?? props.styles.footerVariant;

  return (
    <PopoverControlled
      aria-labelledby={titleIdFinal}
      aria-modal={props.open}
      clickOverlayClose={!props.blocked}
      component={PopoverComponentType.DIV}
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
        $minHeight={
          customHeightAllDevices ? props.minHeight : onlyDesktopSize(props.device, props.minHeight)
        }
        $minWidth={
          customWidthAllDevices ? props.minWidth : onlyDesktopSize(props.device, props.minWidth)
        }
        $styles={props.styles}
        data-testid={dataTestId}
        hasFooter={!!props.footer?.content}
        onKeyDown={props.onKeyDown}
      >
        {/* Header Section */}
        <ModalHeader
          blocked={props.blocked}
          closeButton={props.closeButton}
          closeIcon={props.closeIcon}
          device={props.device}
          dragIcon={props.dragIcon}
          styles={props.styles}
          title={props.title}
          titleIdFinal={titleIdFinal}
        />
        {/* Content Section */}
        <ModalContentStyled
          data-modal-content
          $minContentHeight={props.minContentHeight}
          $styles={props.styles}
          aria-label={props.contentHasScroll ? props.contentScrollArias?.['aria-label'] : undefined}
          aria-labelledby={
            props.contentHasScroll ? props.contentScrollArias?.['aria-labelledby'] : undefined
          }
          data-testid={`${dataTestId}-content`}
          role={props.contentHasScroll ? ROLES.REGION : undefined}
          tabIndex={props.contentHasScroll ? 0 : undefined}
        >
          {props.content}
        </ModalContentStyled>
        {/* Footer Section */}
        {modalFooterVariant && props.footer?.content && (
          <ModalFooterStyled $styles={props.styles}>
            <Footer variant={modalFooterVariant} {...props.footer}>
              {props.footer?.content}
            </Footer>
          </ModalFooterStyled>
        )}
      </ModalStyled>
    </PopoverControlled>
  );
};

export const ModalStandAlone = React.forwardRef(ModalStandAloneComponent);
