import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { InputState } from '@/components/input/types/inputTheme';
import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType } from '@/types';
import { InputTypeType } from '@/types/inputType';

import { useInputDropdown } from '../useInputDropdown';

const mockProps = {
  open: true,
  elementsToShow: 2,
  optionList: {
    options: [
      { label: 'label1', value: 'option1' },
      { label: 'label2', value: 'option2' },
    ],
  },
  styles: {
    [InputState.EMPTY]: {
      allowSearch: true,
      useActionBottomSheet: {
        [DeviceBreakpointsType.DESKTOP]: false,
        [DeviceBreakpointsType.TABLET]: true,
        [DeviceBreakpointsType.MOBILE]: true,
      },
    },
    [InputState.FILLED]: {
      allowSearch: true,
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
  rightIcon: {
    icon: 'UNICORN',
    altText: 'Open info',
    onClick: jest.fn(),
  },
};

jest.useFakeTimers();

test('handleChangeInputDropdown', async () => {
  window.matchMedia = windowMatchMedia('onlyDesktop');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.DESKTOP);
  const mockOnOpenCloseOptions = jest.fn();
  const { result } = renderHook(() =>
    useInputDropdown({ ...mockProps, onOpenCloseOptions: mockOnOpenCloseOptions, value: 'option1' })
  );

  const event = { target: { value: 'newValue' } } as React.ChangeEvent<HTMLInputElement>;
  act(() => {
    result.current.handleChangeInputDropdown(event);
    jest.advanceTimersByTime(2000);
  });
  expect(mockOnOpenCloseOptions).toHaveBeenCalledWith(true);
});

test('handleValueSelected function', async () => {
  window.matchMedia = windowMatchMedia('onlyDesktop');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.DESKTOP);
  const { result } = renderHook(() => useInputDropdown({ ...mockProps }));

  const value = 'option1';
  act(() => {
    result.current.handleValueSelected(value);
  });
  expect(result.current.searchText).toBe('label1');
});

test('handleClickInputDropdown function', async () => {
  window.matchMedia = windowMatchMedia('onlyTablet');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.TABLET);
  const mockOnOpenCloseOptions = jest.fn();
  const mockOnClick = jest.fn();
  const { result } = renderHook(() =>
    useInputDropdown({
      ...mockProps,
      onOpenCloseOptions: mockOnOpenCloseOptions,
      onClick: mockOnClick,
      value: 'label1',
      hasInputInSearchList: false,
    })
  );
  const mockEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
    buttons: 1,
  }) as unknown as React.MouseEvent<HTMLInputElement, MouseEvent>;
  act(() => {
    result.current.handleClickInputDropdown(mockEvent);
  });
  expect(mockOnOpenCloseOptions).toHaveBeenCalledWith(false);
  expect(mockOnClick).toHaveBeenCalled();
});

test('handleClickIconInputDropdown function', async () => {
  window.matchMedia = windowMatchMedia('onlyDesktop');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.DESKTOP);
  const mockOnOpenCloseOptions = jest.fn();
  const mockOnIconClick = jest.fn();
  const { result } = renderHook(() =>
    useInputDropdown({
      ...mockProps,
      onOpenCloseOptions: mockOnOpenCloseOptions,
      onIconClick: mockOnIconClick,
      onRightIconClick: mockOnIconClick,
      value: 'label1',
    })
  );

  const mockEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
    buttons: 1,
  }) as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>;

  act(() => {
    result.current.handleClickIconInputDropdown(mockEvent);
  });
  expect(mockOnOpenCloseOptions).toHaveBeenCalledWith(false);
  expect(mockOnIconClick).toHaveBeenCalled();
});

