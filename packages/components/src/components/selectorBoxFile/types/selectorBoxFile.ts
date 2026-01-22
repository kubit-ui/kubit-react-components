import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { SelectorBoxFileStateType } from './state';

export type SelectorBoxFileCssClasses = ComponentSelected<
  ComponentsTypesComponents['SELECTOR_BOX_FILE']
>;

/**
 * Represents the mapping of states to content in the SelectorBoxFile component.
 */
export type SelectorBoxFileContainerBoxStateContentProps = {
  [key in SelectorBoxFileStateType]: {
    icon?: CommonIconProps;
    iconRight?: CommonIconProps;
    actionText?: CommonTextProps;
    actionIcon?: CommonIconProps;
    description?: CommonTextProps;
  };
};

/**
 * Interface for the standalone SelectorBoxFile component.
 * Includes properties for state, event handlers, and CSS classes.
 */
export interface SelectorBoxFileStandAloneProps extends DataAttributes {
  state: SelectorBoxFileStateType;
  containerBoxStateContent: SelectorBoxFileContainerBoxStateContentProps;
  filename?: string;
  focus: boolean;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  id?: string;
  name?: string;
  accept?: string;
  multiple?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onAnimationCompleted?: () => void;
  maxSize?: number;
  fileExtension?: string[];
  loader?: React.ReactNode;
  percentage: number;
  cssClasses?: SelectorBoxFileCssClasses;
}

/**
 * Interface for the SelectorBoxFile component with a variant.
 * Extends the SelectorBoxFileStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the SelectorBoxFile.
 */
export interface SelectorBoxFileProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<
  SelectorBoxFileStandAloneProps,
  'state' | 'focus' | 'onFocus' | 'onBlur' | 'onChange' | 'percentage'
> {
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
  errorMaxSizeMessage?: CommonTextProps;
  errorFileExtensionMessage?: CommonTextProps;
  percentage?: number;
  variant?: Variant;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSizeError?: (status: boolean) => void;
  onFileError?: (status: boolean) => void;
  additionalClasses?: Partial<SelectorBoxFileCssClasses>;
}
