/* eslint-disable complexity */
import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  ForwardedRef,
  KeyboardEventHandler,
  MutableRefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useInternalValidations } from '@/components/input/hooks';
import { InputState, InputTypeType, InternalErrorType } from '@/components/input/types';
import { ListOptionsOptionType } from '@/components/listOptions';
import { useCustomHeightFromChildrens, useInput, useMediaDevice } from '@/hooks';
import {
  isArrowDownPressed,
  isKeyEnterPressed,
  isKeyEscapePressed,
  isKeySpacePressed,
  syntheticSelect,
} from '@/utils';

// helpers
import { filterOptions, findOptionByLabel, findOptionByValue } from '../helpers/filterOptions';
import { InputDropdownStylesProps } from '../types';
import { InputDropdownOnChangeType, InputDropdownOptionsType } from '../types/inputDropdown';

export interface MultipleRef {
  refInput?: MutableRefObject<HTMLInputElement | undefined>;
  refList: ForwardedRef<unknown> | (({ ref, index }) => void);
  refActionBottomSheet: React.ForwardedRef<HTMLDivElement> | undefined | null;
  refIcon: MutableRefObject<HTMLElement | undefined>;
}

type ParamsType = {
  ref?: ForwardedRef<HTMLSelectElement | undefined>;
  open: boolean;
  elementsToShow: number;
  optionList: InputDropdownOptionsType;
  type: InputTypeType;
  value?: string;
  styles: InputDropdownStylesProps;
  disabled?: boolean;
  clearTextInputPopoverIconClick?: boolean;
  error?: boolean;
  informationAssociated?: string;
  hasInputInSearchList?: boolean;
  name?: string;
  onClick?: (
    event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
  onInputPopoverIconClick?: () => void;
  onChange?: InputDropdownOnChangeType;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onOpenCloseOptions?: (open: boolean) => void;
  onInternalErrors?: (errors: string[]) => void;
};

type ReturnHookType = {
  ref?: MultipleRef;
  listOptionsHeight: string;
  openOptions: boolean;
  searchText: string;
  inputPopoverText: string;
  optionsFiltered: InputDropdownOptionsType;
  handleOpenOptions: (open: boolean) => void;
  handleClickInputDropdown: React.MouseEventHandler<HTMLInputElement>;
  handleClickIconInputDropdown: React.MouseEventHandler<HTMLButtonElement>;
  handleInputPopoverIconClick: () => void;
  handleValueSelected: (value) => void;
  handleChangeInputDropdown: ChangeEventHandler<HTMLInputElement>;
  handleInputKeyDown: KeyboardEventHandler<HTMLInputElement>;
  handleInputBlur: FocusEventHandler<HTMLInputElement>;
  handleInputPopoverKeyDown: KeyboardEventHandler<HTMLInputElement>;
  valueSearchSelected?: string;
  state: InputState;
  handleFocusInternal: FocusEventHandler<HTMLInputElement>;
  handleInputPopoverChange: ChangeEventHandler<HTMLInputElement>;
  handleBlurStructure: FocusEventHandler<HTMLDivElement>;
  handleFocusStructure: FocusEventHandler<HTMLDivElement>;
};

export const useInputDropdown = (props: ParamsType): ReturnHookType => {
  // States
  const [openOptions, setOpenOptions] = useState(props.open);
  const [valueSearchSelected, setValueSearchSelected] = useState(props.value);
  // if the input loses focus and there is no valid option in the input value, show an error message
  const [labelSearchSelected, setLabelSearchSelected] = useState(props.value);
  // It is used to control that if an option is selected and the dropdown is opened, all the options are shown again
  const [showAllOptions, setShowAllOptions] = useState(true);
  const [searchText, setSearchText] = useState(
    findOptionByValue(props.value, props.optionList.options)?.label ?? ''
  );
  const [inputPopoverText, setInputPopoverText] = useState(
    findOptionByValue(props.value, props.optionList.options)?.label ?? ''
  );

  // ghost prototype
  const { getRef, clickOption } = useMemo(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      return syntheticSelect<ListOptionsOptionType>(
        props.optionList.options,
        props.value,
        props.name
      );
    }
    return { getRef: () => null, clickOption: () => null };
  }, [props.optionList.options]);

  useImperativeHandle(
    props.ref,
    () => {
      return getRef() as HTMLSelectElement;
    },
    []
  );

  // Variables
  const device = useMediaDevice();

  const { internalErrors, addInternalError, removeInternalError } = useInternalValidations(
    props.type,
    undefined,
    props.onInternalErrors
  );

  const handleInputBlur: React.FocusEventHandler<HTMLInputElement> = event => {
    props.onBlur?.(event);
    // if the input loses focus and there is no valid option in the input value, show an error message
    if (!labelSearchSelected) {
      addInternalError(InternalErrorType.INVALID_OPTION);
    }
  };

  // Input Basic hook
  const { state, inputRef, handleFocusInternal, handleBlurStructure, handleFocusStructure } =
    useInput({
      disabled: props.disabled,
      error: props.error || internalErrors.length > 0,
      // need for update the state
      currentValue: searchText,
      informationAssociated: props.informationAssociated,
      onFocus: props.onFocus,
      onBlur: handleInputBlur,
      onInternalErrors: props.onInternalErrors,
    });

  const useActionBottomSheet = useMemo(
    () => props.styles?.[state]?.useActionBottomSheet?.[device],
    [state, device]
  );

  const {
    optionsListRefCollection,
    optionsListCollectionRef,
    height: listOptionsHeight,
  } = useCustomHeightFromChildrens({
    limit: props.elementsToShow,
    observer: [props.optionList.options, searchText, inputPopoverText],
    shouldCalculateHeight: !useActionBottomSheet,
  });

  const showAllOptionsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Delete showAllOptionsTimeout when the component is unmounted
  useEffect(() => {
    return () => {
      if (showAllOptionsTimeout.current) {
        clearTimeout(showAllOptionsTimeout.current);
      }
    };
  }, []);
  const handleChangeShowAllOptions = ({
    value,
    timeout = 300,
  }: {
    value: boolean;
    timeout?: number;
  }) => {
    if (showAllOptionsTimeout.current) {
      clearTimeout(showAllOptionsTimeout.current);
    }
    showAllOptionsTimeout.current = setTimeout(() => {
      setShowAllOptions(value);
    }, timeout);
  };

  // Auxiliar method
  // Set the value suggested and call onChange
  const commonChangeActions = (valueSearchSelected, valueSuggest) => {
    setValueSearchSelected(valueSearchSelected);
    if (valueSuggest?.label) {
      setLabelSearchSelected(valueSuggest.label);
      handleChangeShowAllOptions({ value: true });
    }
    const event = clickOption(valueSearchSelected);
    props.onChange?.(event as unknown as ChangeEvent<HTMLSelectElement>);
  };

  // Methods
  const handleValueSelected = (value: string) => {
    const optionFound = findOptionByValue(value, props.optionList.options);
    const searchText = optionFound?.label ?? value;
    removeInternalError(InternalErrorType.INVALID_OPTION);
    setSearchText(searchText);
    setInputPopoverText(searchText);
    commonChangeActions(value, optionFound ?? { label: value, value });
  };

  const handleOpenOptions = (open: boolean) => {
    setOpenOptions(open);
    props.onOpenCloseOptions?.(open);
  };

  // Input dropdown handlers
  const handleChangeInputDropdown: React.ChangeEventHandler<HTMLInputElement> = event => {
    handleOpenOptions(true);
    const searchText = event.target.value;
    const optionFound = findOptionByLabel(searchText, props.optionList.options);
    setSearchText(searchText);
    setInputPopoverText(searchText);
    removeInternalError(InternalErrorType.INVALID_OPTION);
    if (labelSearchSelected) {
      setLabelSearchSelected('');
    }
    handleChangeShowAllOptions({ value: false, timeout: 0 });
    if (!optionFound && valueSearchSelected !== undefined) {
      commonChangeActions(undefined, null);
    }
  };

  const handleClickInputDropdown: React.MouseEventHandler<HTMLInputElement> = event => {
    handleOpenOptions(!openOptions);
    props.onClick?.(event);
  };

  const handleClickIconInputDropdown: React.MouseEventHandler<HTMLButtonElement> = event => {
    handleOpenOptions(!openOptions);
    props.onIconClick?.(event);
  };

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
    if (
      isKeyEnterPressed(event.key) ||
      (!props.styles[state]?.allowSearch && isKeySpacePressed(event.key))
    ) {
      handleOpenOptions(!openOptions);
      props.onClick?.(event);
    }
    if (isKeyEscapePressed(event.key)) {
      handleOpenOptions(false);
    }
    // Focus first element of the list
    if (isArrowDownPressed(event.key)) {
      (optionsListCollectionRef?.current?.[0]?.firstElementChild as HTMLElement)?.focus();
      event.preventDefault();
    }
  };

  // Input popover handlers
  const handleInputPopoverChange = event => {
    setInputPopoverText(event.target.value);
    if (labelSearchSelected) {
      setLabelSearchSelected('');
    }
    handleChangeShowAllOptions({ value: false, timeout: 0 });
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

  // Uses effects

  // Update value when new prop value
  useEffect(() => {
    setValueSearchSelected(props.value);
    const searchText = findOptionByValue(props.value, props.optionList.options)?.label ?? '';
    handleChangeShowAllOptions({ value: true });
    setLabelSearchSelected(searchText);
    setSearchText(searchText);
    setInputPopoverText(searchText);
  }, [props.value]);

  const actionBottomSheetRefCb = useCallback(node => {
    // Focus in the input popover if exists
    const inputInPopover = node?.querySelector('input');
    if (inputInPopover) {
      return inputInPopover.focus();
    }
    // Focus in the first enable option
    const firstEnabledOption = node?.querySelector('[role="option"]:not([aria-disabled="true"])');
    firstEnabledOption?.focus();
  }, []);

  // iconButton skip to list handler
  const iconRef = useRef<HTMLElement>();

  const handleIconButtonPress = event => {
    event.stopPropagation();
    if (isKeyEnterPressed(event.key) || isKeySpacePressed(event.key)) {
      return;
    }
    if (isKeyEscapePressed(event.key)) {
      handleOpenOptions(false);
    }
    // Focus first element of the list
    if (isArrowDownPressed(event.key)) {
      (optionsListCollectionRef?.current?.[0]?.firstElementChild as HTMLElement)?.focus();
      event.preventDefault();
    }
  };

  useEffect(() => {
    const iconButton = iconRef.current?.children[0];
    if (!iconButton || iconButton.tagName !== 'BUTTON') {
      return;
    }

    iconButton.addEventListener('keydown', handleIconButtonPress);
    return () => {
      iconButton?.removeEventListener('keydown', handleIconButtonPress);
    };
  }, []);

  // references
  const ref = {
    refInput: inputRef,
    refList: optionsListRefCollection,
    refActionBottomSheet: actionBottomSheetRefCb,
    refIcon: iconRef,
  };

  // Filter options attending to
  // 1. Allow search && !showAllOptions due to there is already one selected
  // 2. If useActionBottomSheet  && hasInputInSearchList -> popover input, else normal input
  let optionsFiltered = { ...props.optionList };
  if (props.styles[state]?.allowSearch && !showAllOptions) {
    const filter =
      useActionBottomSheet && props.hasInputInSearchList ? inputPopoverText : searchText;
    optionsFiltered = {
      ...props.optionList,
      options: filterOptions(filter, props.optionList.options),
    };
  }

  return {
    openOptions,
    valueSearchSelected,
    searchText,
    inputPopoverText,
    optionsFiltered,
    handleOpenOptions,
    handleClickInputDropdown,
    handleClickIconInputDropdown,
    handleInputPopoverIconClick,
    handleValueSelected,
    handleChangeInputDropdown,
    handleInputKeyDown,
    handleInputBlur,
    handleInputPopoverKeyDown,
    state,
    ref,
    listOptionsHeight,
    handleFocusInternal,
    handleInputPopoverChange,
    handleBlurStructure,
    handleFocusStructure,
  };
};
