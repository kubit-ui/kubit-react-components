import * as React from 'react';

import { PillTypeV2, PillV2 } from '@/components/pillV2';

import { RootContainerStyled } from './pillSelector.styled';
import { IPillSelectorStandAlone, PillSelectorType } from './types';

const PillSelectorStandAloneComponent = (
  { dataTestId = 'pillSelector', ...props }: IPillSelectorStandAlone,
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
                ? PillTypeV2.SELECTOR_MULTIPLE
                : PillTypeV2.SELECTOR_SIMPLE
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
