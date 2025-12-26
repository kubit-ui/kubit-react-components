import type { AriaAttributes, DOMAttributes, InputHTMLAttributes } from 'react';

import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type InputBaseCssClasses = ComponentSelected<
  ComponentsTypesComponents['INPUT_BASE']
>;

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

export type InputBaseActionsType = Pick<
  DOMAttributes<HTMLInputElement>,
  'onKeyDown' | 'onFocus' | 'onBlur' | 'onPaste' | 'onCopy'
>;

/**
 * Interface for the standalone InputBase component.
 * Extends `InputHTMLAttributes<HTMLInputElement>`, `AriaAttributes`, and `InputBaseActionsType`.
 * Includes additional properties for styling, standard HTML attributes, non-standard attributes, and testing.
 */
export interface InputBaseStandAloneProps
  extends InputHTMLAttributes<HTMLInputElement>,
    DataAttributes,
    Omit<AriaAttributes, 'aria-invalid'>,
    InputBaseActionsType {
  /** Value to perform truncation logic */
  truncate?: boolean;
  /** HTML Standard attribute to focus automatically
   * once the input is rendered.
   */
  autoFocus?: boolean;
  /** Unique input identifier */
  id?: string;
  autoCapitalize?: AutoCapitalizeType;
  popoverTarget?: string;
  popoverTargetAction?: 'hide' | 'show' | 'toggle';
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}
   */
  inputMode?: InputModeType;
  role?: React.AriaRole;
  cssClasses?: InputBaseCssClasses;
}

/**
 * Interface for the InputBase component with a variant.
 * Extends the InputBaseStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the InputBase.
 */
export interface InputBaseProps<
  Variant = undefined extends string ? unknown : string,
> extends InputBaseStandAloneProps {
  /** Internal state for styles customization and aria-invalid control */
  error?: boolean;
  /** Internal state for styles customization  */
  filled?: boolean;
  /** Internal state for styles customization  */
  focused?: boolean;
  variant?: Variant;
  additionalClasses?: Partial<InputBaseCssClasses>;
}
