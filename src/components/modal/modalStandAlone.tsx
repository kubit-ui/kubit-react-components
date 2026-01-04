import { type CSSProperties, forwardRef, useId } from 'react';

import { Overlay } from '@/lib/components/overlay/overlay';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { ModalStandAloneProps } from './types/modal';

import { NabVar } from '../navBar/navBar';
import { Popover } from '../popover/popover';
import { ModalHeader } from './fragments/modalHeader';
import { onlyDesktopSize } from './utils/onlyDesktopSize';

export const ModalStandAlone = forwardRef<HTMLDivElement, ModalStandAloneProps>(
  (
    {
      blocked,
      closeButton,
      closeIcon,
      content,
      contentContainer,
      contentHasScroll,
      contentScrollArias,
      cssClasses,
      customHeightAllDevices = false,
      customWidthAllDevices = false,
      device,
      dragIcon,
      footer,
      id,
      maxHeight,
      maxWidth,
      minContentHeight,
      minHeight,
      minWidth,
      onKeyDown,
      onPopoverCloseInternally,
      open,
      popover,
      title,
      ...props
    },
    ref,
  ) => {
    const reactModalId = useId();
    const uniqueModalId = `modal-${reactModalId.replace(/:/g, '')}`;
    const modalId = id ?? uniqueModalId;
    const reactTitleId = useId();
    const uniqueTitleId = `modal-title-${reactTitleId.replace(/:/g, '')}`;
    const titleIdFinal = processTextProp(title).id ?? uniqueTitleId;
    const modalFooterVariant = footer?.variant;
    const dataTestId = props['data-testid'] || 'modal';
    return (
      <Popover
        aria-labelledby={titleIdFinal}
        aria-modal={open}
        component="div"
        disableClickOverlayClose={blocked}
        disableEscapeClose={blocked}
        disableTrapFocus={false}
        id={modalId}
        open={open}
        overlay={<Overlay />}
        role="dialog"
        strategy="fixed"
        onClose={onPopoverCloseInternally}
        {...popover}
      >
        <div
          ref={ref}
          className={cssClasses?.modal}
          data-testid={dataTestId}
          style={
            {
              maxHeight: maxHeight,
              maxWidth: maxWidth,
              minHeight: customHeightAllDevices
                ? minHeight
                : onlyDesktopSize(device, minHeight),
              minWidth: customWidthAllDevices
                ? minWidth
                : onlyDesktopSize(device, minWidth),
              paddingBottom: footer?.rightItems ? '0' : undefined,
            } as CSSProperties
          }
        >
          <ModalHeader
            blocked={blocked}
            closeButton={closeButton}
            closeIcon={closeIcon}
            cssClasses={cssClasses}
            device={device}
            dragIcon={dragIcon}
            title={title}
            titleIdFinal={titleIdFinal}
          />
          <div
            aria-label={
              contentHasScroll ? contentScrollArias?.['aria-label'] : undefined
            }
            aria-labelledby={
              contentHasScroll
                ? contentScrollArias?.['aria-labelledby']
                : undefined
            }
            className={cssClasses?.content}
            data-modal-content={true}
            data-testid={`${dataTestId}-content`}
            role={contentHasScroll ? 'region' : undefined}
            style={{
              minHeight: minContentHeight,
            }}
            {...(contentHasScroll
              ? {
                  tabIndex: 0,
                }
              : {})}
            {...contentContainer}
          >
            {content}
          </div>
          {!!modalFooterVariant && !!footer && (
            <div className={cssClasses?.footer}>
              <NabVar variant={modalFooterVariant} {...footer} />
            </div>
          )}
        </div>
      </Popover>
    );
  },
);
