import React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { POSITIONS, ROLES } from '@/types';

import {
  IconWrapperStyled,
  SliderContainerStyled,
  ToggleSpanSwitchStyled,
  ToggleWrapperStyled,
} from '../toggle.styled';
import { IToggleStandAlone } from '../types';

interface IToggleTwoPosition extends IToggleStandAlone {}

const ToggleTwoPositionComponent = (
  { ...props }: IToggleTwoPosition,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const buildTextOrIcon = (position: POSITIONS) => {
    const icon = position === POSITIONS.RIGHT ? props.onIcon : props.offIcon;
    return <ElementOrIcon customIconStyles={props.styles?.icon} {...icon} />;
  };

  const buildContent = (position: POSITIONS) => {
    return (
      <>
        <ToggleSpanSwitchStyled
          $height={props.styles?.thumb?.height}
          $width={props.styles?.thumb?.width}
        />
        <IconWrapperStyled
          data-testid={`${props.dataTestId}${position === POSITIONS.RIGHT ? 'On' : 'Off'}Option`}
          hasThreePositions={props.hasThreePositions}
          showLabel={position === props.togglePosition}
          styles={props.styles}
          togglePosition={props.togglePosition}
        >
          {buildTextOrIcon(position)}
        </IconWrapperStyled>
      </>
    );
  };

  return (
    <ToggleWrapperStyled
      ref={ref}
      aria-checked={props.togglePosition === POSITIONS.RIGHT}
      aria-describedby={props['aria-describedby']}
      aria-label={props['aria-label']}
      aria-labelledby={props['aria-labelledby']}
      data-testid={props.dataTestId}
      disabled={props.disabled}
      hasThreePositions={props.hasThreePositions}
      id={props.id}
      role={ROLES.SWITCH}
      styles={props.styles}
      tabIndex={!props.disabled ? (props.tabIndex ?? 0) : undefined}
      togglePosition={props.togglePosition}
      onClick={e => {
        e.persist();
        const newPosition =
          props.togglePosition === POSITIONS.RIGHT ? POSITIONS.LEFT : POSITIONS.RIGHT;
        props.onClick?.(newPosition, e);
      }}
      onKeyDown={e => {
        e.persist();
        props.onKeyDown?.(e);
      }}
    >
      {buildContent(POSITIONS.LEFT)}
      {buildContent(POSITIONS.RIGHT)}
      <SliderContainerStyled
        aria-hidden="true"
        data-testid={`${props.dataTestId}Thumb`}
        hasThreePositions={props.hasThreePositions}
        styles={props.styles}
        togglePosition={props.togglePosition}
        onClick={e => {
          e.persist();
          const newPosition =
            props.togglePosition === POSITIONS.RIGHT ? POSITIONS.LEFT : POSITIONS.RIGHT;
          props.onClick?.(newPosition, e);
        }}
      />
    </ToggleWrapperStyled>
  );
};

export const ToggleTwoPosition = React.forwardRef(ToggleTwoPositionComponent);
