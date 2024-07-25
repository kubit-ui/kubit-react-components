import { act, renderHook } from '@testing-library/react-hooks';

import { useAnimation } from '../hooks';

describe('useAnimation', () => {
  let rootMockElement;
  let inputWrapperMockElement;
  let animationContainer;
  let innerAnimationContainerElement;
  let originalContainer;
  let innerOriginalContainerElement;

  beforeEach(() => {
    rootMockElement?.remove();
    inputWrapperMockElement?.remove();
    animationContainer?.remove();
    innerAnimationContainerElement?.remove();
    originalContainer?.remove();
    innerOriginalContainerElement?.remove();

    rootMockElement = document.createElement('div');
    inputWrapperMockElement = document.createElement('div');
    animationContainer = document.createElement('div');
    animationContainer.setAttribute('data-id', 'input-container-animated');
    innerAnimationContainerElement = document.createElement('div');
    Object.defineProperty(innerAnimationContainerElement, 'clientWidth', {
      get: () => 500,
    });
    originalContainer = document.createElement('div');
    originalContainer.setAttribute('data-id', 'input-container');
    innerOriginalContainerElement = document.createElement('div');
    Object.defineProperty(innerOriginalContainerElement, 'clientWidth', {
      get: () => 500,
    });

    rootMockElement.appendChild(inputWrapperMockElement);
    inputWrapperMockElement.appendChild(animationContainer);
    inputWrapperMockElement.appendChild(originalContainer);
    animationContainer.appendChild(innerAnimationContainerElement);
    originalContainer.appendChild(innerOriginalContainerElement);
  });

  it('When no animation nothing happens', () => {
    const { result } = renderHook(() => useAnimation({ animated: false }));

    // Call the ref callback with the mock element
    act(() => {
      (result.current.ref as (instance: HTMLDivElement | null) => void)(
        rootMockElement as HTMLDivElement
      );
    });

    // Fire transitionend event
    act(() => {
      animationContainer.dispatchEvent(new Event('transitionend'));
    });

    // Check if boxesAnimationDone is updated
    expect(result.current.boxesAnimationDone).toBe(false);

    // Fire animationend event
    act(() => {
      animationContainer.dispatchEvent(new Event('animationend'));
    });

    // Check if labelAnimationDone is updated
    expect(result.current.labelAnimationDone).toBe(false);
  });

  it('When no ref nothing happens', () => {
    const { result } = renderHook(() => useAnimation({ animated: true }));

    // Call the ref callback with the mock element
    act(() => {
      (result.current.ref as (instance: HTMLDivElement | null) => void)(null);
    });

    // Fire transitionend event
    act(() => {
      animationContainer.dispatchEvent(new Event('transitionend'));
    });

    // Check if boxesAnimationDone is updated
    expect(result.current.boxesAnimationDone).toBe(false);

    // Fire animationend event
    act(() => {
      animationContainer.dispatchEvent(new Event('animationend'));
    });

    // Check if labelAnimationDone is updated
    expect(result.current.labelAnimationDone).toBe(false);
  });

  it('updates boxesAnimationDone and labelAnimationDone when transitionend and animationend events are fired', () => {
    const { result } = renderHook(() => useAnimation({ animated: true }));

    // Call the ref callback with the mock element
    act(() => {
      (result.current.ref as (instance: HTMLDivElement | null) => void)(
        rootMockElement as HTMLDivElement
      );
    });

    // Fire transitionend event
    act(() => {
      animationContainer.dispatchEvent(new Event('transitionend'));
      // this second event should not change the state
      animationContainer.dispatchEvent(new Event('transitionend'));
    });

    // Check if boxesAnimationDone is updated
    expect(result.current.boxesAnimationDone).toBe(true);

    // Fire animationend event
    act(() => {
      animationContainer.dispatchEvent(new Event('animationend'));
      // this second event should not change the state
      animationContainer.dispatchEvent(new Event('animationend'));
    });

    // Check if labelAnimationDone is updated
    expect(result.current.labelAnimationDone).toBe(true);
  });
});
