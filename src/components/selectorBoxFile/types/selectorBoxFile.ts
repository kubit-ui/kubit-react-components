import { IButton } from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IText } from '@/components/text';
import { ITooltipUnControlled } from '@/components/tooltip/types';
import { CustomTokenTypes } from '@/types';

import { SelectorBoxFilePropsStylesType } from './selectorBoxFileTheme';
import { SelectorBoxFileStateType } from './state';

export type SelectorBoxFileTextType = Omit<IText<string>, 'children'> & {
  content: string;
};

export type SelectorBoxFileButtonType = Omit<IButton, 'children' | 'variant' | 'size'> & {
  content: string;
  variant?: string;
  size?: string;
};

export type SelectorBoxFileTooltipType = Omit<ITooltipUnControlled, 'children' | 'variant'> & {
  variant?: string;
};

export type SelectorBoxFileContainerBoxStateContentType = {
  [key in SelectorBoxFileStateType]: {
    icon?: IElementOrIcon;
    actionText?: SelectorBoxFileTextType;
    actionIcon?: IElementOrIcon;
    description?: SelectorBoxFileTextType;
  };
};

export interface ISelectorBoxFileStandAlone {
  styles: SelectorBoxFilePropsStylesType;
  state: SelectorBoxFileStateType;
  title?: SelectorBoxFileTextType;
  subtitle?: SelectorBoxFileTextType;
  dataTestId?: string;
  tooltipIcon?: IElementOrIcon;
  tooltip?: SelectorBoxFileTooltipType;
  containerBoxStateContent: SelectorBoxFileContainerBoxStateContentType;
  filename?: string;
  errorMessageIcon?: IElementOrIcon;
  errorMessage?: SelectorBoxFileTextType;
  errorMaxSizeMessage?: SelectorBoxFileTextType;
  errorFileExtensionMessage?: SelectorBoxFileTextType;
  focus: boolean;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  id?: string;
  name?: string;
  accept?: string;
  multiple?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  description?: SelectorBoxFileTextType;
  button?: SelectorBoxFileButtonType;
  maxSize?: number;
  fileExtension?: string[];
}

export interface ISelectorBoxFile<V = undefined extends string ? unknown : string>
  extends Omit<
      ISelectorBoxFileStandAlone,
      'styles' | 'state' | 'focus' | 'onFocus' | 'onBlur' | 'onChange'
    >,
    Omit<CustomTokenTypes<SelectorBoxFilePropsStylesType>, 'cts' | 'extraCt'> {
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
  variant: V;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSizeError?: (status: boolean) => void;
  onFileError?: (status: boolean) => void;
}
