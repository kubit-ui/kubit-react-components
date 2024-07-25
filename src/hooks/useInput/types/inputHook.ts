import {
  ChangeEventHandler,
  FocusEventHandler,
  ForwardedRef,
  KeyboardEventHandler,
  MutableRefObject,
} from 'react';

import { FormatNumber, InputState, InputTypeType, MASK_TYPE } from '@/components/input/types';

export type ParamsTypeInputHook = {
  ref?: ForwardedRef<HTMLInputElement | undefined>;
  errorExecution?: string;
  internalErrorExecution?: string;
  keyValidation?: string;
  disabledArrowUpDownInputNumber?: boolean;
  disabledWheelMouse?: boolean;
  disabledCopyAndPaste?: boolean;
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
  mask?: string;
  maskType?: MASK_TYPE;
  regex?: string | RegExp;
  disabled?: boolean;
  error?: boolean;
  currentValue?: string | number;
  type?: InputTypeType;
  maxDecimals?: number;
  truncate?: boolean;
  informationAssociated?: string;
  ignoreKeys?: string[];
  formatNumber?: FormatNumber;
  locale?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onError?: (value: boolean) => void;
  onInternalErrors?: (errors: string[]) => void;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
};

export type ReturnTypeInputHook = {
  value: string | number;
  state: InputState;
  inputRef?: MutableRefObject<HTMLInputElement | undefined>;
  handleBlurInternal: FocusEventHandler<HTMLInputElement>;
  handleChangeInternal: ChangeEventHandler<HTMLInputElement>;
  handleFocusInternal: FocusEventHandler<HTMLInputElement>;
  handleKeyDownInternal: KeyboardEventHandler<HTMLInputElement>;
  handleSetValue: React.Dispatch<React.SetStateAction<string | number>>;
  handlePasteInternal: React.ClipboardEventHandler<HTMLInputElement>;
};
