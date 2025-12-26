import type { AriaAttributes } from 'react';

import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';
import type { TextAreaStateType } from './state';

export type TextAreaCssClasses = ComponentSelected<
  ComponentsTypesComponents['TEXT_AREA']
>;
/**
 * Represents the styles and state for the TextArea component.
 */
export interface TextAreaStyledProps {
  styles?: TextAreaCssClasses;
  state: TextAreaStateType;
}

/**
 * Interface for the standalone TextArea component.
 * Includes properties for labels, state, event handlers, and CSS classes.
 */
export interface TextAreaStandAloneProps
  extends TextAreaStyledProps,
    DataAttributes {
  cssClasses?: TextAreaCssClasses;
  label: CommonTextProps;
  additionalInfo?: React.ReactNode;
  placeholder: string;
  maxLength: number;
  screenReaderTextCount: string;
  onFocus: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
  id?: string;
  required?: boolean;
  title?: CommonTextProps;
  errorIcon?: ElementOrIconProps;
  value?: string;
  errorMessage?: CommonTextProps;
  errorAriaLiveType?: AriaAttributes['aria-live'];
  helpMessage?: CommonTextProps;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  height?: string;
  spellCheck?: boolean;
  labelInsideTextArea?: boolean;
  counterVariant: string;
}

/**
 * Interface for the TextArea component with a variant.
 * Extends the TextAreaStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the TextArea.
 */
export interface TextAreaProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<
    TextAreaStandAloneProps,
    'cssClasses' | 'state' | 'onFocus' | 'onBlur'
  > {
  variant?: Variant;
  disabled?: boolean;
  error?: boolean;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  additionalClasses?: Partial<TextAreaCssClasses>;
}
