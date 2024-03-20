import { windowMatchMedia } from './windowMatchMedia';

test('windowMatchMedia - return a function', () => {
  expect(typeof windowMatchMedia()).toBe('function');
});

test('windowMatchMedia - default matches is onlyDesktop', () => {
  expect(windowMatchMedia()('onlyDesktop').matches).toBe(true);
  expect(windowMatchMedia()('onlyMobile').matches).toBe(false);
});

test('windowMatchMedia - when an argument is passed, the function match the argument', () => {
  expect(windowMatchMedia('onlyMobile')('onlyMobile').matches).toBe(true);
  expect(windowMatchMedia('onlyMobile')('onlyDesktop').matches).toBe(false);
});

test('windowMatchMedia - addEventListener works as a callback', () => {
  const callback = () => 5;
  expect(windowMatchMedia()('onlyDesktop').addEventListener('change', callback)).toBe(5);
});

test('windowMatchMedia - addListener, removeListener, removeEventListener, dispatchEvent mocks return null', () => {
  const mediaQueryList = windowMatchMedia()('onlyDesktop');
  expect(mediaQueryList.addListener(null)).toBe(null);
  expect(mediaQueryList.removeListener(null)).toBe(null);
  expect(mediaQueryList.removeEventListener('change', () => null)).toBe(null);
  expect(mediaQueryList.dispatchEvent(new Event('click'))).toBe(true);
});
