import { getSizeWindowRem } from '../getSizeWindowRem';

describe('getSizeWindowRem utility', () => {
  it('should return Nan value', () => {
    const result = getSizeWindowRem();
    expect(result).toBe(NaN);
  });

  it('should return value', () => {
    const result = getSizeWindowRem();
    expect(result).toBe(NaN);
  });
  it('When the body is not found, should return 0', () => {
    jest.spyOn(document, 'querySelector').mockImplementationOnce(() => null);
    const result = getSizeWindowRem();
    expect(result).toBe(0);
  });
  it('should return 0 with document undefined', () => {
    Object.defineProperty(global, 'document', {
      value: undefined,
      writable: true,
    });
    const result = getSizeWindowRem();
    expect(result).toBe(0);
  });
  it('should return 0 with window undefined', () => {
    Object.defineProperty(global, 'window', {
      value: undefined,
      writable: true,
    });
    const result = getSizeWindowRem();
    expect(result).toBe(0);
  });
});
