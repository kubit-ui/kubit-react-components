import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Label } from '@/components/label';
import { Text, TextComponentType } from '@/components/text';
import { useId } from '@/hooks/useId/useId';
import { AriaLiveOptionType } from '@/types/ariaLiveOption';

import { ScreenReaderOnly } from '../screenReaderOnly';
import {
  CheckboxContainerStyled,
  CheckboxFrameStyled,
  CheckboxHelpContentStyled,
  CheckboxHelpContentTextStyled,
  CheckboxHelperContentStyled,
  CheckboxIconLabelWrapperStyled,
  CheckboxStyled,
  CheckedIcon,
} from './checkbox.styled';
import { CheckboxErrorStandAlone } from './components';
import { ICheckboxStandAlone } from './types';
import { buildAriaDescribedBy, checkboxState } from './utils';

const CURSOR_POINTER = 'pointer';
const CURSOR_DEFAULT = 'default';

const CheckboxStandAloneComponent = (
  {
    state,
    required,
    id,
    name,
    onBlur,
    onChange,
    styles,
    value,
    label,
    errorMessage,
    checkedIcon,
    errorIcon,
    errorAriaLiveType = AriaLiveOptionType.ASSERTIVE,
    helperContent,
    dataTestId,
    helperText,
    extraAriaDescribedBy = '',
    screenReaderText,
    ...props
  }: ICheckboxStandAlone,
  ref: React.ForwardedRef<HTMLInputElement> | undefined | null
): JSX.Element => {
  const uniqueId = useId('checkbox');
  const { isChecked, isDisabled, hasError } = checkboxState(state);

  const checkBoxId = id ?? uniqueId;
  const checkBoxLabelId = `${checkBoxId}Label`;
  const checkBoxkHelpContentId = `${checkBoxId}HelpContent`;
  const checkBoxErrorId = `${checkBoxId}Error`;
  const screenReaderId = `${checkBoxId}ScreenReader`;

  const labelTypography = helperContent?.content ? styles?.specialLabel : styles?.label;
  const helperTextTypography = helperContent?.content
    ? styles?.specialHelperText
    : styles?.helperText;

  const getLabel = () => {
    return (
      <>
        {typeof label?.content === 'string' ? (
          <Label
            color={labelTypography?.color}
            cursor={isDisabled ? CURSOR_DEFAULT : CURSOR_POINTER}
            dataTestId={`${dataTestId}Label`}
            id={checkBoxLabelId}
            inputId={checkBoxId}
            required={required}
            textVariant={labelTypography?.font_variant}
            weight={labelTypography?.font_weight}
            {...label}
          >
            {label.content}
          </Label>
        ) : (
          label?.content
        )}
      </>
    );
  };

  const getContent = () => {
    return (
      <>
        {helperContent?.content && typeof helperContent.content !== 'string' ? (
          <CheckboxHelpContentStyled id={checkBoxkHelpContentId}>
            {helperContent.content}
          </CheckboxHelpContentStyled>
        ) : (
          <CheckboxHelpContentTextStyled id={checkBoxkHelpContentId} styles={styles}>
            <Text
              component={TextComponentType.SMALL}
              customTypography={styles?.helpContent}
              dataTestId={`${dataTestId}Description`}
              id={`${checkBoxId}Description`}
              {...helperContent}
            >
              {helperContent?.content}
            </Text>
            <Text
              color={helperTextTypography?.color}
              component={TextComponentType.SMALL}
              dataTestId={`${dataTestId}HelperText`}
              id={`${checkBoxId}HelperText`}
              variant={helperTextTypography?.font_variant}
              weight={helperTextTypography?.font_weight}
              {...helperText}
            >
              {helperText?.content}
            </Text>
          </CheckboxHelpContentTextStyled>
        )}
      </>
    );
  };

  return (
    <CheckboxContainerStyled styles={styles}>
      <CheckboxIconLabelWrapperStyled styles={styles}>
        <CheckboxFrameStyled styles={styles}>
          <CheckboxStyled
            ref={ref}
            aria-describedby={buildAriaDescribedBy({
              extraAriaDescribedBy,
              label: label?.content,
              checkBoxLabelId,
              helpContent: helperContent?.content,
              checkBoxkHelpContentId,
              hasError,
              errorText: errorMessage?.content,
              checkBoxErrorId,
              screenReaderText,
              screenReaderId,
            })}
            aria-invalid={hasError}
            aria-label={props['aria-label']}
            aria-labelledby={props['aria-labelledby']}
            checked={isChecked}
            data-testid={`${dataTestId}Input`}
            disabled={isDisabled}
            id={checkBoxId}
            name={name}
            required={required}
            styles={styles}
            type="checkbox"
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
          <CheckedIcon $isChecked={isChecked} styles={styles}>
            <ElementOrIcon color={styles?.checkedIcon?.color} complex={true} {...checkedIcon} />
          </CheckedIcon>
          <ScreenReaderOnly dataTestId={`${dataTestId}ScreenReader`} id={screenReaderId}>
            {screenReaderText}
          </ScreenReaderOnly>
        </CheckboxFrameStyled>
        {getLabel()}
      </CheckboxIconLabelWrapperStyled>
      <CheckboxHelperContentStyled styles={styles}>
        <CheckboxErrorStandAlone
          dataTestId={`${dataTestId}ErrorMessage`}
          error={hasError}
          errorAriaLiveType={errorAriaLiveType}
          errorIcon={errorIcon}
          errorMessage={errorMessage}
          id={checkBoxErrorId}
          styles={styles}
        />
        {getContent()}
      </CheckboxHelperContentStyled>
    </CheckboxContainerStyled>
  );
};

/**
 * @description
 * Checkbox component is a input component that can be used to select one or more options from a list of options.
 * It can be used to create a list of options that can be selected.
 * @param {React.PropsWithChildren<ICheckboxStandAlone>} props
 * @returns {JSX.Element}
 * @constructor
 */
export const CheckboxStandAlone = React.forwardRef(CheckboxStandAloneComponent);
