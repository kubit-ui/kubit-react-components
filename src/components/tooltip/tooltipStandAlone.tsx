import React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks/useId/useId';

import { DeviceBreakpointsType } from '../../types/breakpoints/breakpoints';
import { ROLES } from '../../types/role/role';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { IconBasic as Icon } from '../icon/icon';
import { PopoverControlled } from '../popover/popoverControlled';
import { PopoverComponentType } from '../popover/types/component';
import { PopoverPositionVariantType } from '../popover/types/positionVariant';
import { TooltipTrigger } from './components/tooltipTrigger';
// styles
import {
  TooltipArrowContentStyled,
  TooltipArrowStyled,
  TooltipCloseIconStyled,
  TooltipDragIconStyled,
  TooltipExternalContainerStyled,
  TooltipHeaderContentStyled,
  TooltipInnerContentStyled,
  TooltipInternalContainerStyled,
  TooltipParagraphStyled,
  TooltipStyled,
  TooltipTitleStyled,
} from './tooltip.styled';
import { ITooltipStandAlone } from './types/tooltip';
import { getAriaDescriptorsBy } from './utils/tooltip.utils';

// eslint-disable-next-line complexity
const TooltipStandAlone = ({
  childrenAsButton = true,
  dataTestId = 'tooltip',
  ...props
}: ITooltipStandAlone): JSX.Element => {
  const uniqueId = useId('tooltip');
  const titleId = `${uniqueId}Title`;
  const contentId = `${uniqueId}Content`;
  const isTextContent = typeof props.content?.content === 'string';

  const isDesktop = props.mediaDevice === DeviceBreakpointsType.DESKTOP;
  const isMobile = props.mediaDevice === DeviceBreakpointsType.MOBILE;
  const isTablet = props.mediaDevice === DeviceBreakpointsType.TABLET;

  if (props.disabled) {
    return (
      <TooltipStyled data-testid={dataTestId}>
        <TooltipTrigger disabled childrenAsButton={childrenAsButton}>
          {props.children}
        </TooltipTrigger>
      </TooltipStyled>
    );
  }

  const ariaDescriptorsBy = getAriaDescriptorsBy({
    title: props.title?.content,
    content: props.content?.content,
    titleId,
    contentId,
  });

  const Tooltip = (
    <TooltipExternalContainerStyled
      ref={props.tooltipRef}
      aria-label={isDesktop ? props.tooltipAriaLabel : undefined}
      aria-labelledby={isDesktop ? titleId : undefined}
      aria-modal={isDesktop && props.tooltipAsModal ? true : undefined}
      data-testid={`${dataTestId}-content`}
      id={uniqueId}
      role={isDesktop ? (props.tooltipAsModal ? ROLES.DIALOG : ROLES.TOOLTIP) : undefined}
      styles={props.styles}
      onFocus={props.onTooltipFocus}
      onKeyDown={props.onTooltipKeyDown}
    >
      <TooltipInternalContainerStyled styles={props.styles}>
        {(isMobile || isTablet) && props.dragIcon && (
          <TooltipDragIconStyled
            ref={props.dragIconRef}
            data-testid={`${dataTestId}-drag`}
            styles={props.styles}
          >
            <ElementOrIcon customIconStyles={props.styles?.dragIcon} {...props.dragIcon} />
          </TooltipDragIconStyled>
        )}
        <TooltipHeaderContentStyled
          hasCloseIcon={!!props.closeIcon?.icon}
          hasTitle={!!props.title}
          styles={props.styles}
        >
          {/* Close icon is the first element, so when pressing down arrow the title and the content is read */}
          {props.closeIcon?.icon && (
            <TooltipCloseIconStyled styles={props.styles}>
              <Icon
                customIconStyles={props.styles?.closeButtonIcon}
                {...props.closeIcon}
                onClick={props.onCloseIconClick}
              />
            </TooltipCloseIconStyled>
          )}
          {props.title?.content && (
            <TooltipTitleStyled
              hasCloseIcon={!!props.closeIcon?.icon}
              id={titleId}
              styles={props.styles}
            >
              <Text
                component={TextComponentType.H2}
                customTypography={props.styles?.title}
                variant={props.styles.title?.font_variant}
                {...props.title}
              >
                {props.title.content}
              </Text>
            </TooltipTitleStyled>
          )}
        </TooltipHeaderContentStyled>
        <TooltipInnerContentStyled
          ref={props.contentRef}
          aria-label={props.contentHasScroll ? props.contentScrollArias?.['aria-label'] : undefined}
          aria-labelledby={
            props.contentHasScroll ? props.contentScrollArias?.['aria-labelledby'] : undefined
          }
          role={props.contentHasScroll ? ROLES.REGION : undefined}
          styles={props.styles}
          tabIndex={props.contentHasScroll ? 0 : undefined}
        >
          {props.content && (
            <TooltipParagraphStyled
              hasBorder={!!props.title?.content}
              id={contentId}
              styles={props.styles}
            >
              {isTextContent ? (
                <Text
                  customTypography={props.styles?.paragraph}
                  variant={props.styles.paragraph?.font_variant}
                  {...props.content}
                >
                  {props.content.content}
                </Text>
              ) : (
                props.content.content
              )}
            </TooltipParagraphStyled>
          )}
        </TooltipInnerContentStyled>
      </TooltipInternalContainerStyled>
      <TooltipArrowStyled align={props.align} styles={props.styles}>
        <TooltipArrowContentStyled styles={props.styles} />
      </TooltipArrowStyled>
    </TooltipExternalContainerStyled>
  );

  return (
    <TooltipStyled
      ref={props.labelRef}
      data-testid={dataTestId}
      tooltipAsModal={props.tooltipAsModal}
      onBlur={props.onWrapperBlur ?? props.onBlur}
      onFocus={props.onWrapperFocus ?? props.onFocus}
      onMouseEnter={props.onWrapperMouseEnter ?? props.onMouseEnter}
      onMouseLeave={props.onWrapperMouseLeave ?? props.onMouseLeave}
    >
      <TooltipTrigger
        // Aria describedby is used when the tooltip is not used as a modal
        // When no focusable elements screenReaders may read the text when focus and then using arrows
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role
        // or https://dequeuniversity.com/library/aria/tooltip
        ariaDescribedBy={
          !props.tooltipAsModal && (isDesktop || props.popoverOpen) ? ariaDescriptorsBy : undefined
        }
        childrenAsButton={childrenAsButton}
        triggerAsButton={props.triggerAsButton}
        onClick={props.onTriggerClick ?? props.onClick}
        onKeyDown={props.onTriggerKeyDown ?? props.onKeyDown}
        onMouseDown={props.onTriggerMouseDown ?? props.onMouseDown}
        onMouseUp={props.onTriggerMouseUp ?? props.onMouseUp}
      >
        {props.children}
      </TooltipTrigger>
      {isDesktop ? (
        Tooltip
      ) : (
        <PopoverControlled
          component={PopoverComponentType.DIV}
          focusLastElementFocusedAfterClose={false}
          hasBackDrop={props.styles.showOverlay?.[props.mediaDevice]}
          open={props.popoverOpen}
          positionVariant={PopoverPositionVariantType.ABSOLUTE}
          preventCloseOnClickElements={[props.labelRef?.current]}
          role={props.tooltipAsModal ? ROLES.DIALOG : ROLES.TOOLTIP}
          trapFocusInsideModal={true}
          variant={props.styles.popoverVariant?.[props.mediaDevice]}
          {...props.popover}
          aria-label={props.popover?.['aria-label'] || props.tooltipAriaLabel}
          aria-labelledby={titleId}
          aria-modal={props.tooltipAsModal || undefined}
          onCloseInternally={props.onPopoverCloseInternally}
        >
          {Tooltip}
        </PopoverControlled>
      )}
    </TooltipStyled>
  );
};

/**
 * @description
 * Tooltip component to show a message when the user hovers over, focuses on, or touches an element.
 */
export { TooltipStandAlone };
