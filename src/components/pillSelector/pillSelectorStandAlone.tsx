import * as React from 'react';

import { Pill } from '@/components/pill';
import { useRoveFocus } from '@/hooks';
import { ROLES } from '@/types';

import { PillSelectorWrapper, ThumbStyled } from './pillSelector.styled';
import type { IPillSelectorStandAlone } from './types';
import { keyLeftMove, keyRightMove } from './utils';

const MAX_PILLS = 3;

const PillSelectorStandAloneComponent = (
  { dataTestId, maxPills = MAX_PILLS, ...props }: IPillSelectorStandAlone,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const roveFocusProps = React.useMemo(
    () => ({
      size: props.pills.length,
      keyDownMove: keyRightMove(props.pills),
      keyUpMove: keyLeftMove(props.pills),
      keyRightMove: keyRightMove(props.pills),
      keyLeftMove: keyLeftMove(props.pills),
      keyTabMove: null,
      currentFocusSelected: -1,
    }),
    [props.pills]
  );
  const [focus, setFocus, listEl] = useRoveFocus(roveFocusProps);

  const isPillSelected = props.pillSelected?.length !== 0;

  React.useImperativeHandle(
    ref,
    () => {
      return listEl.current as HTMLDivElement;
    },
    []
  );

  return (
    <PillSelectorWrapper
      ref={listEl as React.RefObject<HTMLDivElement>}
      data-testid={`${dataTestId}PillSelector`}
      isSelected={isPillSelected}
      role={ROLES.RADIOGROUP}
      styles={props.styles}
    >
      {!props.multiSelect && props.styles?.thumb && (
        <ThumbStyled data-testid={`${dataTestId}Thumb`} styles={props.styles} />
      )}
      {props.pills.length > 1 && props.pills.length <= maxPills
        ? props.pills.map((pill, index) => {
            const pillSelected = props.pillSelected?.includes(pill.value.toString());
            return (
              (props.pillSize || pill?.size) && (
                <Pill
                  key={pill.value}
                  dataTestId={`${dataTestId}Pill${index}`}
                  focus={focus === index}
                  multiSelect={props.multiSelect}
                  name={props.name}
                  selected={pillSelected}
                  size={props.pillSize || ''}
                  tabIndex={pillSelected || (!isPillSelected && index === 0) ? 0 : -1}
                  {...pill}
                  value={pill.value.toString()}
                  variant={props.pillVariant}
                  onFocus={() => {
                    if (index !== focus) {
                      setFocus(index);
                    }
                  }}
                  onPillChange={props.onPillChange}
                >
                  {pill.label}
                </Pill>
              )
            );
          })
        : null}
    </PillSelectorWrapper>
  );
};

export const PillSelectorStandAlone = React.forwardRef(PillSelectorStandAloneComponent);
