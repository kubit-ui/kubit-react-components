import type { AriaAttributes, DOMAttributes, InputHTMLAttributes } from 'react';

import type { InputDecorationProps } from '@/components/inputDecoration/types/inputDecoration';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type InputCssClasses = ComponentSelected<ComponentsTypesComponents['INPUT']>;

interface IInputLabelProps {
  variant?: string;
}

export type InputModeType =
  | 'none'
  | 'text'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | 'search';

export type AutoCapitalizeType =
  | 'off'
  | 'none'
  | 'on'
  | 'sentences'
  | 'words'
  | 'characters';

export type InputActionsType = Pick<
  DOMAttributes<HTMLInputElement>,
  'onKeyDown' | 'onFocus' | 'onBlur' | 'onPaste' | 'onCopy'
>;

export interface InputStandAloneProps
  extends DataAttributes,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>,
    Omit<AriaAttributes, 'aria-invalid'>,
    InputActionsType {
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  filled?: boolean;
  required?: boolean;
  rightDecoration?: InputDecorationProps;
  leftDecoration?: InputDecorationProps;
  label?: IInputLabelProps;
  /** Value to perform truncation logic */
  truncate?: boolean;
  /** HTML Standard attribute to focus automatically
   * once the input is rendered.
   */
  autoFocus?: boolean;
  autoCapitalize?: AutoCapitalizeType;
  popoverTarget?: string;
  popoverTargetAction?: 'hide' | 'show' | 'toggle';
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}
   */
  inputMode?: InputModeType;
  role?: React.AriaRole;
  value?: string | number;
  cssClasses?: InputCssClasses;
  inputBaseId: string;
  labelId?: string;
}

type propsToOmit = 'styles' | 'filled' | 'focused' | 'inputBaseId' | 'labelId';

export interface InputProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<InputStandAloneProps, propsToOmit> {
  variant?: Variant;
  additionalClasses?: Partial<InputCssClasses>;
}
