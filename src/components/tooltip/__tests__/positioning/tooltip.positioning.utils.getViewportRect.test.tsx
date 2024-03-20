import { getViewportRect } from '../../positioning/utils/getViewportRect';
import * as isUtils from '../../positioning/utils/is.utils';

describe('Tooltip Positioning - getViewportRect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('no visual viewport', () => {
    const strategy = 'fixed';
    const { width, height, x, y } = getViewportRect(strategy);
    expect(typeof width).toBe('number');
    expect(typeof height).toBe('number');
    expect(typeof x).toBe('number');
    expect(typeof y).toBe('number');
  });
  it('visual viewport and no isClientRectVisualViewportBased', () => {
    const strategy = 'fixed';
    window.visualViewport = {
      width: 1,
      height: 1,
      offsetLeft: 1,
      offsetTop: 1,
    } as unknown as VisualViewport;
    jest.spyOn(isUtils, 'isClientRectVisualViewportBased').mockImplementation(() => false);
    const { width, height, x, y } = getViewportRect(strategy);
    expect(typeof width).toBe('number');
    expect(typeof height).toBe('number');
    expect(typeof x).toBe('number');
    expect(typeof y).toBe('number');
  });
});
