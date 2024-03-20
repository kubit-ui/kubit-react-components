import { act, renderHook } from '@testing-library/react-hooks';

import { useAutomateControl } from '../useAutomateControl';

describe('useAutomateControl', () => {
  let hookResult;

  beforeEach(() => {
    hookResult = renderHook(() => useAutomateControl({})).result;
  });

  it('should return playing by default', () => {
    expect(hookResult.current.isPlaying).toBe(true);
  });

  it('should stop carousel when handleClickMediaButton is called', () => {
    expect(hookResult.current.isPlaying).toBe(true);
    act(() => {
      hookResult.current.handleClickMediaButton();
    });
    expect(hookResult.current.isPlaying).toBe(false);
  });
  it('should play carousel when handleClickMediaButton is called', () => {
    const isPlayingInitially = false;
    const { result } = renderHook(() => useAutomateControl({ isPlayingInitially }));
    expect(result.current.isPlaying).toBe(false);
    act(() => {
      const playing = true;
      result.current.handleClickMediaButton(playing);
    });
    expect(result.current.isPlaying).toBe(true);
  });
  it('should stop carousel when handleMouseOver is called', () => {
    expect(hookResult.current.isPlaying).toBe(true);
    act(() => {
      hookResult.current.handleMouseOver();
    });
    expect(hookResult.current.isPlaying).toBe(false);
  });
  it('should do nothing if carousel is playing initially by default when handleMouseOut is called', () => {
    expect(hookResult.current.isPlaying).toBe(true);
    act(() => {
      hookResult.current.handleMouseOut();
    });
    expect(hookResult.current.isPlaying).toBe(true);
  });

  it('should stop carousel when handleMouseOver is called and stop it when handleMouseOut is called', () => {
    expect(hookResult.current.isPlaying).toBe(true);
    act(() => {
      hookResult.current.handleMouseOver();
    });
    expect(hookResult.current.isPlaying).toBe(false);
    act(() => {
      hookResult.current.handleMouseOut();
    });
    expect(hookResult.current.isPlaying).toBe(true);
  });

  it('should do nothing if carousel is stopped by pressing media button when handleMouseOut or handleMouseOver are called', () => {
    expect(hookResult.current.isPlaying).toBe(true);
    act(() => {
      hookResult.current.handleClickMediaButton();
    });
    expect(hookResult.current.isPlaying).toBe(false);
    act(() => {
      hookResult.current.handleMouseOver();
    });
    expect(hookResult.current.isPlaying).toBe(false);
    act(() => {
      hookResult.current.handleMouseOut();
    });
    expect(hookResult.current.isPlaying).toBe(false);
  });
});
