import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { InputState } from '@/components/input/types';
import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType } from '@/types';
import { InputTypeType } from '@/types/inputType';

import * as inputHooks from '../../../../hooks/useInput/useInput';
import { useInputSearch } from '../useInputSearch';

const options = [
  {
    options: ['option1', 'option2'],
  },
];

const mockProps = {
  open: true,
  elementsToShow: 2,
  clearTextInputPopoverIconClick: true,
  options: options,
  styles: {
    [InputState.EMPTY]: {
      inputVariant: 'DEFAULT',
      popoverVariant: {
        [DeviceBreakpointsType.DESKTOP]: 'INPUT_SEARCH',
        [DeviceBreakpointsType.TABLET]: 'INPUT_SEARCH',
        [DeviceBreakpointsType.MOBILE]: 'INPUT_SEARCH',
      },
      actionBottomSheetVariant: 'DEFAULT',
      useActionBottomSheet: {
        [DeviceBreakpointsType.DESKTOP]: false,
        [DeviceBreakpointsType.TABLET]: true,
        [DeviceBreakpointsType.MOBILE]: true,
      },
    },
    [InputState.FILLED]: {
      inputVariant: 'DEFAULT',
      popoverVariant: {
        [DeviceBreakpointsType.DESKTOP]: 'INPUT_SEARCH',
        [DeviceBreakpointsType.TABLET]: 'INPUT_SEARCH',
        [DeviceBreakpointsType.MOBILE]: 'INPUT_SEARCH',
      },
      actionBottomSheetVariant: 'DEFAULT',
      useActionBottomSheet: {
        [DeviceBreakpointsType.DESKTOP]: false,
        [DeviceBreakpointsType.TABLET]: true,
        [DeviceBreakpointsType.MOBILE]: true,
      },
    },
    listOptions: {
      variant: 'DEFAULT',
      optionVariant: 'DEFAULT',
      hightlightedOptionVariant: 'DEFAULT',
    },
  },
  type: InputTypeType.TEXT,
};

const mockUseInputValues = {
  value: 'op',
  inputRef: { current: document.createElement('input') },
  state: InputState.ACTIVE,
  handleBlurInternal: jest.fn(),
  handleFocusInternal: jest.fn(),
  handleBlurStructure: jest.fn(),
  handleFocusStructure: jest.fn(),
  handleChangeInternal: jest.fn(),
  handleKeyDownInternal: jest.fn(),
  handleSetValue: jest.fn(),
};

