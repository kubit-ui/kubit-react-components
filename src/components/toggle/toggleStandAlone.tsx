import * as React from 'react';

import { InputTypeType } from '@/components/input/types';
import { AriaLiveOptionType } from '@/types';
import { POSITIONS } from '@/types/positions';

import { ElementOrIcon } from '../elementOrIcon';
import { Label } from '../label';
import { ScreenReaderOnly } from '../screenReaderOnly';
import { Text } from '../text';
import { TextComponentType } from '../text/types';
import {
  LabelWrapperStyled,
  SliderContainerStyled,
  TextLeftWrapperStyled,
  TextRightWrapperStyled,
  ToggleRadioSwitchStyled,
  ToggleWrapperStyled,
} from './toggle.styled';
import type { IToggleStandAlone } from './types';

const ToggleStandAloneComponent = (
  {
    inputValues = {
      rightInputValue: 'on option',
      centerInputValue: 'undeterminated option',
      leftInputValue: 'off option',
    },
    radioButtonToggleName = 'groupe-toggle',
    blockCenter = false,
    ...props
  }: IToggleStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const getAltTextIcon = (position: POSITIONS) =>
    position === POSITIONS.CENTER
      ? inputValues.centerIconAltText
      : position === POSITIONS.RIGHT
        ? inputValues.rightIconAltText ?? props.onIcon?.altText
        : inputValues.leftIconAltText ?? props.offIcon?.altText;

  const getScreenReaderText = (position: POSITIONS) =>
    position === POSITIONS.CENTER
      ? inputValues.centerInputValue
      : position === POSITIONS.RIGHT
        ? inputValues.rightInputValue ?? props.onIcon?.altText
        : inputValues.leftInputValue ?? props.offIcon?.altText;

  const buildTextOrIcon = (position: POSITIONS) => {
    const icon = position === POSITIONS.RIGHT ? props.onIcon : props.offIcon;
    return props.hasThreePositions ? (
      <>
        {position === POSITIONS.CENTER
          ? inputValues.centerInputValue
          : position === POSITIONS.RIGHT
            ? props.onText?.content
            : props.offText?.content}
      </>
    ) : (
      <ElementOrIcon
        customIconStyles={props.styles?.icon}
        {...icon}
        altText={getAltTextIcon(position)}
      />
    );
  };

  const getValueOfRadioButton = (position: POSITIONS) => {
    if (position === POSITIONS.RIGHT) {
      return inputValues?.rightInputValue;
    } else if (position === POSITIONS.LEFT) {
      return inputValues?.leftInputValue;
    }
    return inputValues?.centerInputValue;
  };

  const buildRadioButton = (position: POSITIONS, block = false) => {
    return (
      <>
        <ToggleRadioSwitchStyled
          $height={props.styles?.thumb?.height}
          $width={props.styles?.thumb?.width}
          aria-describedby={props.screenReaderId}
          aria-labelledby={props['aria-describedby']}
          disabled={props.disabled}
          id={`${position.toLowerCase()}Input`}
          name={radioButtonToggleName}
          tabIndex={-1}
          type={InputTypeType.RADIO}
          value={getValueOfRadioButton(position)}
          onClick={e => {
            if (!block) {
              e.persist();
              if (!props.hasThreePositions) {
                const newPosition =
                  props.togglePosition === POSITIONS.RIGHT ? POSITIONS.LEFT : POSITIONS.RIGHT;
                props.onClick?.(newPosition, e);
              } else {
                props.onClick?.(position, e);
              }
            }
          }}
        />
        <LabelWrapperStyled
          hasThreePositions={props.hasThreePositions}
          showLabel={position !== POSITIONS.CENTER && position === props.togglePosition}
          styles={props.styles}
          togglePosition={props.togglePosition}
        >
          <Label
            color={props.styles?.label?.color}
            dataTestId={`${props.dataTestId}${
              position === POSITIONS.RIGHT ? 'On' : position === POSITIONS.CENTER ? 'Na' : 'Off'
            }LabelOption`}
            inputId={`${position.toLowerCase()}Input`}
            textVariant={
              (position === POSITIONS.LEFT && props.offText?.content) ||
              (position === POSITIONS.RIGHT && props.onText?.content)
                ? props.styles?.label?.font_variant
                : props.styles?.labelWithIcons?.font_variant
            }
            weight={props.styles?.label?.font_weight}
          >
            {buildTextOrIcon(position)}
          </Label>
        </LabelWrapperStyled>
      </>
    );
  };

  const buildCenterRadioButton = () => (
    <>
      {props.togglePosition === POSITIONS.CENTER && (
        <TextLeftWrapperStyled margin={props.styles?.label?.margin_left}>
          <Text
            aria-hidden={true}
            color={props.styles?.label?.color}
            component={TextComponentType.LABEL}
            dataTestId={`${props.dataTestId}OffLabel`}
            variant={props.styles?.label?.font_variant}
            weight={props.styles?.label?.font_weight}
          >
            {props.offText?.content}
          </Text>
        </TextLeftWrapperStyled>
      )}
      {buildRadioButton(
        POSITIONS.CENTER,
        blockCenter ? props.togglePosition !== POSITIONS.CENTER : false
      )}
      {props.togglePosition === POSITIONS.CENTER && (
        <TextRightWrapperStyled margin={props.styles?.label?.margin_right}>
          <Text
            aria-hidden={true}
            color={props.styles?.label?.color}
            component={TextComponentType.LABEL}
            dataTestId={`${props.dataTestId}OnLabel`}
            variant={props.styles?.label?.font_variant}
            weight={props.styles?.label?.font_weight}
          >
            {props.onText?.content}
          </Text>
        </TextRightWrapperStyled>
      )}
    </>
  );

  return (
    <ToggleWrapperStyled
      ref={ref}
      data-testid={props.dataTestId}
      disabled={props.disabled}
      hasThreePositions={props.hasThreePositions}
      id={props.id}
      styles={props.styles}
      tabIndex={!props.disabled ? 0 : undefined}
      togglePosition={props.togglePosition}
      onKeyDown={e => {
        e.persist();
        props.onKeyDown?.(e);
      }}
    >
      <ScreenReaderOnly ariaLive={AriaLiveOptionType.POLITE}>
        {getScreenReaderText(props.togglePosition)}
      </ScreenReaderOnly>
      {buildRadioButton(POSITIONS.LEFT)}
      {props.hasThreePositions && buildCenterRadioButton()}
      {buildRadioButton(POSITIONS.RIGHT)}
      <SliderContainerStyled
        aria-hidden="true"
        data-testid={`${props.dataTestId}Thumb`}
        hasThreePositions={props.hasThreePositions}
        styles={props.styles}
        togglePosition={props.togglePosition}
        onClick={e => {
          if (!props.hasThreePositions) {
            e.persist();
            const newPosition =
              props.togglePosition === POSITIONS.RIGHT ? POSITIONS.LEFT : POSITIONS.RIGHT;
            props.onClick?.(newPosition, e);
          }
        }}
      />
    </ToggleWrapperStyled>
  );
};

/**
 * @description
 * Toggle component is a component that can be used to switch between two states.
 * @param {React.PropsWithChildren<IToggleStandAlone>} props
 * @returns {JSX.Element}
 */
export const ToggleStandAlone = React.forwardRef(ToggleStandAloneComponent);
