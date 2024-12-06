import React from 'react';

import { POSITIONS } from '@/types/positions/positions';
import { ROLES } from '@/types/role/role';

import { SliderContainerStyled, ToggleWrapperStyled } from '../../toggle.styled';
import { IToggleStandAlone } from '../../types/toggle';
import { ToggleContent } from './toggleContent';

interface IToggleTwoPosition extends Omit<IToggleStandAlone, 'hasThreePositions'> {}

const ToggleTwoPositionComponent = (
  { dataTestId = 'toggle', ...props }: IToggleTwoPosition,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <ToggleWrapperStyled
      ref={ref}
      aria-checked={props.togglePosition === POSITIONS.RIGHT}
      aria-describedby={props['aria-describedby']}
      aria-label={props['aria-label']}
      aria-labelledby={props['aria-labelledby']}
      data-testid={dataTestId}
      disabled={props.disabled}
      hasThreePositions={false}
      id={props.id}
      role={ROLES.SWITCH}
      styles={props.styles}
      tabIndex={!props.disabled ? (props.tabIndex ?? 0) : undefined}
      togglePosition={props.togglePosition}
      onClick={e => {
        e.persist();
        const newPosition =
          props.togglePosition === POSITIONS.RIGHT ? POSITIONS.LEFT : POSITIONS.RIGHT;
        props.onClick?.(e, newPosition);
      }}
      onKeyDown={e => {
        e.persist();
        props.onKeyDown?.(e);
      }}
    >
      <ToggleContent {...props} dataTestId={dataTestId} position={POSITIONS.LEFT} />
      <ToggleContent {...props} dataTestId={dataTestId} position={POSITIONS.RIGHT} />
      <SliderContainerStyled
        aria-hidden="true"
        data-testid={`${dataTestId}-thumb`}
        hasThreePositions={false}
        styles={props.styles}
        togglePosition={props.togglePosition}
      />
    </ToggleWrapperStyled>
  );
};

export const ToggleTwoPosition = React.forwardRef(ToggleTwoPositionComponent);
