import {
  ChangeEvent,
  ChangeEventHandler,
  ClipboardEventHandler,
  FocusEventHandler,
  ForwardedRef,
  KeyboardEventHandler,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useInternalValidations } from '@/components/input/hooks';
import {
  INTERNAL_ERROR_EXECUTION,
  InputState,
  InputTypeType,
  InternalErrorType,
} from '@/components/input/types';
import { useCustomHeightFromChildrens, useMediaDevice } from '@/hooks';
import { useInput } from '@/hooks/useInput/useInput';
import {
  dispatchSyntheticEvent,
  isArrowDownPressed,
  isArrowUpPressed,
  isKeyEscapePressed,
  matchInputValue,
} from '@/utils';

// helpers
import { filterOptions, hasMatchWithOptions } from '../helpers/filterOptions';
import { InputSearchStylesProps } from '../types';
import { IOptionGroup, SearchFilterConfig } from '../types/inputSearch';

export interface MultipleRef {
  refInput?: MutableRefObject<HTMLInputElement | undefined>;
  refList: ForwardedRef<unknown> | (({ ref, index }) => void);
  refIcon: MutableRefObject<HTMLSpanElement | undefined>;
  refActionBottomSheet: React.ForwardedRef<HTMLDivElement> | undefined | null;
}

