import { checkRegex } from './checkRegex';
import { regex } from './validations.constants';

const regexPassword = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})';

test('Check Regex without parsedRepeat', () => {
  expect(checkRegex(regexPassword, 'test')).toBeFalsy();
  expect(checkRegex(regexPassword, 'Test@1234')).toBeTruthy();
});

test('Check Regex with parsedRepeat', () => {
  expect(checkRegex(regex.spaces, 'Test Test', 2)).toBeFalsy();
  expect(checkRegex(regex.spaces, 'Test Test Test', 2)).toBeTruthy();
});
