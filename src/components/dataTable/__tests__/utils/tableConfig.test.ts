import { applyPositionToWrapper, applyZIndexToWrapper } from '../../utils/tableConfig';

describe('applyZIndexToWrapper', () => {
  it('should apply zIndex to wrapper if not already defined', () => {
    const tableConfig = { ctv: { wrapper: {} } };
    const zIndex = 10;
    const expected = { ctv: { wrapper: { z_index: zIndex } } };
    expect(applyZIndexToWrapper({ tableConfig, zIndex })).toEqual(expected);
  });

  it('should not override existing z_index in wrapper', () => {
    const tableConfig = { ctv: { wrapper: { z_index: 5 } } };
    const zIndex = 10;
    const expected = { ctv: { wrapper: { z_index: 5 } } };
    expect(applyZIndexToWrapper({ tableConfig, zIndex })).toEqual(expected);
  });
});

describe('applyPositionToWrapper', () => {
  it('should apply position to wrapper if not already defined', () => {
    const tableConfig = { ctv: { wrapper: {} } };
    const position = 'relative';
    const expected = { ctv: { wrapper: { position } } };
    expect(applyPositionToWrapper({ tableConfig, position })).toEqual(expected);
  });

  it('should not override existing position in wrapper', () => {
    const tableConfig = { ctv: { wrapper: { position: 'absolute' } } };
    const position = 'relative';
    const expected = { ctv: { wrapper: { position: 'absolute' } } };
    expect(applyPositionToWrapper({ tableConfig, position })).toEqual(expected);
  });
});
