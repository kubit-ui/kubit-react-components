import './tooltip.css';

import { useId } from 'react';

import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';
import { POSITIONS } from '@/lib/types/positions/positions';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processIcon } from '@/lib/utils/process/processIcon/processIcon';
import { processText } from '@/lib/utils/process/processText/processText';

import type { TooltipStandAloneProps } from './types/tooltip';

import { IconHost as Icon } from '../icon/iconHost';
import { Popover } from '../popover/popover';
import { TooltipTrigger } from './components/tooltipTrigger';
import { getAriaDescriptorsBy } from './utils/tooltip.utils';

export const TooltipStandAlone = ({
  align,
  children,
  childrenAsButton = true,
  closeIcon,
  content,
  contentHasScroll,
  contentRef,
  contentScrollArias,
  cssClasses,
  disabled,
  dragIcon,
  dragIconRef,
  labelRef,
  mediaDevice,
  onCloseIconClick,
  onPopoverCloseInternally,
  onTooltipFocus,
  onTooltipKeyDown,
  onTriggerClick,
  onTriggerKeyDown,
  onTriggerMouseDown,
  onTriggerMouseUp,
  popover,
  popoverOpen,
  title,
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
  const titleId = `${uniqueId}-title`;
  const contentId = `${uniqueId}-content`;

  const processedContent = processText(content);
  const processedTitle = processText(title);

  const isTextContent = typeof processedContent.children === 'string';

  const { isDesktop, isMobile, isTablet } = useActiveBreakpoints();
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
    hasTitle: !!processedTitle.children,
    titleId,
  });

  const getTooltipStyle = (hasTitle: boolean, hasCloseIcon: boolean) => {
    if (hasTitle && hasCloseIcon) {
      return { justifyContent: 'space-between' };
    }
    if (hasTitle) {
      return { justifyContent: 'flex-end' };
    }
    if (hasCloseIcon) {
      return { justifyContent: 'flex-start' };
    }
    return { display: 'none' };
  };

  const customAttributes = {
    'data-align': align || POSITIONS.TOP,
  };
  const customAttributesProps = pickCustomAttributes(customAttributes);

  const Tooltip = (
    <div
      ref={tooltipRef}
      aria-label={isDesktopOrTablet ? tooltipAriaLabel : undefined}
      aria-labelledby={
        isDesktopOrTablet
          ? getAriaDescriptorsBy({
              hasTitle: !!processedTitle.children,
              titleId,
            })
          : undefined
      }
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
        {/* Drag Icon */}
        {(isMobile || isTablet) && !!dragIcon && (
          <div
            ref={dragIconRef}
            className={cssClasses?.dragiconcontainer}
            data-testid={`${dataTestId}-drag`}
          >
            <ElementOrIcon className={cssClasses?.dragicon} {...dragIcon} />
          </div>
        )}

        {/* Header */}
        <div
          className={classNames(cssClasses?.title, cssClasses?.headercontainer)}
          style={getTooltipStyle(!!processedTitle.children, !!closeIcon?.icon)}
        >
          {/* Close Icon */}
          {processIcon(closeIcon).icon && (
            <div className={cssClasses?.closebuttoncontainer}>
              <Icon
                {...processIcon(closeIcon)}
                className={cssClasses?.closebuttonicon}
                icon={processIcon(closeIcon).icon as string}
                onClick={onCloseIconClick}
              />
            </div>
          )}

          {/* Title */}
          {!!processedTitle.children && (
            <div className="kbt-tooltip__title" id={titleId}>
              <Text
                additionalClasses={{ text: cssClasses?.title }}
                component="h2"
                {...processedTitle}
              >
                {processedTitle.children}
              </Text>
            </div>
          )}
        </div>

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
                {
                  [`${cssClasses?.divider}`]: !!processedTitle.children,
                },
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
          aria-labelledby={getAriaDescriptorsBy({
            hasTitle: !!processedTitle.children,
            titleId,
          })}
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
