import type { AriaAttributes } from 'react';

import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { LabelStandAloneProps } from './../../label/types/label';
import type { RadioButtonStateType } from './state';

type RadioButtonCssClasses = ComponentSelected<
  ComponentsTypesComponents['RADIO_BUTTON']
>;

/**
 * Represents the type for the label in the RadioButton component.
 */
export type RadioButtonLabelProps = Omit<
  LabelStandAloneProps,
  'children' | 'inputId'
> & {
  content?: string;
};

/**
 * Represents the ARIA attributes for the RadioButton component.
 */
export type RadioButtonAriaProps = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-hidden'
>;

/**
 * Interface for the standalone RadioButton component.
 * Includes properties for state, labels, event handlers, and CSS classes.
 */
export interface RadioButtonStandAloneProps
  extends RadioButtonAriaProps, DataAttributes {
  cssClasses?: RadioButtonCssClasses;
  checked?: boolean;
  name?: string;
  label?: RadioButtonLabelProps;
  errorMessage?: string;
  errorIcon?: CommonIconProps;
  errorAriaLiveType?: AriaAttributes['aria-live'];
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  subTitle?: CommonTextProps;
  state: RadioButtonStateType;
  error?: boolean;
  disabled?: boolean;
  value?: string | number;
  screenReaderId?: string;
  id?: string;
  tabIndex?: number;
  lastChild?: boolean;
  altVariant?: boolean;
}

/**
 * Interface for the RadioButton component with a variant.
 * Extends the RadioButtonStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the RadioButton.
 */
export interface RadioButtonProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<RadioButtonStandAloneProps, 'state'> {
  variant?: Variant;
  additionalClasses?: Partial<RadioButtonCssClasses>;
}
