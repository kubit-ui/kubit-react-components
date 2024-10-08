import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Icon } from '@/components/icon';
import {
  PopoverControlled as Popover,
  PopoverComponentType,
  PopoverPositionVariantType,
} from '@/components/popover';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks/useId/useId';
import { DeviceBreakpointsType, ROLES } from '@/types';

import { TooltipTrigger } from './components';
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
import { ITooltipStandAlone } from './types';
import { getAriaDescriptorsBy, getHtmlTagForTooltip } from './utils';

const TooltipStandAlone = ({
  childrenAsButton = true,
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
      <TooltipStyled data-testid={`${props.dataTestId}Tooltip`}>
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
      aria-label={props.tooltipAriaLabel}
      aria-labelledby={titleId}
      as={getHtmlTagForTooltip({
        mediaDevice: props.mediaDevice,
        tooltipAsModal: props.tooltipAsModal,
      })}
      data-testid={`${props.dataTestId}TooltipContent`}
      id={uniqueId}
      role={isDesktop && !props.tooltipAsModal ? ROLES.TOOLTIP : undefined}
      styles={props.styles}
      onFocus={props.onTooltipFocus}
      onKeyDown={props.onTooltipKeyDown}
    >
      <TooltipInternalContainerStyled styles={props.styles}>
        {(isMobile || isTablet) && props.dragIcon && (
          <TooltipDragIconStyled
            ref={props.dragIconRef}
            data-testid={`${props.dataTestId}TooltipDrag`}
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
                dataTestId={`${props.dataTestId}TooltipContentCloseIcon`}
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
                dataTestId={`${props.dataTestId}TooltipContentTitle`}
                variant={props.styles.title?.font_variant}
                {...props.title}
              >
                {props.title.content}
              </Text>
            </TooltipTitleStyled>
          )}
        </TooltipHeaderContentStyled>
        <TooltipInnerContentStyled styles={props.styles}>
          {props.content && (
            <TooltipParagraphStyled
              hasBorder={!!props.title?.content}
              id={contentId}
              styles={props.styles}
            >
              {isTextContent ? (
                <Text
                  customTypography={props.styles?.paragraph}
                  dataTestId={`${props.dataTestId}TooltipContentContent`}
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
      data-testid={`${props.dataTestId}Tooltip`}
      tooltipAsModal={props.tooltipAsModal}
      onBlur={props.onBlur}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onKeyDown={props.onKeyDown}
      onMouseDown={props.onMouseDown}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
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
      >
        {props.children}
      </TooltipTrigger>
      {isDesktop ? (
        Tooltip
      ) : (
        <Popover
          component={!props.tooltipAsModal ? PopoverComponentType.DIV : PopoverComponentType.DIALOG}
          dataTestId={`${props.dataTestId}Popover`}
          focusLastElementFocusedAfterClose={false}
          hasBackDrop={props.styles.showOverlay?.[props.mediaDevice]}
          open={props.popoverOpen}
          positionVariant={PopoverPositionVariantType.ABSOLUTE}
          preventCloseOnClickElements={[props.labelRef?.current]}
          role={!props.tooltipAsModal ? ROLES.TOOLTIP : undefined}
          trapFocusInsideModal={true}
          variant={props.styles.popoverVariant?.[props.mediaDevice]}
          {...props.popover}
          aria-label={props.popover?.['aria-label'] || props.tooltipAriaLabel}
          aria-modal={props.tooltipAsModal || undefined}
          onCloseInternally={props.onPopoverCloseInternally}
        >
          {Tooltip}
        </Popover>
      )}
    </TooltipStyled>
  );
};

/**
 * @description
 * Tooltip component to show a message when the user hovers over, focuses on, or touches an element.
 */
export { TooltipStandAlone };
