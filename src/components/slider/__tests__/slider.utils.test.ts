import {
  calcNewRangeValue,
  calcScaleValue,
  calcValueByOffset,
  calculateChange,
  equalsRangeValues,
  shouldUpdateLeftThumb,
  shouldUpdateRightThumb,
} from '../utils';

describe('Slider utils - equalsRangeValues', () => {
  it('return false when array length is different', () => {
    const areEquals = equalsRangeValues([1, 2], [1, 2, 3]);
    expect(areEquals).toBeFalsy();
  });

  it('return false when array are differents', () => {
    const areEquals = equalsRangeValues([1, 2], [1, 4]);
    expect(areEquals).toBeFalsy();
  });

  it('return true when array are equals', () => {
    const areEquals = equalsRangeValues([1, 2], [1, 2]);
    expect(areEquals).toBeTruthy();
  });
});

describe('Slider utils - shouldUpdateLeftThumb', () => {
  it('return true if the newValue is less or equal than prevValue[0]', () => {
    const shouldUpdate = shouldUpdateLeftThumb('right', 1, [2, 2]);
    expect(shouldUpdate).toBeTruthy();
  });
  it('return true if the activePointer is the left one and the new value less than prevValue[1]', () => {
    const shouldUpdate = shouldUpdateLeftThumb('left', 1, [2, 2]);
    expect(shouldUpdate).toBeTruthy();
  });
});

describe('Slider utils - shouldUpdateRightThumb', () => {
  it('return true if the newValue is greater or equal than prevValue[1]', () => {
    const shouldUpdate = shouldUpdateRightThumb('left', 3, [1, 2]);
    expect(shouldUpdate).toBeTruthy();
  });
  it('return true if the activePointer is the right one and the new value greater than prevValue[0]', () => {
    const shouldUpdate = shouldUpdateRightThumb('right', 3, [1, 2]);
    expect(shouldUpdate).toBeTruthy();
  });
});

describe('Slider utils - calcNewRangeValue', () => {
  it('When shouldUpdateLeftThumb is true, return the new range value with the new value in the first position', () => {
    const newRangeValue = calcNewRangeValue([2, 4], 1, { current: 'left' });
    expect(newRangeValue).toEqual([1, 4]);
  });

  it('When shouldUpdateLeftThumb, but the current active pointer is the right one, the active pointer changes to left', () => {
    const activePointer = { current: 'right' };
    const newRangeValue = calcNewRangeValue([2, 4], 1, activePointer);
    expect(newRangeValue).toEqual([1, 4]);
    expect(activePointer.current).toEqual('left');
  });

  it('When shouldUpdateRightThumb is true, return the new range value with the new value in the second position', () => {
    const newRangeValue = calcNewRangeValue([2, 4], 3, { current: 'right' });
    expect(newRangeValue).toEqual([2, 3]);
  });

  it('When shouldUpdateRightThumb, but the current active pointer is the left one, the active pointer changes to left', () => {
    const activePointer = { current: 'left' };
    const newRangeValue = calcNewRangeValue([2, 4], 6, activePointer);
    expect(newRangeValue).toEqual([2, 6]);
    expect(activePointer.current).toEqual('right');
  });

  it('When no shouldUpdateLeftThumb nor shouldUpdateRightThumb', () => {
    const activePointer = { current: 'other' };
    const newRangeValue = calcNewRangeValue([2, 5], 4, activePointer);
    expect(newRangeValue).toEqual([2, 5]);
  });
});

describe('Slider utils - calcScaleValue', () => {
  it('When step is 0 or less, return the value without changes', () => {
    // max: number, min: number, step: number, value: number
    const max = 10;
    const min = 0;
    const step = 0;
    const value = 5.5;
    const scaleValue = calcScaleValue(max, min, step, value);
    expect(scaleValue).toEqual(value);
  });
});

