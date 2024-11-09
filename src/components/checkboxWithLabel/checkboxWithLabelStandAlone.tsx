import React from 'react';

import { CheckboxControlled } from '@/components/checkbox/checkboxControlled';
import { LabelStandAlone as Label } from '@/components/label/labelStandAlone';
import { Text } from '@/components/text/text';
import { useId } from '@/hooks/useId/useId';

import { TextComponentType } from '../text/types/component';
import {
  CheckBoxWithLabelContainerStyled,
  CheckboxWithLabelContentStyled,
  CheckboxWithLabelStyled,
} from './checkboxWithLabelStyled';
import type { ICheckboxWithLabelStandAlone } from './types/checkboxWithLabel';

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
    dataTestId = 'checkbox-with-label',
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
    <CheckBoxWithLabelContainerStyled
      ref={ref}
      data-testid={dataTestId}
      state={state}
      styles={styles}
    >
      <CheckboxWithLabelStyled state={state} styles={styles}>
        <CheckboxControlled
          aria-label={props['aria-label']}
          aria-labelledby={props['aria-labelledby']}
          checked={checked}
          checkedIcon={checkedIcon}
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
            {...description}
          >
            {description?.content}
          </Text>
          <Text
            component={TextComponentType.SMALL}
            customTypography={styles?.[state]?.helperText}
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
