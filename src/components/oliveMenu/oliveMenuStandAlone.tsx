import * as React from 'react';

import { ActionBottomSheetControlledStructure } from '@/components/actionBottomSheet/actionBottomSheetControlled';
import { Button } from '@/components/button/button';
import { ListOptions, ListOptionsType } from '@/components/listOptions';
import { PopoverControlled as Popover, PopoverComponentType } from '@/components/popover';
import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { TextComponentType } from '@/components/text/types';
import { useId } from '@/hooks';
import { AriaLiveOptionType, DeviceBreakpointsType } from '@/types';

import { ButtonContainer, ListboxStyled, OliveMenuStyled } from './oliveMenu.styled';
import { IOliveMenuStandAlone } from './types';
import { getAriaControls } from './utils';

const OliveMenuStandAloneComponent = (
  props: IOliveMenuStandAlone,
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

  return (
    <OliveMenuStyled
      ref={ref}
      data-testId={`${props.dataTestId}Container`}
      styles={props.styles}
      onBlur={props.onBlur}
    >
      {props.trigger?.content &&
        (props.styles.button?.[props.device]?.size || props.trigger?.size) && (
          <ButtonContainer ref={buttonRef} styles={props.styles}>
            <Button
              aria-controls={props.open ? getAriaControls(props.sections, ariaControls) : undefined}
              aria-expanded={props.open}
              dataTestId={`${props.dataTestId}Button`}
              size={props.styles.button?.[props.device]?.size}
              {...props.trigger}
            >
              {props.trigger?.content}
            </Button>
          </ButtonContainer>
        )}
      <ScreenReaderOnly
        ariaLive={AriaLiveOptionType.POLITE}
        dataTestId={`${props.dataTestId}ScreenReader`}
      >
        {props.screenReaderText}
      </ScreenReaderOnly>
      <Popover
        aria-labelledby={popoverAsModal ? titleId : undefined}
        aria-modal={popoverAsModal ? props.open : undefined}
        // It is handled internally by the onBlur function of the container
        clickOverlayClose={false}
        component={popoverAsModal ? PopoverComponentType.DIALOG : PopoverComponentType.DIV}
        dataTestId={`${props.dataTestId}Popover`}
        extraAlignGap={props.styles.buttonContainer?.[props.device]?.margin_bottom}
        focusFirstDescendantAutomatically={popoverAsModal}
        focusLastElementFocusedAfterClose={popoverAsModal}
        hasBackDrop={true}
        open={props.open}
        // It is handled internally by the controlled component to allow close when the focus is on the button
        pressEscapeClose={false}
        trapFocusInsideModal={popoverAsModal}
        variant={props.styles.popoverVariant}
        {...props.popover}
      >
        <ActionBottomSheetControlledStructure
          dataTestId={`${props.dataTestId}ActionButtonSheet`}
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
                  dataTestId={props.dataTestId}
                  id={`${ariaControls}${index}`}
                  optionVariant={props.styles.listOptions?.optionVariant as string}
                  selectedValue={props.selectedValue}
                  title={{ component: TextComponentType.H6, ...title }}
                  type={ListOptionsType.NAVIGATION}
                  variant={props.styles.listOptions?.variant as string}
                  onOptionClick={props.onOptionClick}
                  {...section}
                />
              ))}
          </ListboxStyled>
        </ActionBottomSheetControlledStructure>
      </Popover>
    </OliveMenuStyled>
  );
};

export const OliveMenuStandAlone = React.forwardRef(OliveMenuStandAloneComponent);
