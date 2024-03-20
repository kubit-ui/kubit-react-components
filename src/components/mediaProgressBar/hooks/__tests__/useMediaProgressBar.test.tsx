import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { useMediaProgressBar } from '../useMediaProgressBar';

describe('MediaProgressBar - useMediaProgressBar', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('onFinish function is called when HandleBarEnd and it is the last bar, onBarChange is not called', () => {
    const playingExternal = false;
    const circular = false;
    const currentBar = 0;
    const barsNum = 1;
    const onBarChange = jest.fn();
    const onFinish = jest.fn();
    const { result } = renderHook(() =>
      useMediaProgressBar({
        playingExternal,
        circular,
        currentBar,
        barsNum,
        onBarChange,
        onFinish,
      })
    );
    act(() => {
      result.current.handleBarEnd();
    });
    expect(onFinish).toHaveBeenCalled();
    expect(onBarChange).not.toHaveBeenCalled();
  });

  it('onBarChange function is called when HandleBarEnd and circular even if it is the last bar', () => {
    const playingExternal = false;
    const circular = true;
    const currentBar = 0;
    const barsNum = 1;
    const onBarChange = jest.fn();
    const onFinish = jest.fn();
    const { result } = renderHook(() =>
      useMediaProgressBar({
        playingExternal,
        circular,
        currentBar,
        barsNum,
        onBarChange,
        onFinish,
      })
    );
    act(() => {
      result.current.handleBarEnd();
    });
    expect(onFinish).not.toHaveBeenCalled();
    expect(onBarChange).toHaveBeenCalled();
  });

  it('onBarChange func is called when handleBarEnd and it is not the last bar', () => {
    const playingExternal = false;
    const circular = false;
    const currentBar = 0;
    const barsNum = 2;
    const onBarChange = jest.fn();
    const onFinish = jest.fn();
    const { result } = renderHook(() =>
      useMediaProgressBar({
        playingExternal,
        circular,
        currentBar,
        barsNum,
        onBarChange,
        onFinish,
      })
    );

    act(() => {
      result.current.handleBarEnd();
    });
    expect(onBarChange).toHaveBeenCalled();
  });

  it('onBarChange func is called when click on the bar', () => {
    const playingExternal = false;
    const circular = false;
    const currentBar = 0;
    const barsNum = 2;
    const onBarChange = jest.fn();
    const onFinish = jest.fn();
    const { result } = renderHook(() =>
      useMediaProgressBar({
        playingExternal,
        circular,
        currentBar,
        barsNum,
        onBarChange,
        onFinish,
      })
    );

    const mockEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      buttons: 1,
    }) as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>;

    act(() => {
      result.current.handleClickBar(0, mockEvent);
    });
    expect(onBarChange).toHaveBeenCalled();
  });

  it('onBarChange func is called when pressing space', () => {
    const playingExternal = false;
    const circular = false;
    const currentBar = 0;
    const barsNum = 2;
    const onBarChange = jest.fn();
    const onFinish = jest.fn();
    const { result } = renderHook(() =>
      useMediaProgressBar({
        playingExternal,
        circular,
        currentBar,
        barsNum,
        onBarChange,
        onFinish,
      })
    );
    const mockSpace = {
      key: ' ',
      preventDefault: () => ({}),
    } as unknown as React.KeyboardEvent<HTMLDivElement>;
    act(() => {
      result.current.handleKeyDownBar(0, mockSpace);
    });
    expect(onBarChange).toHaveBeenCalled();
  });

  it('onBarChange func is called when pressing enter', () => {
    const playingExternal = false;
    const circular = false;
    const currentBar = 0;
    const barsNum = 2;
    const onBarChange = jest.fn();
    const onFinish = jest.fn();
    const { result } = renderHook(() =>
      useMediaProgressBar({
        playingExternal,
        circular,
        currentBar,
        barsNum,
        onBarChange,
        onFinish,
      })
    );
    const mockEnter = {
      key: 'Enter',
      preventDefault: () => ({}),
    } as unknown as React.KeyboardEvent<HTMLDivElement>;

    act(() => {
      result.current.handleKeyDownBar(0, mockEnter);
    });
    expect(onBarChange).toHaveBeenCalled();
  });

  it('When is playing, the progressBar create a event listener to know when the animation onFinished', async () => {
    const playingExternal = true;
    const circular = false;
    const currentBar = 0;
    const barsNum = 2;
    const onBarChange = jest.fn();
    const onFinish = jest.fn();
    const progressBar = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValue({ current: progressBar });
    const mockAddEventListener = jest.fn();
    progressBar.addEventListener = mockAddEventListener;
    renderHook(() =>
      useMediaProgressBar({
        playingExternal,
        circular,
        currentBar,
        barsNum,
        onBarChange,
        onFinish,
      })
    );
    expect(mockAddEventListener).toHaveBeenCalled();
  });
});
