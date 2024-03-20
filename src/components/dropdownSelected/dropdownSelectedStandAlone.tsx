import React, { useMemo } from 'react';

import { keyDownMove, keyUpMove } from '@/components/listOptions/utils';
import { useId } from '@/hooks/useId/useId';

import { ButtonType } from '../button';
import { ElementOrIcon } from '../elementOrIcon';
import { ListOptions, ListOptionsOptionType, ListOptionsType } from '../listOptions';
import {
  PopoverControlled as Popover,
  PopoverComponentType,
  PopoverPositionVariantType,
} from '../popover';
import { Text, TextComponentType } from '../text';
import {
  ButtonOrLinkContainerStyled,
  DropdrownSelectedContainerStyled,
  ListOptionsContainerStyled,
} from './dropdownSelected.styled';
import { IDropdownSelectedStandAlone } from './types';

const DROPDOWN_SELECTED_BASE_ID = 'DropdownSelected';

const DropdownSelectedStandAloneComponent = (props: IDropdownSelectedStandAlone): JSX.Element => {
  const BASE_ID = useId(DROPDOWN_SELECTED_BASE_ID);
  const POPOVER_ID = `${BASE_ID}-popover`;
  const ariaControls = props.open ? `${BASE_ID}-list` : undefined;

  const keyTabMove =
    (options: ListOptionsOptionType[]) =>
    (prevFocus: number, e?: KeyboardEvent): number => {
      // Go to the previous focusable element
      if (e?.shiftKey) {
        const newFocus = Math.max(prevFocus, 0) - 1;
        // Prevent default if the next element is less than 0
        // Go to the button
        if (newFocus >= 0) {
          e?.preventDefault();
        }
        return Math.max(newFocus, 0);
      }
      // Go to the next element focusable
      const newFocus = Math.max(prevFocus, 0) + 1;
      // Prevent default if the next element does not overflow the options length
      // When preventDefault is not called, the focus is moved to the next element (outside the listOptions)
      if (newFocus <= options.length - 1) {
        e?.preventDefault();
      }
      return Math.min(newFocus, options.length - 1);
    };

  const roveFocusProps = useMemo(
    () => ({
      size: props.listOptions.options.length,
      keyDownMove: keyDownMove(props.listOptions.options),
      keyUpMove,
      currentFocusSelected: -1,
      keyRightMove: 0,
      keyLeftMove: 0,
      keyTabMove: keyTabMove(props.listOptions.options),
    }),
    [props.listOptions.options]
  );

  return (
    <DropdrownSelectedContainerStyled
      data-testid={props.dataTestIdComponent}
      styles={props.styles}
      onBlur={event => props.onFocus?.(event)}
      onFocus={props.onFocus}
      onKeyDown={event => props.onKeyDown?.(event)}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <ButtonOrLinkContainerStyled
        ref={props.buttonOrLinkRef}
        $rotate={props.open}
        aria-controls={ariaControls}
        as={props.component}
        styles={props.styles}
        target={!props.url ? undefined : props.urlTarget}
        type={!props.url ? ButtonType.BUTTON : undefined}
        url={props.url}
        onClick={props.onButtonClick}
        onKeyDown={props.onButtonKeyDown}
      >
        <Text
          component={TextComponentType.SPAN}
          customTypography={props.open ? props.styles?.labelOpened : props.styles?.labelClosed}
          {...props.label}
        >
          {props.label.content}
        </Text>
        <ElementOrIcon
          customIconStyles={props.open ? props.styles?.iconOpened : props.styles?.iconClosed}
          {...props.icon}
        />
      </ButtonOrLinkContainerStyled>
      {props.styles?.popover?.variant && (
        <Popover
          hasBackDrop
          component={PopoverComponentType.DIV}
          dataTestId={POPOVER_ID}
          focusFirstDescendantAutomatically={false}
          focusLastElementFocusedAfterClose={false}
          id={ariaControls}
          open={props.open}
          positionVariant={PopoverPositionVariantType.ABSOLUTE}
          pressEscapeClose={true}
          preventCloseOnClickElements={[props.buttonOrLinkRef?.current]}
          trapFocusInsideModal={false}
          variant={props.styles?.popover.variant}
          {...props.popover}
          onCloseInternally={() => {
            props.onClosePopover();
            props.popover?.onCloseInternally?.();
          }}
        >
          <ListOptionsContainerStyled
            data-testid={props.dataTestIdListOptionsContainer}
            styles={props.styles}
          >
            {props.styles?.listOptions?.optionVariant && props.styles.listOptions?.variant && (
              <ListOptions
                ref={props.listOptionsRef}
                optionVariant={props.styles.listOptions.optionVariant}
                roveFocus={
                  props.listOptions.type === ListOptionsType.SELECTION ? roveFocusProps : undefined
                }
                selectedValue={props.optionSelected}
                variant={props.styles.listOptions.variant}
                {...props.listOptions}
                onOptionClick={value => {
                  props.onOptionClick(value);
                  props.onClosePopover();
                }}
              />
            )}
          </ListOptionsContainerStyled>
        </Popover>
      )}
    </DropdrownSelectedContainerStyled>
  );
};

export const DropdownSelectedStandAlone = React.forwardRef(DropdownSelectedStandAloneComponent);
