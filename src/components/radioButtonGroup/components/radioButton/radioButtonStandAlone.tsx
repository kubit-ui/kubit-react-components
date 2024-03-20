/* eslint-disable complexity */
import * as React from 'react';

import { Label } from '@/components/label';
import { Text } from '@/components/text';
import { useId } from '@/hooks';

import {
  RadioButtonContainerInput,
  RadioButtonContentStyled,
  RadioButtonInputStyled,
  RadioButtonLabelStyled,
  RadioButtonStyled,
} from './radioButton.styled';
import { IRadioButtonStandAlone, RadioButtonStateType } from './types';

const CURSOR_POINTER = 'pointer';
const CURSOR_DEFAULT = 'default';

export const RadioButtonStandAlone = ({
  checked,
  label,
  name,
  id,
  onBlur,
  onChange,
  state = RadioButtonStateType.DEFAULT,
  styles,
  subTitle,
  value,
  dataTestId,
  screenReaderId,
}: IRadioButtonStandAlone): JSX.Element => {
  let inputId = useId('RadioButton');
  inputId = id ?? inputId;
  const descriptionId = subTitle?.content && `${inputId}__description`;
  const isDisabled = state === RadioButtonStateType.DISABLED;

  const getAriaDescribedBy = () => {
    if (descriptionId) {
      return `${descriptionId} ${screenReaderId}`;
    }
    return screenReaderId;
  };

  const getLabelFontWeight = () =>
    subTitle?.content
      ? styles?.[state]?.specialLabel?.font_weight
      : styles?.[state]?.label?.font_weight;

  return (
    <RadioButtonStyled hasLabel={!!label} state={state} styles={styles}>
      <RadioButtonContainerInput styles={styles}>
        <RadioButtonInputStyled
          aria-describedby={screenReaderId && getAriaDescribedBy()}
          checked={checked}
          data-testid={`${dataTestId}Input`}
          disabled={isDisabled}
          id={inputId}
          name={name}
          styles={styles}
          type="radio"
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
      </RadioButtonContainerInput>
      {label?.content && (
        <RadioButtonLabelStyled>
          <Label
            color={styles?.[state]?.label?.color}
            cursor={isDisabled ? CURSOR_DEFAULT : CURSOR_POINTER}
            data-testid={`${dataTestId}Label`}
            inputId={inputId}
            textVariant={styles?.[state]?.label?.font_variant}
            weight={getLabelFontWeight()}
            {...label}
          >
            {label.content}
          </Label>
        </RadioButtonLabelStyled>
      )}

      {subTitle?.content &&
        (typeof subTitle.content === 'string' ? (
          <Text customTypography={styles?.[state]?.sublabel} {...subTitle} id={descriptionId}>
            {subTitle.content}
          </Text>
        ) : (
          <RadioButtonContentStyled id={descriptionId}>{subTitle.content}</RadioButtonContentStyled>
        ))}
    </RadioButtonStyled>
  );
};
