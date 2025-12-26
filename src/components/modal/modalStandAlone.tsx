import { type CSSProperties, forwardRef } from 'react';

import { RenderIf } from '@/components/renderIf/renderIf';
import { useId } from '@/lib/hooks/useId/useId';
import { processText } from '@/lib/utils/process/processText/processText';

import { NabVar } from '../navBar/navBar';
import { Overlay } from '../overlay/overlay';
import { Popover } from '../popover/popover';
import { ModalHeader } from './fragments/modalHeader';
import type { ModalStandAloneProps } from './types/modal';
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
    const uniqueModalId = useId('modal');
    const modalId = id ?? uniqueModalId;
    const uniqueTitleId = useId('modal-title');
    const titleIdFinal = processText(title).id ?? uniqueTitleId;
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
          <RenderIf condition={!!modalFooterVariant && !!footer}>
            <div className={cssClasses?.footer}>
              <NabVar variant={modalFooterVariant} {...footer} />
            </div>
          </RenderIf>
        </div>
      </Popover>
    );
  },
);
