import React from 'react';

import { InputTypeType } from '@/components/input/types/inputType';
import { LabelStandAlone as Label } from '@/components/label/labelStandAlone';
import { POSITIONS } from '@/types/positions/positions';

import { LabelWrapperStyled, ToggleRadioSwitchStyled } from '../../toggle.styled';
import { IToggleStandAlone } from '../../types/toggle';
import { getTextOrIcon } from '../../utils/getTextOrIcon';
import { getValueOfRadioButton } from '../../utils/getValueOfRadioButton';

type ITextOrIcon = Pick<
  IToggleStandAlone,
  | 'styles'
  | 'togglePosition'
  | 'screenReaderId'
  | 'disabled'
  | 'inputValues'
  | 'radioButtonToggleName'
  | 'onClick'
  | 'dataTestId'
  | 'offText'
  | 'onText'
> & { position: POSITIONS; block?: boolean };

export const ToggleRadioButton = ({ block = false, ...props }: ITextOrIcon): JSX.Element => {
  return (
    <>
      <ToggleRadioSwitchStyled
        $height={props.styles?.thumb?.height}
        $width={props.styles?.thumb?.width}
        aria-describedby={props.screenReaderId}
        aria-labelledby={props['aria-describedby']}
        disabled={props.disabled}
        id={`${props.position.toLowerCase()}Input`}
        name={props.radioButtonToggleName}
        tabIndex={-1}
        type={InputTypeType.RADIO}
        value={getValueOfRadioButton(props.position, props.inputValues)}
        onClick={e => {
          if (!block) {
            e.persist();
            props.onClick?.(e, props.position);
          }
        }}
      />
      <LabelWrapperStyled
        hasThreePositions={true}
        showLabel={props.position !== POSITIONS.CENTER && props.position === props.togglePosition}
        styles={props.styles}
        togglePosition={props.togglePosition}
      >
        <Label
          color={props.styles?.label?.color}
          dataTestId={`${props.dataTestId}-${
            props.position === POSITIONS.RIGHT
              ? 'on'
              : props.position === POSITIONS.CENTER
                ? 'Na'
                : 'off'
          }-label-option`}
          inputId={`${props.position.toLowerCase()}Input`}
          textVariant={
            (props.position === POSITIONS.LEFT && props.offText?.content) ||
            (props.position === POSITIONS.RIGHT && props.onText?.content)
              ? props.styles?.label?.font_variant
              : props.styles?.labelWithIcons?.font_variant
          }
          weight={props.styles?.label?.font_weight}
        >
          {<>{getTextOrIcon(props.position, props.inputValues, props.offText, props.onText)}</>}
        </Label>
      </LabelWrapperStyled>
    </>
  );
};
