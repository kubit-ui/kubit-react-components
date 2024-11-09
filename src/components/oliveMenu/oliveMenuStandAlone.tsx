import React from 'react';

import { ActionBottomSheetControlledStructure } from '@/components/actionBottomSheet/actionBottomSheetControlled';
import { Button } from '@/components/button/button';
import { useId } from '@/hooks/useId/useId';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { ROLES } from '@/types/role/role';

import { AriaLiveOptionType } from '../../types/ariaLiveOption/ariaLiveOption';
import { ListOptions } from '../listOptions/listOptions';
import { ListOptionsType } from '../listOptions/types/type';
import { PopoverControlled } from '../popover/popoverControlled';
import { PopoverComponentType } from '../popover/types/component';
import { ScreenReaderOnly } from '../screenReaderOnly/screenReaderOnly';
import { TextComponentType } from '../text/types/component';
import { ButtonContainer, ListboxStyled, OliveMenuStyled } from './oliveMenu.styled';
import { IOliveMenuStandAlone } from './types/oliveMenu';
import { getAriaControls } from './utils/getAriaControls';

const OliveMenuStandAloneComponent = (
  { dataTestId = 'olive-menu', ...props }: IOliveMenuStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const uniqueId = useId('oliveMenu');
  const buttonRef = React.useRef(null);
  const ariaControls = `${uniqueId}List`;

  const popoverAsModal = [DeviceBreakpointsType.MOBILE, DeviceBreakpointsType.TABLET].includes(
    props.device
  );

  const { title: actionBottomSheetTitle, ...actionBottomSheet } =
    props.actionBottomSheetStructure ?? {};

  const titleId = actionBottomSheetTitle?.id ?? `${uniqueId}Title`;

  const ariaControlIds = getAriaControls(props.sections, ariaControls);

  return (
    <OliveMenuStyled ref={ref} data-testid={dataTestId} styles={props.styles} onBlur={props.onBlur}>
      {props.trigger?.content &&
        (props.styles.button?.[props.device]?.size || props.trigger?.size) && (
          <ButtonContainer ref={buttonRef} styles={props.styles}>
            <Button
              aria-controls={props.open ? ariaControlIds?.join(' ') : undefined}
              aria-expanded={props.open}
              size={props.styles.button?.[props.device]?.size}
              {...props.trigger}
            >
              {props.trigger?.content}
            </Button>
          </ButtonContainer>
        )}
      <ScreenReaderOnly ariaLive={AriaLiveOptionType.POLITE}>
        {props.screenReaderText}
      </ScreenReaderOnly>
      <PopoverControlled
        aria-labelledby={popoverAsModal ? titleId : undefined}
        aria-modal={popoverAsModal ? props.open : undefined}
        clickOverlayClose={true}
        component={PopoverComponentType.DIV}
        extraAlignGap={props.styles.buttonContainer?.[props.device]?.margin_bottom}
        focusFirstDescendantAutomatically={popoverAsModal}
        focusLastElementFocusedAfterClose={popoverAsModal}
        hasBackDrop={true}
        open={props.open}
        // It is handled internally by the controlled component to allow close when the focus is on the button
        pressEscapeClose={false}
        preventCloseOnClickElements={[buttonRef.current]}
        role={popoverAsModal ? ROLES.DIALOG : undefined}
        trapFocusInsideModal={popoverAsModal}
        variant={props.styles.popoverVariant}
        {...props.popover}
      >
        <ActionBottomSheetControlledStructure
          ref={actionBottomSheet.forwardedRef}
          title={{
            component: TextComponentType.H5,
            align: props.styles.actionBottomSheet?.[props.device]?.alignTitle,
            ...actionBottomSheetTitle,
            id: titleId,
          }}
          variant={props.styles.actionBottomSheet?.variant}
          {...actionBottomSheet}
        >
          <ListboxStyled styles={props.styles}>
            {props.styles.listOptions?.optionVariant &&
              props.styles.listOptions?.variant &&
              props.sections?.map(({ title, ...section }, index) => (
                <ListOptions
                  key={section.id}
                  optionVariant={props.styles.listOptions?.optionVariant as string}
                  selectedValue={props.selectedValue}
                  title={{ component: TextComponentType.H6, ...title }}
                  type={ListOptionsType.NAVIGATION}
                  variant={props.styles.listOptions?.variant as string}
                  onOptionClick={props.onOptionClick}
                  {...section}
                  id={ariaControlIds?.[index]}
                />
              ))}
          </ListboxStyled>
        </ActionBottomSheetControlledStructure>
      </PopoverControlled>
    </OliveMenuStyled>
  );
};

export const OliveMenuStandAlone = React.forwardRef(OliveMenuStandAloneComponent);
