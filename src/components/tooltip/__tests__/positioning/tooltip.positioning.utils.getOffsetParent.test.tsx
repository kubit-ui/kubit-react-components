import { getOffsetParent } from '../../positioning/utils/getOffsetParent';
import * as isUtils from '../../positioning/utils/is.utils';
import { getNodeName } from '../../positioning/utils/node';

describe('Tooltip Positioning - getOffsetParent', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('no offsetParent', () => {
    const element = document.createElement('div');
    expect(getNodeName(getOffsetParent(element))).toBe('');
  });

  it('offsetParent', () => {
    const parent = document.createElement('div');
    const element = document.createElement('div');

    // element.offsetParent = parent;
    parent.appendChild(element);
    expect(getNodeName(getOffsetParent(element))).toBe('div');
  });

  it('offsetParent is table and have static position, the use the next offset parent', () => {
    const grandParent = document.createElement('div');
    const parent = document.createElement('table');
    const element = document.createElement('div');
    jest.spyOn(window, 'getComputedStyle').mockImplementation(
      () =>
        ({
          position: 'static',
        }) as CSSStyleDeclaration
    );
    Object.defineProperty(element, 'offsetParent', {
      get: () => parent,
    });
    Object.defineProperty(parent, 'offsetParent', {
      get: () => grandParent,
    });
    // jest.spyOn(IsUtils, 'isHTMLElement').mockReturnValue(true);
    parent.appendChild(element);
    grandParent.appendChild(parent);
    expect(getNodeName(getOffsetParent(element))).toBe('div');
  });

  it('When element is not HTMLElement, return windows', () => {
    const element = document.createElement('div');
    jest.spyOn(isUtils, 'isHTMLElement').mockReturnValue(false);
    expect(getOffsetParent(element)).toBe(window);
  });
});
