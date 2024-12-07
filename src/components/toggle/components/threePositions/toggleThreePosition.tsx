import React from 'react';

import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';
import { POSITIONS } from '@/types/positions/positions';

import { ScreenReaderOnly } from '../../../screenReaderOnly/screenReaderOnly';
import { SliderContainerStyled, ToggleWrapperStyled } from '../../toggle.styled';
import { IToggleStandAlone } from '../../types/toggle';
import { getScreenReaderText } from '../../utils/getScreenReaderText';
import { ToggleCenterRadioButton } from './toggleCenterRadioButton';
import { ToggleRadioButton } from './toggleRadioButton';

interface IToggleThreePosition extends Omit<IToggleStandAlone, 'hasThreePositions'> {}

const ToggleThreePositionComponent = (
  {
    inputValues = {
      rightInputValue: 'on option',
      centerInputValue: 'undeterminated option',
      leftInputValue: 'off option',
    },
    radioButtonToggleName = 'groupe-toggle',
    blockCenter = false,
    dataTestId = 'toggle',
    ...props
  }: IToggleThreePosition,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <ToggleWrapperStyled
      ref={ref}
      aria-label={props['aria-label']}
      data-testid={dataTestId}
      disabled={props.disabled}
      hasThreePositions={true}
      id={props.id}
      styles={props.styles}
      tabIndex={!props.disabled ? (props.tabIndex ?? 0) : undefined}
      togglePosition={props.togglePosition}
      onKeyDown={e => {
        e.persist();
        props.onKeyDown?.(e);
      }}
    >
      <ScreenReaderOnly ariaLive={AriaLiveOptionType.POLITE}>
        {getScreenReaderText(props.togglePosition, inputValues)}
      </ScreenReaderOnly>
      <ToggleRadioButton
        dataTestId={dataTestId}
        disabled={props.disabled}
        inputValues={inputValues}
        position={POSITIONS.LEFT}
        radioButtonToggleName={radioButtonToggleName}
        screenReaderId={props.screenReaderId}
        styles={props.styles}
        togglePosition={props.togglePosition}
        onClick={props.onClick}
      />
      <ToggleCenterRadioButton
        block={blockCenter}
        dataTestId={dataTestId}
        disabled={props.disabled}
        inputValues={inputValues}
        offText={props.offText}
        radioButtonToggleName={radioButtonToggleName}
        screenReaderId={props.screenReaderId}
        styles={props.styles}
        togglePosition={props.togglePosition}
        onClick={props.onClick}
        onText={props.onText}
      />
      <ToggleRadioButton
        dataTestId={dataTestId}
        disabled={props.disabled}
        inputValues={inputValues}
        position={POSITIONS.RIGHT}
        radioButtonToggleName={radioButtonToggleName}
        screenReaderId={props.screenReaderId}
        styles={props.styles}
        togglePosition={props.togglePosition}
        onClick={props.onClick}
      />
      <SliderContainerStyled
        aria-hidden="true"
        data-testid={`${dataTestId}-thumb`}
        hasThreePositions={true}
        styles={props.styles}
        togglePosition={props.togglePosition}
      />
    </ToggleWrapperStyled>
  );
};

export const ToggleThreePosition = React.forwardRef(ToggleThreePositionComponent);
