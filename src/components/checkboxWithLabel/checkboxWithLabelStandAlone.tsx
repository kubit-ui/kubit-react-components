import * as React from 'react';

import { CheckboxControlled } from '@/components/checkbox';
import { Label } from '@/components/label';
import { Text } from '@/components/text';
import { TextComponentType } from '@/components/text/types';
import { useId } from '@/hooks/useId/useId';

import {
  CheckBoxWithLabelContainerStyled,
  CheckboxWithLabelContentStyled,
  CheckboxWithLabelStyled,
} from './checkboxWithLabelStyled';
import type { ICheckboxWithLabelStandAlone } from './types';

const CheckboxWithLabelStandAloneComponent = <V extends string | unknown>(
  {
    checked,
    description,
    id,
    name,
    value,
    disabled,
    onBlur,
    onChange,
    required,
    styles,
    variant,
    dataTestId,
    state,
    helperText,
    checkedIcon,
    ...props
  }: ICheckboxWithLabelStandAlone<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const uniqueId = useId('checkbox');
  const checkBoxId = id ?? uniqueId;
  const checkBoxDescriptionId = `${checkBoxId}Description`;

  const labelTypography =
    description && styles?.[state]?.labelWhenDescription
      ? styles?.[state]?.labelWhenDescription
      : styles?.[state]?.label;

  return (
    <CheckBoxWithLabelContainerStyled ref={ref} state={state} styles={styles}>
      <CheckboxWithLabelStyled
        data-testid={`${dataTestId}CheckboxWithLabel`}
        state={state}
        styles={styles}
      >
        <CheckboxControlled
          checked={checked}
          checkedIcon={checkedIcon}
          dataTestId={dataTestId}
          disabled={disabled}
          extraAriaDescribedBy={checkBoxDescriptionId}
          id={checkBoxId}
          name={name}
          value={value}
          variant={variant}
          onBlur={onBlur}
          onChange={onChange}
        />

        <Label
          color={labelTypography?.color}
          dataTestId={`${dataTestId}Label`}
          inputId={checkBoxId}
          required={required}
          textVariant={labelTypography?.font_variant}
          weight={labelTypography?.font_weight}
          {...props.label}
        >
          {props.label.content}
        </Label>
      </CheckboxWithLabelStyled>
      {(description?.content || helperText?.content) && (
        <CheckboxWithLabelContentStyled state={state} styles={styles}>
          <Text
            component={TextComponentType.SMALL}
            customTypography={styles?.[state]?.description}
            dataTestId={`${dataTestId}Description`}
            {...description}
          >
            {description?.content}
          </Text>
          <Text
            component={TextComponentType.SMALL}
            customTypography={styles?.[state]?.helperText}
            dataTestId={`${dataTestId}HelperText`}
            {...helperText}
          >
            {helperText?.content}
          </Text>
        </CheckboxWithLabelContentStyled>
      )}
    </CheckBoxWithLabelContainerStyled>
  );
};

const CheckboxWithLabelStandAlone = React.forwardRef(CheckboxWithLabelStandAloneComponent) as <
  V extends string | unknown,
>(
  props: ICheckboxWithLabelStandAlone<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { CheckboxWithLabelStandAlone };
