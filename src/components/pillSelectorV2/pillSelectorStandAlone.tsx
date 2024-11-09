import React from 'react';

import { Pill as PillV2 } from '../pillV2/pill';
import { PillType } from '../pillV2/types/pillType';
import { RootContainerStyled } from './pillSelector.styled';
import { IPillSelectorStandAlone } from './types/pillSelector';
import { PillSelectorType } from './types/pillSelectorType';

const PillSelectorStandAloneComponent = (
  { dataTestId = 'pill-selector', ...props }: IPillSelectorStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <RootContainerStyled ref={ref} data-testid={dataTestId} styles={props.styles}>
      {props.pills?.map((pill, index) => {
        const selected =
          props.type === PillSelectorType.SELECTOR_MULTIPLE
            ? pill.value !== undefined &&
              Array.isArray(props.value) &&
              props.value.includes(pill.value)
            : pill.value === props.value;
        return (
          <PillV2
            key={index}
            dataTestId={pill.dataTestId}
            disabled={pill.disabled ?? props.disabled}
            label={pill.label}
            leftIcon={pill.icon}
            name={props.name}
            rightIcon={selected ? props.selectedIcon : undefined}
            selected={selected}
            size={pill.size ?? props.styles?.pill?.size}
            type={
              props.type === PillSelectorType.SELECTOR_MULTIPLE
                ? PillType.SELECTOR_MULTIPLE
                : PillType.SELECTOR_SIMPLE
            }
            value={pill.value}
            variant={pill.variant ?? props.styles?.pill?.variant}
            onChange={props.onPillChange}
          />
        );
      })}
    </RootContainerStyled>
  );
};

export const PillSelectorStandAlone = React.forwardRef(PillSelectorStandAloneComponent);
