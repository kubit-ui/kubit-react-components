import type { DOMAttributes, InputHTMLAttributes, Ref } from 'react';

import type { LabelStandAloneProps } from '@/components/label/types/label';
import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

export type CheckboxCssClasses = ComponentSelected<
  ComponentsTypesComponents['CHECKBOX']
>;

export type CheckboxLabelType = Omit<
  LabelStandAloneProps,
  'children' | 'inputId'
> & {
  content?: string | JSX.Element;
};

export interface CheckboxMessageType {
  message?: CommonTextProps;
  icon?: CommonIconProps;
}

type CheckboxAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-hidden' | 'aria-describedby'
>;

type InputActionsType = Pick<
  DOMAttributes<HTMLInputElement>,
  'onBlur' | 'onChange'
>;

type InputHtmlAttributesType = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'tabIndex'
>;

/**
 * Interface for the checkbox standalone component
 */
export interface CheckboxStandAloneProps
  extends InputActionsType,
    DataAttributes,
    InputHtmlAttributesType,
    CheckboxAriaAttributes {
  cssClasses?: CheckboxCssClasses;
  required?: boolean;
  value?: string;
  name?: string;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  /**
   *  Reference for the CheckboxStyled component (input element)
   */
  inputRef?: Ref<HTMLInputElement>;
  // components
  label?: CheckboxLabelType;
  errorMessage?: CheckboxMessageType;
  checkedIcon?: CommonIconProps;
  checkboxBase?: { variant?: string };
  screenReaderText?: string;
}

/**
 * Interface for the controlled Checkbox component.
 * Extends the CheckboxStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Checkbox
 */
export interface CheckboxControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends CheckboxStandAloneProps {
  variant?: Variant;
  additionalClasses?: Partial<CheckboxCssClasses>;
}

/**
 * Interface for the uncontrolled Checkbox component.
 * Extends the CheckboxProps interface.
 *
 * @template Variant - The type of the variant for the Checkbox
 */
export type CheckboxUnControlledProps<
  Variant = undefined extends string ? unknown : string,
> = CheckboxControlledProps<Variant>;
