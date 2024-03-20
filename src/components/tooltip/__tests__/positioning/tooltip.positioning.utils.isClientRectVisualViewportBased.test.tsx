import * as isUtils from '../../positioning/utils/is.utils';
import * as userAgentUtils from '../../positioning/utils/userAgent';

describe('Tooltip Positioning - isClientRectVisualViewportBased', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('chrome', () => {
    jest.spyOn(userAgentUtils, 'getUAString').mockImplementation(() => 'chrome');
    expect(isUtils.isClientRectVisualViewportBased()).toBe(false);
  });
  it('safari', () => {
    jest.spyOn(userAgentUtils, 'getUAString').mockImplementation(() => 'safari');
    expect(isUtils.isClientRectVisualViewportBased()).toBe(true);
  });
});
