import { getBoundingClientRect } from '@/components/tooltip/positioning/utils/getBoundingClientRect';
import * as isUtils from '@/components/tooltip/positioning/utils/is.utils';
import * as unwrapElement from '@/components/tooltip/positioning/utils/unwrapElement';

describe('Tooltip Positioning - getBoundingClientRect', () => {
  it('return a ClientRectObject', () => {
    const element = document.createElement('div');
    const res = getBoundingClientRect(element);

    expect(res.x).toBeDefined();
  });

  it('when isClientRectVisualViewportBased and isFixedStrategy, an offset is added, default 0', () => {
    jest.spyOn(isUtils, 'isClientRectVisualViewportBased').mockReturnValueOnce(true);
    Object.defineProperty(window, 'visualViewport', {
      writable: true,
      configurable: true,
      value: undefined,
    });

    const element = document.createElement('div');
    const res = getBoundingClientRect(element, true);

    expect(res.x).toBe(0);
  });

  it('when isClientRectVisualViewportBased and isFixedStrategy, an offset is added if exists', () => {
    jest.spyOn(isUtils, 'isClientRectVisualViewportBased').mockReturnValueOnce(true);
    Object.defineProperty(window, 'visualViewport', {
      writable: true,
      configurable: true,
      value: { offsetLeft: 10 },
    });

    const element = document.createElement('div');
    const res = getBoundingClientRect(element, true);

    expect(res.x).toBe(10);
  });

  it('takes a possible iframe into account for the calculation', () => {
    const element = document.createElement('div');
    const offsetParent = document.createElement('div');
    jest.spyOn(unwrapElement, 'unwrapElement').mockReturnValueOnce(element);
    jest.spyOn(isUtils, 'isElement').mockReturnValueOnce(false);

    let firstTime = true;
    const iFrame = document.createElement('div');
    Object.defineProperty(iFrame, 'clientLeft', {
      configurable: true,
      get: () => 10,
    });

    Object.defineProperty(window, 'frameElement', {
      configurable: true,
      get: () => {
        if (firstTime) {
          firstTime = false;
          return iFrame;
        }
        return null;
      },
    });

    const res = getBoundingClientRect(element, false, offsetParent);

    expect(res.x).toBe(10);
  });
});
