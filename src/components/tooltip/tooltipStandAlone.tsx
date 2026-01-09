import './tooltip.css';

import { useId } from 'react';

import { Text } from '@/components/text/text';
import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';
import { POSITIONS } from '@/lib/types/positions/positions';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { TooltipStandAloneProps } from './types/tooltip';

import { Popover } from '../popover/popover';
import { TooltipTrigger } from './components/tooltipTrigger';
import { getAriaDescriptorsBy } from './utils/tooltip.utils';

/**
 * Standalone tooltip component for displaying contextual help text.
 *
 * This component renders a tooltip with content only.
 * It supports multiple positions and responsive behavior.
 *
 * @example
 * ```tsx
 * <TooltipStandAlone
 *   content={{ content: "This is helpful information" }}
 *   align="top"
 * />
 * ```
 */
export const TooltipStandAlone = ({
  align,
  children,
  childrenAsButton = true,
  content,
  contentHasScroll,
  contentRef,
  contentScrollArias,
  cssClasses,
  disabled,
  labelRef,
  mediaDevice,
  onPopoverCloseInternally,
  onTooltipFocus,
  onTooltipKeyDown,
  onTriggerClick,
  onTriggerKeyDown,
  onTriggerMouseDown,
  onTriggerMouseUp,
  popover,
  popoverOpen,
  tooltipAriaLabel,
  tooltipAsModal,
  tooltipRef,
  triggerAsButton,
  ...props
}: TooltipStandAloneProps): JSX.Element => {
  const dataTestId = props['data-testid'] || 'tooltip';
  const customProps = pickCustomAttributes(props);
  const reactId = useId();
  // Sanitize React's useId output (e.g., ":r0:") to be valid HTML ID
  const uniqueId = `tooltip-${reactId.replace(/:/g, '')}`;
  const contentId = `${uniqueId}-content`;

  const processedContent = processTextProp(content);

  const isTextContent = typeof processedContent.children === 'string';

  const { isDesktop, isTablet } = useActiveBreakpoints();
  const isDesktopOrTablet = isDesktop || isTablet;

  if (disabled) {
    return (
      <div className="kbt-tooltip" data-testid={dataTestId}>
        <TooltipTrigger childrenAsButton={childrenAsButton} disabled={true}>
          {children}
        </TooltipTrigger>
      </div>
    );
  }

  const ariaDescriptorsBy = getAriaDescriptorsBy({
    contentId,
    hasContent: !!content,
    hasTitle: false,
    titleId: '',
  });

  const customAttributes = {
    'data-align': align || POSITIONS.TOP,
  };
  const customAttributesProps = pickCustomAttributes(customAttributes);

  const Tooltip = (
    <div
      ref={tooltipRef}
      aria-label={isDesktopOrTablet ? tooltipAriaLabel : undefined}
      aria-labelledby={isDesktopOrTablet ? undefined : undefined}
      aria-modal={isDesktopOrTablet && tooltipAsModal ? true : undefined}
      className={classNames(
        'kbt-tooltip__external-container',
        cssClasses?.tooltipexternalcontainer,
      )}
      data-testid={`${dataTestId}-content`}
      id={uniqueId}
      role={
        isDesktopOrTablet ? (tooltipAsModal ? 'dialog' : 'tooltip') : undefined
      }
      {...(isDesktopOrTablet && {
        onFocus: onTooltipFocus,
        onKeyDown: onTooltipKeyDown,
      })}
      {...customProps}
    >
      <div className={cssClasses?.tooltipinternalcontainer}>
        {/* Content */}
        <div
          ref={contentRef}
          aria-label={
            contentHasScroll ? contentScrollArias?.['aria-label'] : undefined
          }
          aria-labelledby={
            contentHasScroll
              ? contentScrollArias?.['aria-labelledby']
              : undefined
          }
          className="kbt-tooltip__inner-content"
          role={contentHasScroll ? 'region' : undefined}
          {...(contentHasScroll && { tabIndex: 0 })}
        >
          {!!content && (
            <div
              className={classNames(
                'kbt-tooltip__paragraph',
                cssClasses?.paragraphcontainer,
              )}
              id={contentId}
            >
              {isTextContent ? (
                <Text
                  additionalClasses={{ text: cssClasses?.paragraph }}
                  {...processedContent}
                />
              ) : (
                processedContent.children
              )}
            </div>
          )}
        </div>
      </div>

      {/* Arrow */}
      <div
        {...customAttributesProps}
        className={classNames(
          'kbt-tooltip__arrow',
          cssClasses?.arrowsize,
          cssClasses?.tooltipalignstyles,
          cssClasses?.arrowcontainer,
        )}
      >
        <div className={cssClasses?.arrow} />
      </div>
    </div>
  );

  return (
    <div ref={labelRef} className="kbt-tooltip" data-testid={dataTestId}>
      <TooltipTrigger
        ariaDescribedBy={
          !tooltipAsModal && (isDesktopOrTablet || popoverOpen)
            ? ariaDescriptorsBy
            : undefined
        }
        childrenAsButton={childrenAsButton}
        triggerAsButton={triggerAsButton}
        onClick={onTriggerClick}
        onKeyDown={onTriggerKeyDown}
        onMouseDown={onTriggerMouseDown}
        onMouseUp={onTriggerMouseUp}
      >
        {children}
      </TooltipTrigger>
      {isDesktopOrTablet ? (
        Tooltip
      ) : (
        <Popover
          additionalClasses={
            cssClasses?.popover
              ? {
                  arrow: '',
                  popover: cssClasses.popover.popover || '',
                }
              : undefined
          }
          aria-label={popover?.['aria-label'] || tooltipAriaLabel}
          aria-labelledby={undefined}
          aria-modal={tooltipAsModal || undefined}
          component="div"
          disableAutoFocusFirstDescendantAfterClose={true}
          disableTrapFocus={false}
          open={popoverOpen}
          preventCloseOnClickElements={[labelRef?.current]}
          role={tooltipAsModal ? 'dialog' : 'tooltip'}
          strategy="absolute"
          onClose={onPopoverCloseInternally}
          {...popover}
        >
          {Tooltip}
        </Popover>
      )}
    </div>
  );
};
