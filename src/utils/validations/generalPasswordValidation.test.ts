import {
  haveDigits,
  haveLetters,
  haveSymbols,
  lowerCase,
  maxCharacter,
  minCharacter,
  noSpaces,
  upperCase,
} from './generalPasswordValidation';

test('Check minCharacter', () => {
  expect(minCharacter('test', 5)).toBeFalsy();
  expect(minCharacter('test', 4)).toBeTruthy();
});

test('Check maxCharacter', () => {
  expect(maxCharacter('test', 3)).toBeFalsy();
  expect(maxCharacter('test', 4)).toBeTruthy();
});

test('Check haveDigits', () => {
  expect(haveDigits('test', 1)).toBeFalsy();
  expect(haveDigits('test')).toBeFalsy();
  expect(haveDigits('test123')).toBeTruthy();
  expect(haveDigits('test1', 1)).toBeTruthy();
  expect(haveDigits('test12', 1)).toBeTruthy();
});

test('Check haveLetters', () => {
  expect(haveLetters('1234', 1)).toBeFalsy();
  expect(haveLetters('1234')).toBeFalsy();
  expect(haveLetters('t234')).toBeTruthy();
  expect(haveLetters('tes1', 3)).toBeTruthy();
  expect(haveLetters('test.124', 3)).toBeTruthy();
});

test('Check haveSymbols', () => {
  expect(haveSymbols('test1234')).toBeFalsy();
  expect(haveSymbols('test1234', 1)).toBeFalsy();
  expect(haveSymbols('test.1234')).toBeTruthy();
  expect(haveSymbols('test.1234', 1)).toBeTruthy();
  expect(haveSymbols('test..1234', 1)).toBeTruthy();
});

test('Check noSpaces', () => {
  expect(noSpaces('test ')).toBeFalsy();
  expect(noSpaces('test')).toBeTruthy();
});

test('Check upperCase', () => {
  expect(upperCase('test.1234')).toBeFalsy();
  expect(upperCase('test.1234', 2)).toBeFalsy();
  expect(upperCase('Test.1234')).toBeTruthy();
  expect(upperCase('TesT.1234', 2)).toBeTruthy();
  expect(upperCase('TeST.1234', 2)).toBeTruthy();
});

test('Check lowerCase', () => {
  expect(lowerCase('TEST.1234')).toBeFalsy();
  expect(lowerCase('TEST.1234', 2)).toBeFalsy();
  expect(lowerCase('tEST.1234')).toBeTruthy();
  expect(lowerCase('tESt.1234', 2)).toBeTruthy();
  expect(lowerCase('tEst.1234', 2)).toBeTruthy();
});