describe('useInputSearch hook', () => {
  it('handleInputBlur function', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);
    const mockOnBlur = jest.fn();
    const { result } = renderHook(() => useInputSearch({ ...mockProps, onBlur: mockOnBlur }));

    const event = { target: { value: 'newValue' } } as React.FocusEvent<HTMLInputElement, Element>;

    act(() => {
      result.current.handleBlurInternal(event);
    });
    expect(mockOnBlur).toHaveBeenCalled();
  });

  it('handleValueSelected function', async () => {
    jest.spyOn(inputHooks, 'useInput').mockImplementation(() => mockUseInputValues);

    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const mockOnChange = jest.fn();
    const { result } = renderHook(() => useInputSearch({ ...mockProps, onChange: mockOnChange }));

    const value = 'option1';
    act(() => {
      result.current.handleValueSelected(value);
    });
    // expect(mockOnChange).toHaveBeenCalledWith(value);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('handleOpenOptions function', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);
    const mockOnPopoverOpen = jest.fn();
    const { result } = renderHook(() =>
      useInputSearch({ ...mockProps, onPopoverOpen: mockOnPopoverOpen })
    );

    const open = false;
    act(() => {
      result.current.handleOpenOptions(open);
    });
    expect(mockOnPopoverOpen).toHaveBeenCalledWith(open);
  });

  it('handleChangeInputSearch function', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);
    const mockOnChangeInputSearch = jest.fn();
    const { result } = renderHook(() =>
      useInputSearch({ ...mockProps, onChange: mockOnChangeInputSearch })
    );

    const event = { target: { value: 'option1' } } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChangeInputSearch(event);
    });

    expect(mockOnChangeInputSearch).toHaveBeenCalledWith(event);
  });

  it('handleOpenOptions prevent call function', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);
    const mockOnPopoverOpen = jest.fn();
    const { result } = renderHook(() =>
      useInputSearch({
        ...mockProps,
        executeInternalOpenOptions: false,
        onPopoverOpen: mockOnPopoverOpen,
      })
    );

    const open = true;
    act(() => {
      result.current.handleOpenOptions(open);
    });
    expect(mockOnPopoverOpen).toHaveBeenCalledTimes(0);
  });

  it('handleClickInputSearch function', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);
    const mockOnClick = jest.fn();
    const { result } = renderHook(() => useInputSearch({ ...mockProps, onClick: mockOnClick }));
    const mockEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      buttons: 1,
    }) as unknown as React.MouseEvent<HTMLInputElement, MouseEvent>;

    act(() => {
      result.current.handleClickInputSearch(mockEvent);
    });
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('handleIconClick function', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);
    const mockOnIconClick = jest.fn();
    const { result } = renderHook(() =>
      useInputSearch({ ...mockProps, onIconClick: mockOnIconClick })
    );

    const event = { target: { value: 'value event' } } as unknown as React.MouseEvent<
      HTMLButtonElement,
      MouseEvent
    >;

    act(() => {
      result.current.handleIconClick(event);
    });
    expect(mockOnIconClick).toHaveBeenCalled();
  });

  it('handleInputKeyDown function Escape key', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);
    const mockOnKeyDown = jest.fn();
    const mockOnPopoverOpen = jest.fn();

    const { result } = renderHook(() =>
      useInputSearch({ ...mockProps, onPopoverOpen: mockOnPopoverOpen, onKeyDown: mockOnKeyDown })
    );

    const event = { key: 'Escape' } as React.KeyboardEvent<HTMLInputElement>;

    act(() => {
      result.current.handleInputKeyDown(event);
    });
    expect(mockOnPopoverOpen).toHaveBeenCalled();
    expect(mockOnKeyDown).toHaveBeenCalled();
  });

  it('handleInputKeyDown function ArrowDown key', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);
    const mockOnKeyDown = jest.fn();
    const { result } = renderHook(() => useInputSearch({ ...mockProps, onKeyDown: mockOnKeyDown }));

    const mockPreventDefault = jest.fn();
    const event = {
      key: 'ArrowDown',
      preventDefault: mockPreventDefault,
    } as unknown as React.KeyboardEvent<HTMLInputElement>;

    act(() => {
      result.current.handleInputKeyDown(event);
    });
    expect(mockOnKeyDown).toHaveBeenCalled();
    expect(mockPreventDefault).toHaveBeenCalled();
  });

  it('handleInputPopoverChange function', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);
    const mockOnChangeInputSearch = jest.fn();
    const { result } = renderHook(() =>
      useInputSearch({ ...mockProps, onChange: mockOnChangeInputSearch })
    );

    const event = { target: { value: 'newValue' } } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleInputPopoverChange(event);
    });
    expect(mockOnChangeInputSearch).toHaveBeenCalled();
  });

  it('handleInputPopoverKeyDown function', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const { result } = renderHook(() => useInputSearch({ ...mockProps }));

    const mockPreventDefault = jest.fn();
    const event = {
      key: 'ArrowDown',
      preventDefault: mockPreventDefault,
    } as unknown as React.KeyboardEvent<HTMLInputElement>;

    act(() => {
      result.current.handleInputPopoverKeyDown(event);
    });
    expect(mockPreventDefault).toHaveBeenCalled();
  });

  it('handleInputPopoverIconClick function', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const { result } = renderHook(() => useInputSearch({ ...mockProps }));

    const event = { target: { value: 'option1' } } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleInputPopoverChange(event);
    });
    expect(result.current.inputPopoverText).toBe('option1');

    act(() => {
      result.current.handleInputPopoverIconClick();
    });
    expect(result.current.inputPopoverText).toBe('');
  });
});
