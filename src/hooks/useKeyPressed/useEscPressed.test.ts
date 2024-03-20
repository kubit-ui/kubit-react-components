import { act, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useEscPressed } from './useEscPressed';

describe('useEscPressed hook suite test', () => {
  let container;
  let ref;

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('tabindex', '-1');
    document.body.appendChild(container);
    ref = { current: container };
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    ref = null;
  });

  it('useEscPressed press esc', () => {
    const execute = jest.fn();
    renderHook(() => {
      useEscPressed({ execute, element: ref });
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27,
      });
    });

    expect(execute.mock.calls.length).toBe(0);
  });

  it('useEscPressed press esc and element focus', () => {
    container.focus();
    const execute = jest.fn();
    renderHook(() => {
      return useEscPressed({ execute, element: ref });
    }, {});
    act(() => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
      });
    });

    expect(execute.mock.calls.length).toBe(1);
  });

  it('useEscPressed press esc with element that contains active element', () => {
    const execute = jest.fn();
    const wrapper = document.createElement('div');
    const containerAux = document.createElement('div');
    containerAux.setAttribute('tabindex', '-1');
    wrapper.appendChild(containerAux);
    document.body.appendChild(wrapper);
    const refAux = { current: wrapper };
    containerAux.focus();
    renderHook(() => {
      useEscPressed({ execute, element: refAux });
    }, {});
    act(() => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
      });
    });

    expect(execute.mock.calls.length).toBe(1);
  });
});
