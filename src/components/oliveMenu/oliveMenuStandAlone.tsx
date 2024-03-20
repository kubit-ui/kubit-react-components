import * as React from 'react';

import { ActionBottomSheetControlledStructure } from '@/components/actionBottomSheet/actionBottomSheetControlled';
import { Button } from '@/components/button';
import { ListOptions, ListOptionsType } from '@/components/listOptions';
import { PopoverControlled as Popover } from '@/components/popover';
import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { TextComponentType } from '@/components/text/types';
import { useId, useMediaDevice } from '@/hooks';
import { AriaLiveOptionType } from '@/types';

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
  const device = useMediaDevice();

  const { title: actionBottomSheetTitle, ...actionBottomSheet } =
    props.actionBottomSheetStructure ?? {};

  return (
    <OliveMenuStyled ref={ref} styles={props.styles}>
      {props.trigger?.content && (props.styles.button?.[device]?.size || props.trigger?.size) && (
        <ButtonContainer ref={buttonRef} styles={props.styles}>
          <Button
            aria-controls={props.open ? getAriaControls(props.sections, ariaControls) : undefined}
            aria-expanded={props.open}
            dataTestId={`${props.dataTestId}Button`}
            size={props.styles.button?.[device]?.size}
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
        dataTestId={`${props.dataTestId}Popover`}
        extraAlignGap={props.styles.buttonContainer?.[device]?.margin_bottom}
        hasBackDrop={true}
        open={props.open}
        preventCloseOnClickElements={[buttonRef.current]}
        trapFocusInsideModal={true}
        variant={props.styles.popoverVariant}
        {...props.popover}
      >
        <ActionBottomSheetControlledStructure
          dataTestId={`${props.dataTestId}ActionButtonSheet`}
          title={{
            component: TextComponentType.H5,
            align: props.styles.actionBottomSheet?.[device]?.alignTitle,
            ...actionBottomSheetTitle,
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
