import { checkRegex } from './checkRegex';
import { regex } from './validations.constants';

export const minCharacter = (password: string, min: number): boolean => password.length >= min;
export const maxCharacter = (password: string, max: number): boolean => password.length <= max;
export const haveDigits = (password: string, parsedRepeat?: number): boolean =>
  checkRegex(regex.digits, password, parsedRepeat);
export const haveLetters = (password: string, parsedRepeat?: number): boolean =>
  checkRegex(regex.letters, password, parsedRepeat);
export const haveSymbols = (password: string, parsedRepeat?: number): boolean =>
  checkRegex(regex.symbols, password, parsedRepeat);
export const noSpaces = (password: string): boolean => !checkRegex(regex.spaces, password);
// TODO
export const upperCase = (password: string, parsedRepeat?: number): boolean => {
  if (parsedRepeat && parsedRepeat > 1) {
    let characterIndex = 0;
    let upperCaseLetters = 0;

    while (upperCaseLetters < parsedRepeat && characterIndex < password.length) {
      const currentLetter = password.charAt(characterIndex);
      if (currentLetter !== currentLetter.toLowerCase()) {
        upperCaseLetters++;
      }
      characterIndex++;
    }

    return upperCaseLetters === parsedRepeat;
  }
  return password !== password.toLowerCase();
};
export const lowerCase = (password: string, parsedRepeat?: number): boolean => {
  if (parsedRepeat && parsedRepeat > 1) {
    let characterIndex = 0;
    let lowerCaseLetters = 0;

    while (lowerCaseLetters < parsedRepeat && characterIndex < password.length) {
      const currentLetter = password.charAt(characterIndex);
      if (currentLetter !== currentLetter.toUpperCase()) {
        lowerCaseLetters++;
      }
      characterIndex++;
    }

    return lowerCaseLetters === parsedRepeat;
  }
  return password !== password.toUpperCase();
};