test('handleInputKeyDown function Enter key', async () => {
  window.matchMedia = windowMatchMedia('onlyDesktop');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.DESKTOP);
  const mockOnOpenCloseOptions = jest.fn();
  const mockOnClick = jest.fn();
  const { result } = renderHook(() =>
    useInputDropdown({
      ...mockProps,
      onOpenCloseOptions: mockOnOpenCloseOptions,
      onClick: mockOnClick,
      value: 'label1',
    })
  );

  const event = { key: 'Enter' } as React.KeyboardEvent<HTMLInputElement>;
  act(() => {
    result.current.handleInputKeyDown(event);
  });
  expect(mockOnOpenCloseOptions).toHaveBeenCalledWith(false);
  expect(mockOnClick).toHaveBeenCalled();
});

test('handleInputKeyDown function Escape key', async () => {
  window.matchMedia = windowMatchMedia('onlyDesktop');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.DESKTOP);
  const mockOnOpenCloseOptions = jest.fn();
  const { result } = renderHook(() =>
    useInputDropdown({
      ...mockProps,
      onOpenCloseOptions: mockOnOpenCloseOptions,
      value: 'label1',
    })
  );

  const event = { key: 'Escape' } as React.KeyboardEvent<HTMLInputElement>;
  act(() => {
    result.current.handleInputKeyDown(event);
  });
  expect(mockOnOpenCloseOptions).toHaveBeenCalledWith(false);
  expect(result.current.openOptions).toBe(false);
});

test('handleInputKeyDown function ArrowDown key', async () => {
  window.matchMedia = windowMatchMedia('onlyDesktop');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.DESKTOP);
  const mockOnOpenCloseOptions = jest.fn();
  const mockOnClick = jest.fn();
  const { result } = renderHook(() =>
    useInputDropdown({
      ...mockProps,
      onOpenCloseOptions: mockOnOpenCloseOptions,
      onClick: mockOnClick,
      value: 'label1',
    })
  );

  const mockPreventDefault = jest.fn();
  const event = {
    key: 'ArrowDown',
    preventDefault: mockPreventDefault,
  } as unknown as React.KeyboardEvent<HTMLInputElement>;
  act(() => {
    result.current.handleInputKeyDown(event);
  });

  expect(mockPreventDefault).toHaveBeenCalled();
});

test('handleInputBlur function', async () => {
  window.matchMedia = windowMatchMedia('onlyDesktop');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.DESKTOP);
  const mockOnBlur = jest.fn();
  const { result } = renderHook(() =>
    useInputDropdown({
      ...mockProps,
      onBlur: mockOnBlur,
      value: 'label1',
    })
  );

  const event = { target: { value: 'newValue' } } as React.FocusEvent<HTMLInputElement, Element>;

  act(() => {
    result.current.handleInputBlur(event);
  });

  expect(mockOnBlur).toHaveBeenCalled();
});

test('handleInputPopoverChange function', async () => {
  window.matchMedia = windowMatchMedia('onlyDesktop');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.DESKTOP);
  const mockOnBlur = jest.fn();
  const { result } = renderHook(() =>
    useInputDropdown({
      ...mockProps,
      onBlur: mockOnBlur,
      value: 'option1',
    })
  );

  const event = { target: { value: 'newValue' } } as React.FocusEvent<HTMLInputElement, Element>;

  act(() => {
    result.current.handleInputPopoverChange(event);
  });

  expect(result.current.inputPopoverText).toBe('newValue');
});

test('handleInputPopoverKeyDown function', async () => {
  window.matchMedia = windowMatchMedia('onlyDesktop');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.DESKTOP);
  const mockOnBlur = jest.fn();
  const { result } = renderHook(() =>
    useInputDropdown({
      ...mockProps,
      onBlur: mockOnBlur,
      value: 'option1',
    })
  );

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

test('handleInputPopoverIconClick function', async () => {
  window.matchMedia = windowMatchMedia('onlyTablet');
  jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.TABLET);
  const { result } = renderHook(() =>
    useInputDropdown({
      ...mockProps,
      hasInputInSearchList: true,
      clearTextInputPopoverIconClick: true,
      value: 'option1',
    })
  );

  expect(result.current.inputPopoverText).toBe('label1');
  act(() => {
    result.current.handleInputPopoverIconClick();
  });

  expect(result.current.inputPopoverText).toBe('');
});
