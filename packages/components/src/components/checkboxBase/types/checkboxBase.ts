import type { DOMAttributes, InputHTMLAttributes, Ref } from 'react';

import type { CommonIconProps } from '@/lib/types/commons/icon';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type CheckboxBaseCssClasses = ComponentSelected<
  ComponentsTypesComponents['CHECKBOX_BASE']
>;

type CheckboxBaseAriaAttributesProps = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-hidden' | 'aria-describedby'
>;

type InputActionsProps = Pick<
  DOMAttributes<HTMLInputElement>,
  'onBlur' | 'onChange'
>;

type InputHtmlAttributesProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'tabIndex'
>;

/**
 * Interface for the checkboxBase standalone component
 */
export interface CheckboxBaseStandAloneProps
  extends
    InputActionsProps,
    DataAttributes,
    InputHtmlAttributesProps,
    CheckboxBaseAriaAttributesProps {
  cssClasses?: CheckboxBaseCssClasses;
  required?: boolean;
  value?: string;
  name?: string;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  checkedIcon?: CommonIconProps;
  /**
   *  Reference for the CheckboxStyled component (input element)
   */
  inputRef?: Ref<HTMLInputElement>;
}

/**
 * Interface for the controlled CheckboxBase component.
 * Extends the CheckboxBaseStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the CheckboxBase
 */
export interface CheckboxBaseControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends CheckboxBaseStandAloneProps {
  variant?: Variant;
  error?: boolean;
  additionalClasses?: Partial<CheckboxBaseCssClasses>;
}

/**
 * Interface for the uncontrolled CheckboxBase component.
 * Extends the CheckboxProps interface.
 *
 * @template Variant - The type of the variant for the CheckboxBase
 */
export type CheckboxBaseUnControlledProps<
  Variant = undefined extends string ? unknown : string,
> = CheckboxBaseControlledProps<Variant>;
