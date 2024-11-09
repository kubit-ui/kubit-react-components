import React, { useMemo } from 'react';

import { Text } from '@/components/text/text';
import { useId } from '@/hooks/useId/useId';

import { ROLES } from '../../types/role/role';
import { ButtonType } from '../button/types/type';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { ListOptions } from '../listOptions/listOptions';
import { ListOptionsOptionType } from '../listOptions/types/listOptions';
import { ListOptionsType } from '../listOptions/types/type';
import { keyDownMove, keyUpMove } from '../listOptions/utils/listOptions.utils';
import { PopoverControlled } from '../popover/popoverControlled';
import { PopoverComponentType } from '../popover/types/component';
import { PopoverPositionVariantType } from '../popover/types/positionVariant';
import { TextComponentType } from '../text/types/component';
import {
  ButtonOrLinkContainerStyled,
  DropdrownSelectedContainerStyled,
  ListOptionsContainerStyled,
} from './dropdownSelected.styled';
import { IDropdownSelectedStandAlone } from './types/dropdownSelected';

const DROPDOWN_SELECTED_BASE_ID = 'DropdownSelected';

const DropdownSelectedStandAloneComponent = (
  {
    dataTestIdComponent = 'dropdown-selected',
    dataTestIdListOptionsContainer = 'list-options-container',
    ...props
  }: IDropdownSelectedStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
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
      ref={ref}
      data-testid={dataTestIdComponent}
      styles={props.styles}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onKeyDown={props.onKeyDown}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <ButtonOrLinkContainerStyled
        ref={props.buttonOrLinkRef}
        $rotate={props.open}
        aria-controls={ariaControls}
        aria-expanded={props.open}
        aria-haspopup={ROLES.LISTBOX}
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
        <PopoverControlled
          hasBackDrop
          component={PopoverComponentType.DIV}
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
            data-testid={dataTestIdListOptionsContainer}
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
        </PopoverControlled>
      )}
    </DropdrownSelectedContainerStyled>
  );
};

export const DropdownSelectedStandAlone = React.forwardRef(DropdownSelectedStandAloneComponent);