describe('Slider utils - calcValueByOffset', () => {
  it('When step does not have decimals, return the value without decimals', () => {
    const max = 10;
    const min = 0;
    const step = 1;
    const offset = 50;
    const offsetBoundaries = { min: 0, max: 100 };
    const value = calcValueByOffset({ max, min, step, offset, offsetBoundaries });
    expect(value).toEqual(5);
  });
  it('When step has decimals, return the value with the same decimals as the step', () => {
    const max = 1;
    const min = 0;
    const step = 0.1;
    const offset = 50;
    const offsetBoundaries = { min: 0, max: 100 };
    const value = calcValueByOffset({ max, min, step, offset, offsetBoundaries });
    expect(value).toEqual(0.5);
  });
});

describe('Slider utils - calculateChange', () => {
  let container: HTMLDivElement;
  let e: MouseEvent;

  beforeEach(() => {
    container = document.createElement('div');
    Object.defineProperty(container, 'clientWidth', {
      configurable: true,
      // Define the property getter
      get() {
        return 100;
      },
    });

    document.body.appendChild(container);

    e = {
      pageX: 50,
      preventDefault: () => ({}),
      altKey: false,
      button: 0,
      buttons: 0,
      clientX: 0,
      clientY: 0,
      ctrlKey: false,
      metaKey: false,
      movementX: 0,
      movementY: 0,
      offsetX: 0,
      offsetY: 0,
      pageY: 0,
      relatedTarget: null,
      screenX: 0,
      screenY: 0,
      shiftKey: false,
      x: 0,
      y: 0,
      getModifierState: function (): boolean {
        throw new Error('Function not implemented.');
      },
      initMouseEvent: function (): void {
        throw new Error('Function not implemented.');
      },
      detail: 0,
      view: null,
      which: 0,
      initUIEvent: function (): void {
        throw new Error('Function not implemented.');
      },
      bubbles: false,
      cancelBubble: false,
      cancelable: false,
      composed: false,
      currentTarget: null,
      defaultPrevented: false,
      eventPhase: 0,
      isTrusted: false,
      returnValue: false,
      srcElement: null,
      target: null,
      timeStamp: 0,
      type: '',
      composedPath: function (): EventTarget[] {
        throw new Error('Function not implemented.');
      },
      initEvent: function (): void {
        throw new Error('Function not implemented.');
      },
      stopImmediatePropagation: function (): void {
        throw new Error('Function not implemented.');
      },
      stopPropagation: function (): void {
        throw new Error('Function not implemented.');
      },
      NONE: 0,
      CAPTURING_PHASE: 1,
      AT_TARGET: 2,
      BUBBLING_PHASE: 3,
    } as unknown as MouseEvent;
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('returns 0 when click is outside the left boundary', () => {
    Object.defineProperty(e, 'pageX', {
      configurable: true,
      // Define the property getter
      get() {
        return -5;
      },
    });

    const offsetBoundaries = { min: 0, max: 100 };
    const result = calculateChange({ event: e, container, offsetBoundaries });
    expect(result).toBe(0);
  });

  it('returns 100 when click is outside the right boundary', () => {
    Object.defineProperty(e, 'pageX', {
      configurable: true,
      // Define the property getter
      get() {
        return 105;
      },
    });
    const offsetBoundaries = { min: 0, max: 100 };
    const result = calculateChange({ event: e, container, offsetBoundaries });
    expect(result).toBe(100);
  });

  it('returns correct offset when click is within the boundaries', () => {
    Object.defineProperty(e, 'pageX', {
      configurable: true,
      // Define the property getter
      get() {
        return 50;
      },
    });
    const offsetBoundaries = { min: 0, max: 100 };
    const result = calculateChange({ event: e, container, offsetBoundaries });
    expect(result).toBe(50);
  });

  it('returns correct offset when click is within the boundaries when touchEvent', () => {
    const touch = {
      touches: [{ pageX: 50 }],
      preventDefault: () => ({}),
    } as unknown as React.TouchEvent<Element>;
    const offsetBoundaries = { min: 0, max: 100 };
    const result = calculateChange({ event: touch, container, offsetBoundaries });
    expect(result).toBe(50);
  });
});
