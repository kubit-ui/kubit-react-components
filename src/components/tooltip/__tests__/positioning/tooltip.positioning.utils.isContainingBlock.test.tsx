import * as isUtils from '../../positioning/utils/is.utils';
import * as userAgentUtils from '../../positioning/utils/userAgent';

describe('Tooltip Positioning - isContainingBlock', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('with transform', () => {
    window.getComputedStyle = jest.fn(
      () =>
        ({
          transform: 'true',
        }) as CSSStyleDeclaration
    );
    const element = document.createElement('div');
    expect(isUtils.isContainingBlock(element)).toBe(true);
  });
  it('with perspective', () => {
    window.getComputedStyle = jest.fn(
      () =>
        ({
          transform: 'none',
          perspective: 'true',
        }) as CSSStyleDeclaration
    );
    const element = document.createElement('div');
    expect(isUtils.isContainingBlock(element)).toBe(true);
  });
  it('with backdropFilter', () => {
    window.getComputedStyle = jest.fn(
      () =>
        ({
          transform: 'none',
          perspective: 'none',
          backdropFilter: 'true',
        }) as CSSStyleDeclaration
    );
    const element = document.createElement('div');
    expect(isUtils.isContainingBlock(element)).toBe(true);
  });
  it('firefox and filter will change', () => {
    jest.spyOn(userAgentUtils, 'getUAString').mockImplementation(() => 'firefox');
    window.getComputedStyle = jest.fn(
      () =>
        ({
          transform: 'none',
          perspective: 'none',
          backdropFilter: 'none',
          willChange: 'filter',
        }) as CSSStyleDeclaration
    );
    const element = document.createElement('div');
    expect(isUtils.isContainingBlock(element)).toBe(true);
  });
  it('firefox and filter', () => {
    jest.spyOn(userAgentUtils, 'getUAString').mockImplementation(() => 'firefox');
    window.getComputedStyle = jest.fn(
      () =>
        ({
          transform: 'none',
          perspective: 'none',
          backdropFilter: 'none',
          willChange: 'none',
          filter: 'true',
        }) as CSSStyleDeclaration
    );
    const element = document.createElement('div');
    expect(isUtils.isContainingBlock(element)).toBe(true);
  });
  it('transform, perspective', () => {
    window.getComputedStyle = jest.fn(
      () =>
        ({
          transform: 'none',
          perspective: 'none',
          backdropFilter: 'none',
          filter: 'none',
          willChange: ['transform'],
        }) as unknown as CSSStyleDeclaration
    );
    const element = document.createElement('div');
    expect(isUtils.isContainingBlock(element)).toBe(true);
  });
  it('paint, layout, strict, content', () => {
    window.getComputedStyle = jest.fn(
      () =>
        ({
          transform: 'none',
          perspective: 'none',
          backdropFilter: 'none',
          filter: 'none',
          willChange: [],
          contain: ['paint'],
        }) as unknown as CSSStyleDeclaration
    );
    const element = document.createElement('div');
    expect(isUtils.isContainingBlock(element)).toBe(true);
  });
  it('others', () => {
    window.getComputedStyle = jest.fn(
      () =>
        ({
          transform: 'none',
          perspective: 'none',
          backdropFilter: 'none',
          filter: 'none',
          willChange: [],
          contain: [],
        }) as unknown as CSSStyleDeclaration
    );
    const element = document.createElement('div');
    expect(isUtils.isContainingBlock(element)).toBe(false);
  });
});
