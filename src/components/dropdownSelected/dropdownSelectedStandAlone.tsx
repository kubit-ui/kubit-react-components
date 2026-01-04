import { forwardRef, useId, useMemo } from 'react';

import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { ListOptionsOptionProps } from '../listOptions/types/listOptions';
import type { DropdownSelectedStandAloneProps } from './types/dropdownSelected';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import { ListOptions } from '../listOptions/listOptions';
import { keyDownMove, keyUpMove } from '../listOptions/utils/listOptions.utils';
import { Popover } from '../popover/popover';

/**
 * Standalone dropdown component for rendering the visual structure and interaction of a dropdown.
 *
 * This component is responsible for the low-level rendering of a dropdown, including the button or link,
 * label, icon, and the list of selectable options. It is typically used internally by higher-level dropdown
 * components to provide a consistent and accessible UI.
 *
 * Accepts generic type parameters for custom variant or option types, enabling flexible theming and structure.
 *
 * @example
 * ```tsx
 * <DropdownSelectedStandAlone open label="Select an option" listOptions={options} />
 * ```
 */
export const DropdownSelectedStandAlone = forwardRef<
  HTMLDivElement,
  DropdownSelectedStandAloneProps
>(
  (
    {
      buttonOrLinkRef,
      component,
      cssClasses,
      icon,
      label,
      listOptions,
      listOptionsRef,
      onBlur,
      onButtonClick,
      onButtonKeyDown,
      onClosePopover,
      onFocus,
      onKeyDown,
      onOptionClick,
      open,
      optionSelected,
      popover,
      url,
      urlTarget,
      ...props
    },
    ref,
  ) => {
    const reactId = useId();
    const BASE_ID = `dropdownselected-${reactId.replace(/:/g, '')}`;
    const ariaControls = open ? `${BASE_ID}-list` : undefined;
    const dataTestId = props['data-testid'] || 'dropdown-selected';
    const customProps = pickCustomAttributes(props);

    const keyTabMove =
      (options: ListOptionsOptionProps[]) =>
      (prevFocus: number, e?: KeyboardEvent): number => {
        if (e?.shiftKey) {
          const newFocus = Math.max(prevFocus, 0) - 1;
          if (newFocus >= 0) {
            e?.preventDefault();
          }
          return Math.max(newFocus, 0);
        }
        const newFocus = Math.max(prevFocus, 0) + 1;
        if (newFocus <= options.length - 1) {
          e?.preventDefault();
        }
        return Math.min(newFocus, options.length - 1);
      };

    const roveFocusProps = useMemo(
      () => ({
        currentFocusSelected: -1,
        keyDownMove: keyDownMove(listOptions.options),
        keyLeftMove: 0,
        keyRightMove: 0,
        keyTabMove: keyTabMove(listOptions.options),
        keyUpMove,
        size: listOptions.options.length,
      }),
      [listOptions.options],
    );

    return (
      <div
        ref={ref}
        className={cssClasses?.dropdown_selected}
        data-testid={dataTestId}
        role="combobox"
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        {...customProps}
        aria-controls="dropdown-selected-list"
        aria-expanded={open}
        tabIndex={0}
      >
        <CustomComponent
          ref={buttonOrLinkRef}
          aria-controls={ariaControls}
          aria-expanded={open}
          aria-haspopup="listbox"
          className={cssClasses?.buttonorlinkcontainer}
          component={component}
          target={url ? urlTarget : undefined}
          type={url ? undefined : 'button'}
          url={url}
          onClick={onButtonClick}
          onKeyDown={onButtonKeyDown}
        >
          <Text
            additionalClasses={{
              text: open ? cssClasses?.labelopened : cssClasses?.labelclosed,
            }}
            component="span"
            {...processTextProp(label)}
          />
          <ElementOrIcon
            className={open ? cssClasses?.iconopened : cssClasses?.iconclosed}
            rotate={open ? '180deg' : '0deg'}
            transitionDuration="0.2s"
            {...icon}
          />
        </CustomComponent>
        {!!popover && (
          <Popover
            anchorElement={buttonOrLinkRef?.current}
            component="div"
            disableAutoFocusFirstDescendant={true}
            disableAutoFocusFirstDescendantAfterClose={true}
            disableClickOverlayClose={false}
            disableEscapeClose={false}
            disableTrapFocus={true}
            id={ariaControls}
            open={open}
            placement="bottom"
            preventCloseOnClickElements={[buttonOrLinkRef?.current]}
            strategy="absolute"
            {...popover}
            onClose={() => {
              onClosePopover();
              popover?.onClose?.();
            }}
          >
            <div
              className={cssClasses?.listoptionscontainer}
              data-testid={`${dataTestId}-list`}
            >
              {!!listOptions.variant && !!listOptions.optionVariant && (
                <ListOptions
                  ref={listOptionsRef}
                  roveFocus={
                    listOptions.type === 'selection'
                      ? roveFocusProps
                      : undefined
                  }
                  selectedValue={optionSelected}
                  {...listOptions}
                  onOptionClick={(value: string) => {
                    onOptionClick(value);
                    onClosePopover();
                  }}
                />
              )}
            </div>
          </Popover>
        )}
      </div>
    );
  },
);
