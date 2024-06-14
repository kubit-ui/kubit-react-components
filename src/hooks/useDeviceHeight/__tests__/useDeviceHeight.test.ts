import { renderHook } from '@testing-library/react-hooks';

import { useDeviceHeight } from '../useDeviceHeight';

jest.useFakeTimers();

describe('useDeviceHeight', () => {
  beforeAll(() => {
    window.CSS = {
      supports: () => true,
    } as unknown as typeof CSS;
  });

  it('should set --100svh property on resize', () => {
    const supportsSpy = jest.spyOn(window.CSS, 'supports');
    const setPropertySpy = jest.spyOn(document.documentElement.style, 'setProperty');
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

    renderHook(() => useDeviceHeight());

    const resizeEvent = new Event('resize');
    window.dispatchEvent(resizeEvent);

    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    jest.runAllTimers();
    expect(setPropertySpy).toHaveBeenCalledWith('--100svh', '100svh');

    supportsSpy.mockRestore();
    setPropertySpy.mockRestore();
    addEventListenerSpy.mockRestore();
  });

  afterAll(() => {
    (window as Window & { CSS: unknown }).CSS = undefined;
  });
});
