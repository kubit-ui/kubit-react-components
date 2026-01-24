import {
  calcNewRangeValue,
  calcScaleValue,
  calcValueByOffset,
  calculateChange,
  equalsRangeValues,
  shouldUpdateLeftThumb,
  shouldUpdateRightThumb,
} from '../utils/slider.utils';

describe('Slider utils - equalsRangeValues', () => {
  it('return false when array length is different', () => {
    const areEquals = equalsRangeValues({
      values1: [1, 2],
      values2: [1, 2, 3],
    });
    expect(areEquals).toBeFalsy();
  });

  it('return false when array are differents', () => {
    const areEquals = equalsRangeValues({ values1: [1, 2], values2: [1, 4] });
    expect(areEquals).toBeFalsy();
  });

  it('return true when array are equals', () => {
    const areEquals = equalsRangeValues({ values1: [1, 2], values2: [1, 2] });
    expect(areEquals).toBeTruthy();
  });
});

describe('Slider utils - shouldUpdateLeftThumb', () => {
  it('return true if the newValue is less or equal than prevValue[0]', () => {
    const shouldUpdate = shouldUpdateLeftThumb({
      activePointer: 'right',
      newValue: 1,
      prevValue: [2, 2],
    });
    expect(shouldUpdate).toBeTruthy();
  });
  it('return true if the activePointer is the left one and the new value less than prevValue[1]', () => {
    const shouldUpdate = shouldUpdateLeftThumb({
      activePointer: 'left',
      newValue: 1,
      prevValue: [2, 2],
    });
    expect(shouldUpdate).toBeTruthy();
  });
});

describe('Slider utils - shouldUpdateRightThumb', () => {
  it('return true if the newValue is greater or equal than prevValue[1]', () => {
    const shouldUpdate = shouldUpdateRightThumb({
      activePointer: 'left',
      newValue: 3,
      prevValue: [1, 2],
    });
    expect(shouldUpdate).toBeTruthy();
  });
  it('return true if the activePointer is the right one and the new value greater than prevValue[0]', () => {
    const shouldUpdate = shouldUpdateRightThumb({
      activePointer: 'right',
      newValue: 3,
      prevValue: [1, 2],
    });
    expect(shouldUpdate).toBeTruthy();
  });
});

describe('Slider utils - calcNewRangeValue', () => {
  it('When shouldUpdateLeftThumb is true, return the new range value with the new value in the first position', () => {
    const newRangeValue = calcNewRangeValue({
      activePointer: { current: 'left' },
      newValue: 1,
      prevValue: [2, 4],
    });
    expect(newRangeValue).toEqual([1, 4]);
  });

  it('When shouldUpdateLeftThumb, but the current active pointer is the right one, the active pointer changes to left', () => {
    const activePointer = { current: 'right' };
    const newRangeValue = calcNewRangeValue({
      activePointer: activePointer,
      newValue: 1,
      prevValue: [2, 4],
    });
    expect(newRangeValue).toEqual([1, 4]);
    expect(activePointer.current).toEqual('left');
  });

  it('When shouldUpdateRightThumb is true, return the new range value with the new value in the second position', () => {
    const newRangeValue = calcNewRangeValue({
      activePointer: { current: 'right' },
      newValue: 3,
      prevValue: [2, 4],
    });
    expect(newRangeValue).toEqual([2, 3]);
  });

  it('When shouldUpdateRightThumb, but the current active pointer is the left one, the active pointer changes to left', () => {
    const activePointer = { current: 'left' };
    const newRangeValue = calcNewRangeValue({
      activePointer,
      newValue: 6,
      prevValue: [2, 4],
    });
    expect(newRangeValue).toEqual([2, 6]);
    expect(activePointer.current).toEqual('right');
  });

  it('When no shouldUpdateLeftThumb nor shouldUpdateRightThumb', () => {
    const activePointer = { current: 'other' };
    const newRangeValue = calcNewRangeValue({
      activePointer,
      newValue: 4,
      prevValue: [2, 5],
    });
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
    const scaleValue = calcScaleValue({ max, min, step, value });
    expect(scaleValue).toEqual(value);
  });
});

describe('Slider utils - calcValueByOffset', () => {
  it('When step does not have decimals, return the value without decimals', () => {
    const max = 10;
    const min = 0;
    const step = 1;
    const offset = 50;
    const offsetBoundaries = { max: 100, min: 0 };
    const value = calcValueByOffset({
      max,
      min,
      offset,
      offsetBoundaries,
      step,
    });
    expect(value).toEqual(5);
  });
  it('When step has decimals, return the value with the same decimals as the step', () => {
    const max = 1;
    const min = 0;
    const step = 0.1;
    const offset = 50;
    const offsetBoundaries = { max: 100, min: 0 };
    const value = calcValueByOffset({
      max,
      min,
      offset,
      offsetBoundaries,
      step,
    });
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
      altKey: false,
      AT_TARGET: 2,
      bubbles: false,
      BUBBLING_PHASE: 3,
      button: 0,
      buttons: 0,
      cancelable: false,
      cancelBubble: false,
      CAPTURING_PHASE: 1,
      clientX: 0,
      clientY: 0,
      composed: false,
      composedPath: function (): EventTarget[] {
        throw new Error('Function not implemented.');
      },
      ctrlKey: false,
      currentTarget: null,
      defaultPrevented: false,
      detail: 0,
      eventPhase: 0,
      getModifierState: function (): boolean {
        throw new Error('Function not implemented.');
      },
      initEvent: function (): void {
        throw new Error('Function not implemented.');
      },
      initMouseEvent: function (): void {
        throw new Error('Function not implemented.');
      },
      initUIEvent: function (): void {
        throw new Error('Function not implemented.');
      },
      isTrusted: false,
      metaKey: false,
      movementX: 0,
      movementY: 0,
      NONE: 0,
      offsetX: 0,
      offsetY: 0,
      pageX: 50,
      pageY: 0,
      preventDefault: () => ({}),
      relatedTarget: null,
      returnValue: false,
      screenX: 0,
      screenY: 0,
      shiftKey: false,
      srcElement: null,
      stopImmediatePropagation: function (): void {
        throw new Error('Function not implemented.');
      },
      stopPropagation: function (): void {
        throw new Error('Function not implemented.');
      },
      target: null,
      timeStamp: 0,
      type: '',
      view: null,
      which: 0,
      x: 0,
      y: 0,
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

    const offsetBoundaries = { max: 100, min: 0 };
    const result = calculateChange({ container, event: e, offsetBoundaries });
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
    const offsetBoundaries = { max: 100, min: 0 };
    const result = calculateChange({ container, event: e, offsetBoundaries });
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
    const offsetBoundaries = { max: 100, min: 0 };
    const result = calculateChange({ container, event: e, offsetBoundaries });
    expect(result).toBe(50);
  });

  it('returns correct offset when click is within the boundaries when touchEvent', () => {
    const touch = {
      preventDefault: () => ({}),
      touches: [{ pageX: 50 }],
    } as unknown as React.TouchEvent<Element>;
    const offsetBoundaries = { max: 100, min: 0 };
    const result = calculateChange({
      container,
      event: touch,
      offsetBoundaries,
    });
    expect(result).toBe(50);
  });
});
