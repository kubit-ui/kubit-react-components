import { describe, expect, it } from 'vitest';

import { windowMatchMedia } from '../windowMatchMedia';

describe('windowMatchMedia', () => {
  it('Should return a function that creates MediaQueryList', () => {
    const matchMedia = windowMatchMedia();

    expect(typeof matchMedia).toBe('function');
  });

  it('Should match when string matcher equals query', () => {
    const matchMedia = windowMatchMedia('desktop');
    const result = matchMedia('desktop');

    expect(result.matches).toBe(true);
  });

  it('Should not match when string matcher does not equal query', () => {
    const matchMedia = windowMatchMedia('desktop');
    const result = matchMedia('mobile');

    expect(result.matches).toBe(false);
  });

  it('Should match when array matcher includes query', () => {
    const matchMedia = windowMatchMedia(['desktop', 'tablet']);
    const result = matchMedia('desktop');

    expect(result.matches).toBe(true);
  });

  it('Should not match when array matcher does not include query', () => {
    const matchMedia = windowMatchMedia(['desktop', 'tablet']);
    const result = matchMedia('mobile');

    expect(result.matches).toBe(false);
  });

  it('Should use default matcher "onlyDesktop" when not provided', () => {
    const matchMedia = windowMatchMedia();
    const result = matchMedia('onlyDesktop');

    expect(result.matches).toBe(true);
  });

  it('Should not match default when query is different', () => {
    const matchMedia = windowMatchMedia();
    const result = matchMedia('mobile');

    expect(result.matches).toBe(false);
  });

  it('Should have media property as empty string', () => {
    const matchMedia = windowMatchMedia();
    const result = matchMedia('test');

    expect(result.media).toBe('');
  });

  it('Should have onchange property as null', () => {
    const matchMedia = windowMatchMedia();
    const result = matchMedia('test');

    expect(result.onchange).toBeNull();
  });

  it('Should call callback when addEventListener is called', () => {
    const matchMedia = windowMatchMedia();
    const result = matchMedia('test');
    const callback = vi.fn();

    result.addEventListener('change', callback);

    expect(callback).toHaveBeenCalled();
  });

  it('Should return null when addListener is called', () => {
    const matchMedia = windowMatchMedia();
    const result = matchMedia('test');

    expect(result.addListener(() => null)).toBeNull();
  });

  it('Should return true when dispatchEvent is called', () => {
    const matchMedia = windowMatchMedia();
    const result = matchMedia('test');

    expect(result.dispatchEvent(new Event('change'))).toBe(true);
  });

  it('Should return null when removeEventListener is called', () => {
    const matchMedia = windowMatchMedia();
    const result = matchMedia('test');

    expect(result.removeEventListener('change', () => null)).toBeNull();
  });

  it('Should return null when removeListener is called', () => {
    const matchMedia = windowMatchMedia();
    const result = matchMedia('test');

    expect(result.removeListener(() => null)).toBeNull();
  });
});
