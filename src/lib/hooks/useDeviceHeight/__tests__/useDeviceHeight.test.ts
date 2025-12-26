import { renderHook } from '@testing-library/react';

import { useDeviceHeight } from '../useDeviceHeight';

vi.useFakeTimers();

describe('useDeviceHeight', () => {
  beforeAll(() => {
    window.CSS = {
      supports: () => true,
    } as unknown as typeof CSS;
  });

  it('should set --100svh property on resize', async () => {
    const supportsSpy = vi.spyOn(window.CSS, 'supports');
    const setPropertySpy = vi.spyOn(
      document.documentElement.style,
      'setProperty',
    );
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');

    renderHook(() => useDeviceHeight());

    const resizeEvent = new Event('resize');
    window.dispatchEvent(resizeEvent);

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    );
    vi.runAllTimers();
    expect(setPropertySpy).toHaveBeenCalledWith('--100svh', '100svh');

    supportsSpy.mockRestore();
    setPropertySpy.mockRestore();
    addEventListenerSpy.mockRestore();

    expect(document.body).toHTMLValidate();
  });

  afterAll(() => {
    (window as Window & { CSS: unknown }).CSS = undefined;
  });
});
