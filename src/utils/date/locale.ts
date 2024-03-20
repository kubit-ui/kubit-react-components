import { LocaleType } from './types/locale.types';

let currentLocale = 'en-US';

const locale: LocaleType = {
  getLocale(): string {
    return currentLocale;
  },
  setLocale(newLocale: string): void {
    currentLocale = newLocale;
  },
};

Object.freeze(locale);
export { locale };