type ParamsType = {
  ref?: ForwardedRef<HTMLInputElement | undefined>;
  open: boolean;
  styles?: InputSearchStylesProps;
  elementsToShow: number;
  options: IOptionGroup[];
  type: InputTypeType;
  value?: string;
  regex?: string | RegExp;
  disabled?: boolean;
  error?: boolean;
  hasResultTextWrittenByUser?: boolean;
  disableErrorInvalidOption?: boolean;
  clearTextInputPopoverIconClick?: boolean;
  highlightedOption?: string;
  informationAssociated?: string;
  maxLength?: number;
  searchFilterConfig?: SearchFilterConfig;
  caseSensitive?: boolean;
  internalErrorExecution?: INTERNAL_ERROR_EXECUTION;
  disabledCopyAndPaste?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
  executeInternalOpenOptions?: boolean;
  onInputPopoverIconClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onPopoverOpen?: (open: boolean) => void;
  onInternalErrors?: (errors: string[]) => void;
  onOptionClick?: (value: string) => void;
  onPaste?: ClipboardEventHandler<HTMLInputElement>;
  onRightIconClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ReturnType = {
  ref?: MultipleRef;
  listOptionsHeight: string;
  openOptions: boolean;
  showHighlightedOption: boolean;
  searchText: string;
  inputPopoverText: string;
  optionsFiltered: IOptionGroup[];
  handleOpenOptions: (open: boolean) => void;
  handleClickInputSearch: React.MouseEventHandler<HTMLInputElement>;
  handleIconClick: React.MouseEventHandler<HTMLButtonElement>;
  handleInputPopoverIconClick: () => void;
  handleValueSelected: (value) => void;
  handleChangeInputSearch: ChangeEventHandler<HTMLInputElement>;
  handleInputKeyDown: KeyboardEventHandler<HTMLInputElement>;
  handleInputPopoverKeyDown: KeyboardEventHandler<HTMLInputElement>;
  state: InputState;
  handleBlurInternal: FocusEventHandler<HTMLInputElement>;
  handleFocusInternal: FocusEventHandler<HTMLInputElement>;
  handleInputPopoverChange: ChangeEventHandler<HTMLInputElement>;
  handleOptionsListKeyDown: KeyboardEventHandler<HTMLDivElement>;
  handlePasteInternal: ClipboardEventHandler<HTMLInputElement>;
  handleRightIconClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const useInputSearch = ({
  executeInternalOpenOptions = true,
  ...props
}: ParamsType): ReturnType => {
  const device = useMediaDevice();

  const [openOptions, setOpenOptions] = useState(props.open);
  const [searchText, setSearchText] = useState(props.value ?? '');

  const [inputPopoverText, setInputPopoverText] = useState('');
  const [showHighlightedOption, setShowHighlightedOption] = useState(!!props.highlightedOption);

  // References
  const iconRef = useRef<HTMLElement>();

  const { internalErrors, addInternalError, removeInternalError } = useInternalValidations(
    props.type,
    undefined,
    props.onInternalErrors
  );

  // Methods
  const handleValueSelected = (value: string) => {
    setSearchText(value);
    setInputPopoverText(value);
    props.onOptionClick?.(value);
    removeInternalError(InternalErrorType.INVALID_OPTION);
    showHighlightedOption && setShowHighlightedOption(false);
    const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
    if (props.onChange && inputRef?.current && isBrowser) {
      // Need to have the current input value into dispatch synthetic event
      inputRef.current.value = value;
      const event = dispatchSyntheticEvent({
        element: inputRef.current as HTMLElement,
        eventType: 'change',
      });
      props.onChange(event as unknown as ChangeEvent<HTMLInputElement>);
    }
  };

  const handleOpenOptions = (open: boolean) => {
    setOpenOptions(prevOpen => {
      if (prevOpen !== open) {
        props.onPopoverOpen?.(open);
      }
      return open;
    });
  };

  // Input search handlers
  const handleChangeInputSearch: ChangeEventHandler<HTMLInputElement> = event => {
    handleOpenOptions(true);

    if (props.regex) {
      const newMaskedValue = matchInputValue(searchText, event.target.value, props.regex);
      event.target.value = newMaskedValue;
    }

    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    setInputPopoverText(newSearchText);

    showHighlightedOption && setShowHighlightedOption(false);
    removeInternalError(InternalErrorType.INVALID_OPTION);

    props.onChange?.(event);
  };

  const handleClickInputSearch: React.MouseEventHandler<HTMLInputElement> = event => {
    handleOpenOptions(!openOptions);
    props.onClick?.(event);
  };

  const handleIconClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    executeInternalOpenOptions && handleOpenOptions(!openOptions);
    props.onIconClick?.(e);
  };

  const handleRightIconClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    executeInternalOpenOptions && handleOpenOptions(!openOptions);
    props.onRightIconClick?.(e);
  };

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
    if (isKeyEscapePressed(event.key)) {
      handleOpenOptions(false);
    }
    // Focus first element of the list
    if (isArrowDownPressed(event.key)) {
      (optionsListCollectionRef?.current?.[0]?.firstElementChild as HTMLElement)?.focus();
      event.preventDefault();
    }
    props.onKeyDown?.(event);
  };

  const handleInputBlur = event => {
    props.onBlur?.(event);
    const allOptions = props.options.map(option => option.options).flat();
    const hasMatch = hasMatchWithOptions(searchText, allOptions, props.caseSensitive);
    // if the input loses focus and there is no valid option in the input value, show an error message
    if (!hasMatch && !props.hasResultTextWrittenByUser && !props.disableErrorInvalidOption) {
      addInternalError(InternalErrorType.INVALID_OPTION);
    }
  };

  // Input popover handlers
  const handleInputPopoverChange: ChangeEventHandler<HTMLInputElement> = event => {
    props.onChange?.(event);
    setInputPopoverText(event.target.value);
  };

  const handleInputPopoverKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
    // Focus first element of the list
    if (isArrowDownPressed(event.key)) {
      (optionsListCollectionRef?.current?.[0]?.firstElementChild as HTMLElement)?.focus();
      event.preventDefault();
    }
  };

  const handleInputPopoverIconClick = () => {
    props.onInputPopoverIconClick?.();
    if (props.clearTextInputPopoverIconClick) {
      setInputPopoverText('');
    }
  };

  // OnKeyDown list
  const handleOptionsListKeyDown: KeyboardEventHandler<HTMLDivElement> = event => {
    let selectedOption = 0;
    const options = document.querySelectorAll('[role="option"]');

    const getSelectedIndex = (operator: number) => {
      event.preventDefault();
      for (let i = 0; i < options.length; i++) {
        if (options[i] === document.activeElement) {
          selectedOption = i + operator;
        }
      }
      // Focus the item
      (options[selectedOption] as HTMLElement).focus();
    };

    // When arrow down
    if (isArrowDownPressed(event.key)) {
      getSelectedIndex(1);
    } else if (isArrowUpPressed(event.key)) {
      // When arrow up
      getSelectedIndex(-1);
    }
  };

  // Input Basic hook
  const { state, inputRef, handleBlurInternal, handleFocusInternal, handlePasteInternal } =
    useInput({
      internalErrorExecution: props.internalErrorExecution,
      ref: props.ref,
      disabled: props.disabled,
      error: props.error || internalErrors.length > 0,
      maxLength: props.maxLength,
      // need for update the state
      currentValue: searchText,
      informationAssociated: props.informationAssociated,
      disabledCopyAndPaste: props.disabledCopyAndPaste,
      onBlur: handleInputBlur,
      onFocus: props.onFocus,
      onInternalErrors: props.onInternalErrors,
      onPaste: props.onPaste,
    });

  const useActionBottomSheet = useMemo(
    () => props.styles?.[state]?.useActionBottomSheet?.[device],
    [state, device]
  );

  // Returns references (OptionsList Collection, ActionBottomSheet and InputPopover) and OptionsList height
  const {
    optionsListRefCollection,
    optionsListCollectionRef,
    height: listOptionsHeight,
  } = useCustomHeightFromChildrens({
    limit: props.elementsToShow,
    observer: [props.options, searchText, inputPopoverText],
    shouldCalculateHeight: !useActionBottomSheet,
  });

  // Uses effects
  // Update value when new prop value
  useEffect(() => {
    setSearchText(props.value ?? '');
    setInputPopoverText(props.value ?? '');
  }, [props.value]);

  // Set focus on popover input when show
  const actionBottomSheetRefCb = useCallback(node => {
    node?.querySelector('input')?.focus();
  }, []);

  // references
  const ref = {
    refInput: inputRef,
    refList: optionsListRefCollection,
    refIcon: iconRef,
    refActionBottomSheet: actionBottomSheetRefCb,
  };

  // Filter options
  const { optionsFiltered } = filterOptions(
    useActionBottomSheet ? inputPopoverText : searchText,
    props.options,
    props.searchFilterConfig?.wordSeparator,
    props.searchFilterConfig?.suggestInit
  );

  return {
    openOptions,
    searchText,
    inputPopoverText,
    optionsFiltered,
    showHighlightedOption,
    handleOpenOptions,
    handleClickInputSearch,
    handleIconClick,
    handleRightIconClick,
    handleInputPopoverIconClick,
    handleValueSelected,
    handleChangeInputSearch,
    handleInputKeyDown,
    handleInputPopoverKeyDown,
    state,
    ref,
    listOptionsHeight,
    handleBlurInternal,
    handleFocusInternal,
    handleInputPopoverChange,
    handleOptionsListKeyDown,
    handlePasteInternal,
  };
};
